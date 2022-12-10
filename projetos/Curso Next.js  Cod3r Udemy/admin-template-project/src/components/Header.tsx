import Link from "next/link";
import useAppContext from "../data/hook/useAppContext";
import useAuthContext from "../data/hook/useAuthContext";
import { HeaderProps } from "../utils/types";
import AlterThemeBtn from "./AlterThemeBtn";
import Title from "./Title";

export default function Header(props: HeaderProps) {
    const { theme, alterTheme } = useAppContext();
    const { user } = useAuthContext();

    return (
        <div className="flex">
            <Title title={props.title} subTitle={props.subTitle} />
            <div className="flex flex-grow justify-end items-center">
                <AlterThemeBtn theme={theme!} alterTheme={alterTheme!} />
                <Link href="/profile">
                    <img src={user?.imageUrl ?? "/images/profile.png"}
                        alt="Avatar do Usuário"
                        className="h-8 w-8 rounded-full cursor-pointer ml-3
                            hover:border hover:border-orange-200"
                    />
                </Link>
            </div>
        </div>
    )
}