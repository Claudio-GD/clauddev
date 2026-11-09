import { Outlet } from "react-router-dom"

import { ThemeToggleButton } from "@/components/ThemeToggleButton"
import { useThemeStore } from "@/store/useThemeStore"
import { useEffect } from "react"

export default function MainLayout() {
  const isLight = useThemeStore((state) => state.isLight)

  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']")

    if (link) {
      link.setAttribute("href", "/logo.png")
    }
  }, [])

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add("light")
    } else {
      document.documentElement.classList.remove("light")
    }
  }, [isLight])

  return (
    <>
      <ThemeToggleButton />
      <div className="relative flex min-h-screen w-full flex-col group/design-root">
        <main className="flex-1 px-4 md:px-10 py-8 lg:px-20 max-w-[1600px] mx-auto w-full">
          <Outlet />
        </main>
      </div>
    </>
  )
}
