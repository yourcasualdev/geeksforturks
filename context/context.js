import { createContext, useContext, useState } from "react";

const MainContext = createContext();

const Main = ({ children }) => {
    const [ishidden, setIshidden] = useState(true);
    const [theme, setTheme] = useState("light");

    const changeTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
        console.log("theme changed: ", theme);
    };


    const changeIsHidden = () => {
        setIshidden(!ishidden);
    };

    const data = {
        ishidden,
        changeIsHidden,
        theme,
        changeTheme
    }

    return (
        <MainContext.Provider value={data}>
            {children}
        </MainContext.Provider>
    );
};

export default Main;
export {
    MainContext,
    useContext
}