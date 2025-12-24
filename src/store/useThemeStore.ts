import { create } from "zustand"
import { persist } from "zustand/middleware"

type ThemeState = {
    isLight: boolean
    toggleTheme: () => void
}

export const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            isLight: true,
            toggleTheme: () => set((state) => ({ isLight: !state.isLight })),
        }),
        {
            name: "theme-storage",
        }
    )
)