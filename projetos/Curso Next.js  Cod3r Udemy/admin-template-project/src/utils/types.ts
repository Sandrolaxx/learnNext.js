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
    url: string;
    text: string;
    icon: any;
}