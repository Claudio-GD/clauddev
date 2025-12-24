import { DashboardStats } from "@components/DashboardStats";
import { ResultTable } from "@components/ResultTable/ResultTable";
import { TournamentHeader } from "@components/TournamentHeader";
import { ThemeToggleButton } from "@components/ThemeToggleButton";
// import { Header } from "@components/Header"
// import { Pagination } from '@components/Pagination'
import { useThemeStore } from "@store/useThemeStore";
import { useEffect } from "react";

export function TournamentResults() {
    const isLight = useThemeStore((state) => state.isLight)

    useEffect(() => {
        document.title = "Torneo FRD Godzilla -Tabla de posiciones"
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
                {/* <Header /> */}
                <main className="flex-1 px-4 md:px-10 py-8 lg:px-20 max-w-[1600px] mx-auto w-full">
                    <TournamentHeader />
                    <DashboardStats />
                    <ResultTable />
                    {/* <Pagination /> */}
                </main>
            </div>
        </>
    )
}