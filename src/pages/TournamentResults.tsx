import { DashboardStats } from "@/components/DashboardStats"
import { ResultTable } from "@/components/ResultTable/ResultTable"
import { TournamentHeader } from "@/components/TournamentHeader"
import { ThemeToggleButton } from "@/components/ThemeToggleButton"
// import { Header } from "@components/Header"
// import { Pagination } from '@components/Pagination'
import { useThemeStore } from "@/store/useThemeStore"
import { useEffect, useState } from "react"
import Podium from "@/components/Podium"
import { useParams } from "react-router-dom"

type ResultsProps = {
  title: string
  name: string
  season: string
  isFinished?: boolean
}

export function TournamentResults({
  title,
  name,
  season,
  isFinished = false,
}: ResultsProps) {
  const { id } = useParams()
  const [liderName, setLiderName] = useState<string | undefined>("")

  const isLight = useThemeStore((state) => state.isLight)

  useEffect(() => {
    document.title = title
    const link = document.querySelector("link[rel~='icon']")

    if (link) {
      link.setAttribute("href", "/logo.png")
    }
  }, [title])

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
        <DashboardStats pilotName={liderName} isFinished={isFinished} />
        <ResultTable setLider={setLiderName} tournamentCode={id} />
      </>
    ) : null

  return (
    <>
      <ThemeToggleButton />
      <div className="relative flex min-h-screen w-full flex-col group/design-root">
        {/* <Header /> */}
        <main className="flex-1 px-4 md:px-10 py-8 lg:px-20 max-w-[1600px] mx-auto w-full">
          <TournamentHeader name={name} season={season} isFinished />
          {isFinished ? <Podium /> : body}
          {/* <Pagination /> */}
        </main>
      </div>
    </>
  )
}
