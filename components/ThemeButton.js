import { MainContext } from "../context/context"
import { useContext } from "react"

const ThemeButton = () => {
    const { theme, changeTheme } = useContext(MainContext)
    return (
        theme === "light" ?
            <div className="flex justify-center items-center">
                <button onClick={() => changeTheme()} className="text-2xl">
                    ☀
                </button>
            </div>
            :
            <div className="flex justify-center items-center">
                <button onClick={() => changeTheme()} className="text-2xl">
                    🌙
                </button>
            </div>
    )
}
export default ThemeButton