import Image from "next/image";
import AktieLogo from "../../public/logo.png";
import { ExitIcon, HomeIcon, NotificationIcon, SettingsIcon } from "./icons";
import MenuItem from "./ManuItem";

export default function LateralMenu() {
    return (
        <aside className="flex flex-col">
            <div className="w-20 h-20 flex justify-center items-center">
                <Image src={AktieLogo} alt="Logo AKTIE TECH" width={50} height={80} />
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" text="Início" icon={HomeIcon} />
                <MenuItem url="/configs" text="Configs" icon={SettingsIcon} />
                <MenuItem url="/notifications" text="Notificações" icon={NotificationIcon} />
            </ul>
            <ul>
                <MenuItem text="Sair" icon={ExitIcon}
                    onClick={() => console.log("Eu sai!!")}
                    className="text-red-500 hover:bg-red-400 hover:text-white" />
            </ul>
        </aside>
    )
}