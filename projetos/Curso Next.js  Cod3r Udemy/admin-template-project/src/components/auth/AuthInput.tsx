import { AuthInputProps } from "../../utils/types";

export default function AuthInput(props: AuthInputProps) {
    return (
        <div className="flex flex-col mt-4">
            <label htmlFor="">{props.label}</label>
            <input type={props.type ?? "text"}
                required={props.required}
                value={props.value}
                onChange={event => props.changeValue?.(event.target.value)}
                className="px-4 py-3 rounded-lg bg-gray-100 mt-2 border
                focus:border-indigo-200 focus:outline-none focus:bg-white"
            />
        </div>
    );
}