import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { DashboardStats } from "@/components/DashboardStats"
import { ResultTable } from "@/components/ResultTable/ResultTable"
import { TournamentHeader } from "@/components/TournamentHeader"
import { ThemeToggleButton } from "@/components/ThemeToggleButton"
import { useThemeStore } from "@/store/useThemeStore"
import Podium from "@/components/Podium"
import useTournament from "@/hooks/useTournament"

export function TournamentResults() {
  const { id } = useParams()
  const [liderName, setLiderName] = useState<string | undefined>("")

  const isLight = useThemeStore((state) => state.isLight)

  const { tournamentData } = useTournament(id !== undefined ? id : "")

  useEffect(() => {
    document.title = tournamentData?.name ?? ""
    const link = document.querySelector("link[rel~='icon']")

    if (link) {
      link.setAttribute("href", "/logo.png")
    }
  }, [tournamentData?.name])

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add("light")
    } else {
      document.documentElement.classList.remove("light")
    }
  }, [isLight])

  const body =
    id !== undefined ? (
      <>
        {tournamentData && (
          <DashboardStats pilotName={liderName} tournament={tournamentData} />
        )}
        <ResultTable setLider={setLiderName} tournamentCode={id} />
      </>
    ) : null

  return (
    <>
      <ThemeToggleButton />
      <div className="relative flex min-h-screen w-full flex-col group/design-root">
        {/* <Header /> */}
        <main className="flex-1 px-4 md:px-10 py-8 lg:px-20 max-w-[1600px] mx-auto w-full">
          {tournamentData && <TournamentHeader tournament={tournamentData} />}
          {tournamentData?.is_finished ? <Podium /> : body}
        </main>
      </div>
    </>
  )
}
