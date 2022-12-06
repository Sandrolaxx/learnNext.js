import Link from "next/link";
import { MenuItemProps } from "../utils/types";

export default function MenuItem(props: MenuItemProps) {
    return (
        <li onClick={props.onClick} className="hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-800">
            {props.url ? (
                <Link href={props.url}>
                    <span className="w-24 h-20 flex flex-col justify-center items-center
                        text-gray-600 dark:text-gray-200">
                        {props.icon}
                        <span className="text-xs font-light">
                            {props.text}
                        </span>
                    </span>
                </Link>
            ) : (
                <span className={`w-24 h-20 flex flex-col justify-center items-center ${props.className}`}>
                    {props.icon}
                    <span className="text-xs font-light">
                        {props.text}
                    </span>
                </span>
            )}
        </li>
    );
}