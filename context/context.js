import { createContext, useContext, useState } from "react";

const MainContext = createContext();

const Main = ({ children }) => {
    const [ishidden, setIshidden] = useState(true);
    const changeIsHidden = () => {
        setIshidden(!ishidden);
    };
    const data = {
        ishidden,
        changeIsHidden,
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