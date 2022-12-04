import { HeaderProps } from "../utils/types";
import Title from "./Title";

export default function Header(props: HeaderProps) {
    return (
        <div>
            <Title title={props.title} subTitle={props.subTitle} />
        </div>
    )
}