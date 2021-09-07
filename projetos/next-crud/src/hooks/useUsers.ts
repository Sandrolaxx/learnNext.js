import { useEffect, useState } from "react";
import User from "../core/User";
import UserRepository from "../core/UserRepository";
import UserCollection from "../firebase/db/UserCollection";
import useTableOrForm from "./useTableOrForm";

export default function useUsers() {

    const repo: UserRepository = new UserCollection();
    const { showForm, showTable, isVisibleTable } = useTableOrForm();
    
    const [user, setUser] = useState(User.empty());
    const [users, setUsers] = useState<User[]>([]);

    useEffect(listAll, []);
    
    function listAll() {
        repo.listAll().then(users => {
            setUsers(users);
            showTable();
        });
    }

    function selectUser(user: User) {
        setUser(user);
        showForm();
    }

    async function deleteUser(user: User) {
        await repo.delete(user);
        listAll();
    }

    async function saveUser(user: User) {
        await repo.save(user);
        listAll();
    }

    function newUser() {
        setUser(User.empty());
        showForm();
    }

    return {
        user,
        users,
        newUser,
        saveUser,
        deleteUser,
        selectUser,
        showTable,
        isVisibleTable
    }

}