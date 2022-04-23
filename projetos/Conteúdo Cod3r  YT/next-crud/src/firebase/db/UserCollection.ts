import firebase from "../config";
import User from "../../core/User";
import UserRepository from "../../core/UserRepository";

export default class UserCollection implements UserRepository {
    
    #conversor = {
        toFirestore(user: User) {
            return {
                name: user.name,
                age: user.age
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot,
            options: firebase.firestore.SnapshotOptions): User {
            const data = snapshot.data(options);

            return new User(data.name, data.age, snapshot.id);
        }
    }

    async save(user: User): Promise<User> {
        
        if (user?.id) {
            await this.#colection().doc(user.id).set(user);
            return user;
        } else {
            const docRef = await this.#colection().add(user);
            const doc = await docRef.get();
            
            return doc.data()!;
        }

    }

    async delete(user: User): Promise<void> {
        return this.#colection().doc(user.id).delete();
    }
    async listAll(): Promise<User[]> {
        const query = await this.#colection().get();

        return query.docs.map(doc => doc.data()) ?? [];
    }

    #colection () {
        return firebase.firestore()
            .collection('users')
            .withConverter(this.#conversor);
    }

}