import User from "../core/User";
import { EditIcon, TrashIcon } from "./Icons";

interface TableProps {
    users: User[];
    selectedUser?: (user: User) => void
    deletedUser?: (user: User) => void
}

export default function Table(props: TableProps) {

    const showActions = props.deletedUser || props.selectedUser;

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-4">Id</th>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Age</th>
                {showActions ? <th className="text-center p-4">Actions</th> : false}
            </tr>
        );
    }

    function renderData() {
        return props.users?.map((user, i) => {
            return (
                <tr key={user.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{user.id}</td>
                    <td className="text-left p-4">{user.name}</td>
                    <td className="text-left p-4">{user.age}</td>
                    {showActions ? renderActions(user) : false}
                </tr>
            );
        });
    }

    function renderActions(user: User) {
        return (
            <td className="flex space-x-6 justify-center">
                {props.selectedUser ? (
                    <button onClick={() => props.selectedUser?.(user)} className={`
                    flex justify-center items-center
                    text-green-600 rounded-full
                    hover:bg-purple-50 p-2 m-1
                `}>
                        {EditIcon}
                    </button>
                ) : false}
                {props.deletedUser  ? (
                    <button onClick={() => props.deletedUser?.(user)} className={`
                    flex justify-center items-center
                    text-red-600 rounded-full
                    hover:bg-purple-50 p-2 m-1
                `}>
                        {TrashIcon}
                    </button>
                ) : false}
            </td>
        );
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
            text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    );
}