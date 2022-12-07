import { createContext, useState } from "react";
import { AppContextProps } from "../../utils/types";

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: any) {
    const [theme, setTheme] = useState("");

    function alterTheme() {
        setTheme(theme === "" ? "dark" : "");
    }

    return (
        <AppContext.Provider value={{ theme, alterTheme }}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppContext;