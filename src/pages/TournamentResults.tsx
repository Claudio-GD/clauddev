import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { DashboardStats } from "@/components/DashboardStats"
import { ResultTable } from "@/components/ResultTable/ResultTable"
import { TournamentHeader } from "@/components/TournamentHeader"
import Podium from "@/components/Podium"
import useTournament from "@/hooks/useTournament"

export function TournamentResults() {
  const { id } = useParams()
  const [liderName, setLiderName] = useState<string | undefined>("")

  const { tournamentData } = useTournament(id !== undefined ? id : "")

  useEffect(() => {
    document.title = tournamentData?.name ?? ""
  }, [tournamentData?.name])

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
      {tournamentData && <TournamentHeader tournament={tournamentData} />}
      {tournamentData?.is_finished ? <Podium /> : body}
    </>
  )
}
