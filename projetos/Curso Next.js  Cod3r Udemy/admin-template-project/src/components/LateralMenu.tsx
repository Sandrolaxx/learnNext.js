import Image from "next/image";
import AktieLogo from "../../public/images/logo.png";
import useAuthContext from "../data/hook/useAuthContext";
import { ExitIcon, HomeIcon, NotificationIcon, SettingsIcon } from "./icons";
import MenuItem from "./ManuItem";

export default function LateralMenu() {
    const { handleLogout } = useAuthContext();

    return (
        <aside className="flex flex-col dark:bg-gray-900 dark:text-gray-200">
            <div className="w-24 h-20 flex justify-center items-center">
                <Image src={AktieLogo} alt="Logo AKTIE TECH" width={50} height={80} />
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" text="Início" icon={HomeIcon} />
                <MenuItem url="/configs" text="Configs" icon={SettingsIcon} />
                <MenuItem url="/notifications" text="Notificações" icon={NotificationIcon} />
            </ul>
            <ul>
                <MenuItem text="Sair" icon={ExitIcon}
                    onClick={handleLogout}
                    className="text-red-500 hover:bg-red-400 hover:text-white
                    dark:text-red-400 dark:hover:text-white dark:hover:bg-red-700" />
            </ul>
        </aside>
    )
}