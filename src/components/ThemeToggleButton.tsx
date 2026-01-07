import { useThemeStore } from "@/store/useThemeStore";

export const ThemeToggleButton = () => {
    const { isLight, toggleTheme } = useThemeStore()

    return (
        <div className="w-full flex justify-end p-4">
            <button onClick={toggleTheme}
                className="flex items-center gap-2 p-2 px-4 rounded-lg bg-surface hover:bg-surface-dark-highlight transition-all cursor-pointer group">
                <span className="material-symbols-outlined group-hover:rotate-360 transition-transform duration-300">{isLight ? "light_mode" : "dark_mode"}</span>
            </button>
        </div>
    )
}   