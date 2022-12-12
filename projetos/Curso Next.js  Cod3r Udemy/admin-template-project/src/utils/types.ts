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
    theme: string;
    alterTheme: () => void;
}

export interface AuthInputProps {
    label: string;
    value: any;
    required?: boolean;
    type?: "text" | "email" | "password";
    changeValue: (newValue: any) => void;
}

export interface User {
    uid: string;
    email: string | null;
    name: string | null;
    token: string;
    provider: string;
    imageUrl: string | null;
}

export interface AuthContextProps {
    user?: User;
    isLoading?: boolean;
    handleLogin?: (email: string, password: string) => Promise<void>;
    handleRegister?: (email: string, password: string) => Promise<void>;
    handleLoginGoogle?: () => Promise<void>;
    handleLogout?: () => Promise<void>;
}
