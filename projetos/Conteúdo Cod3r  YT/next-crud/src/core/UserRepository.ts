import User from "./User";

export default interface UserRepository {

    save(user: User): Promise<User>;
    
    delete(user: User): Promise<void>;
    
    listAll(): Promise<User[]>;
    
}