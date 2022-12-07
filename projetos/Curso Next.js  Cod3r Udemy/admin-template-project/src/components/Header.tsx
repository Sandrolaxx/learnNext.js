import useAppContext from "../data/hook/useAppContext";
import { HeaderProps } from "../utils/types";
import AlterThemeBtn from "./AlterThemeBtn";
import Title from "./Title";

export default function Header(props: HeaderProps) {
    const { theme, alterTheme } = useAppContext();

    return (
        <div className="flex">
            <Title title={props.title} subTitle={props.subTitle} />
            <div className="flex flex-grow justify-end">
                <AlterThemeBtn theme={theme!} alterTheme={alterTheme!} />
            </div>
        </div>
    )
}