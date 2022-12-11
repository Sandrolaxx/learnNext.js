import { createContext, useEffect, useState } from "react";
import { AppContextProps } from "../../utils/types";

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: any) {
    const [theme, setTheme] = useState("");

    function alterTheme() {
        const newTheme = theme === "" ? "dark" : "";

        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    }

    useEffect(() => {
        if (localStorage.getItem("theme")) {
            console.log(localStorage.getItem("theme"));

            setTheme(localStorage.getItem("theme")!);
        }
    }, []);

    return (
        <AppContext.Provider value={{ theme, alterTheme }}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppContext;