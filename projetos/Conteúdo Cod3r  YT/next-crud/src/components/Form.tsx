import { useState } from "react";
import User from "../core/User";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
    user: User;
    userChanged?: (user: User) => void;
    canled?: () => void;
}

export default function Form(props: FormProps) {

    const id = props.user?.id;
    const [name, setName] = useState(props.user?.name ?? '');
    const [age, setAge] = useState(props.user?.age ?? 0);

    return (
        <div>
            {id ? ( 
            <Input 
                text="User Id" 
                value={id}
                type="text"
                readonly={true}
                className="mb-4"
            />) : false }   
            <Input 
                text="Name" 
                value={name}
                type="text"
                onChange={setName}
                className="mb-4"
            />
            <Input 
                text="Age" 
                value={age}
                type="number"
                onChange={setAge}
            />
            <div className="flex justify-end mt-7">
                <Button color="blue" className="mr-2"
                    onClick={() => props.userChanged?.(new User(name, age, id))}
                >
                    {id ? "Save" : "Create"}
                </Button>
                <Button onClick={props.canled}>
                    Cancel
                </Button>
            </div>
        </div>
    );

}