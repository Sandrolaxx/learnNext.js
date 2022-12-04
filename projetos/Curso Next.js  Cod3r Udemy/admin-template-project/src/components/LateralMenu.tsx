import { HomeIcon, NotificationIcon, SettingsIcon } from "./icons";
import MenuItem from "./ManuItem";

export default function LateralMenu() {
    return (
        <div>
            <aside>
                <ul>
                    <MenuItem url="/" text="Inicio" icon={HomeIcon} />
                    <MenuItem url="/config" text="Configs" icon={SettingsIcon} />
                    <MenuItem url="/notification" text="Notificações" icon={NotificationIcon} />
                </ul>
            </aside>
        </div>
    )
}