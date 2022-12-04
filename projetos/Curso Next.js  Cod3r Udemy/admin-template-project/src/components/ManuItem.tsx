import { MenuItemProps } from "../utils/types";

export default function MenuItem(props: MenuItemProps) {
    return (
        <li className="">
            {props.icon}
        </li>
    );
}