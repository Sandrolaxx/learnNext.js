import { TitleProps } from "../utils/types";

export default function Title(props: TitleProps) {
    return (
        <div>
            <h1 className="bg-red-400">
                {props.title}
            </h1>
            <h2 className="bg-red-400">
                {props.subTitle}
            </h2>
        </div>
    )
}