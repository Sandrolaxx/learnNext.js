import { AuthInputProps } from "../../utils/types";

export default function AuthInput(props: AuthInputProps) {
    return (
        <div className="flex flex-col">
            <label htmlFor="">{props.label}</label>
            <input type={props.type ?? "text"}
                required={props.required}
                value={props.value}
                onChange={event => props.changeValue?.(event.target.value)} />
        </div>
    );
}