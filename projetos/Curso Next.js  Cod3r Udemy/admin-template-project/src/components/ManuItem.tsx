import Link from "next/link";
import { MenuItemProps } from "../utils/types";

export default function MenuItem(props: MenuItemProps) {
    return (
        <li onClick={props.onClick} className={`hover:bg-gray-100 cursor-pointer text-gray-600 ${props.className}`}>
            {props.url ? (
                <Link href={props.url}>
                    <span className="w-20 h-20 flex flex-col justify-center items-center">
                        {props.icon}
                        <span className="text-xs font-light">
                            {props.text}
                        </span>
                    </span>
                </Link>
            ) : (
                <span className="w-20 h-20 flex flex-col justify-center items-center">
                    {props.icon}
                    <span className="text-xs font-light">
                        {props.text}
                    </span>
                </span>
            )}
        </li>
    );
}