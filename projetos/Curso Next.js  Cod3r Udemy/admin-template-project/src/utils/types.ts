export interface LayoutProps {
    title: string;
    subTitle: string;
    children?: any;
}

export interface HeaderProps {
    title: string;
    subTitle: string;
}

export interface TitleProps {
    title: string;
    subTitle: string;
}

export interface ContentProps {
    children?: any;
}

export interface MenuItemProps {
    text: string;
    icon: any;
    url?: string;
    className?: string;
    onClick?: (event: any) => void;
}

export interface AppContextProps {
    theme?: string;
    alterTheme?: () => void;
}

export interface AlterThemeBtnProps {
    theme: string,
    alterTheme: () => void;
}