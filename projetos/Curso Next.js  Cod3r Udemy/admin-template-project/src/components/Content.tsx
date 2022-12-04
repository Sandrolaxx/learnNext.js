import { ContentProps } from "../utils/types";

export default function Content(props: ContentProps) {
    return (
        <div className="flex flex-col mt-7 bg-purple-400">
            {props.children}
        </div>
    )
}