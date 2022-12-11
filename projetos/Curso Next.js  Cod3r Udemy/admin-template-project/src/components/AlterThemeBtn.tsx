import { AlterThemeBtnProps } from "../utils/types";
import { MoonIcon, SunIcon } from "./icons";

export default function AlterThemeBtn(props: AlterThemeBtnProps) {
    return props.theme === "" ? (
        <div onClick={props.alterTheme} className="hidden sm:flex items-center
            bg-gradient-to-r from-yellow-300 to-yellow-600 w-14 h-8 lg:w-24
            p-1 rounded-full justify-end cursor-pointer">
            <div className="w-6 h-6 flex items-center justify-center bg-white 
                text-yellow-600 rounded-full">
                {SunIcon(5, 5)}
            </div>
            <div className="hidden lg:flex items-center ml-4 mr-1 text-white">
                <span>Claro</span>
            </div>
        </div>
    ) : (
        <div onClick={props.alterTheme} className="hidden sm:flex items-center
            bg-gradient-to-r from-gray-500 to-gray-900 w-14 h-8 lg:w-24
            p-1 rounded-full cursor-pointer">
            <div className="hidden lg:flex items-center mr-3 ml-1 text-gray-300">
                <span className="text-sm">Escuro</span>
            </div>
            <div className="w-6 h-6 flex items-center justify-center bg-black 
                text-yellow-300 rounded-full">
                {MoonIcon(5, 5)}
            </div>
        </div>
    );
}