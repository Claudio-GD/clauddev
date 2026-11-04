import { useState } from "react"
import { NextRace } from "@/components/NextRace"
import useNextRace from "@/hooks/useNextRace"
import { StatsSkeleton } from "@/components/StatsSkeleton"
import type { TournamentRow } from "@/hooks/useTournament"

type DashboardStatsProp = {
  pilotName: string | undefined
  tournament: TournamentRow | undefined | null
}

export const DashboardStats = ({
  pilotName,
  tournament,
}: DashboardStatsProp) => {
  const [open, setOpen] = useState(false)
  const { nextRace, isLoading, error } = useNextRace(
    tournament ? tournament.code : "",
  )

  const handleClickNextRace = () => {
    setOpen(true)
  }

  const pilotStatus = tournament
    ? tournament.is_finished
      ? "Ganador "
      : "Lider "
    : ""

  if (isLoading) return <StatsSkeleton />
  if (error) return <p>Error: {error.message}</p>

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {!nextRace ? null : (
          <a
            href="#"
            onClick={handleClickNextRace}
            title="Ver siguiente carrera"
          >
            <div className="bg-surface border border-surface rounded-2xl p-4 flex items-center gap-4 shadow-sm">
              <div className="size-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                <span className="material-symbols-outlined">
                  calendar_month
                </span>
              </div>
              <div>
                <p className="text-text-muted text-xs font-medium uppercase">
                  Próxima Carrera
                </p>
                <p className="text-text font-bold">
                  {nextRace?.name} - {nextRace?.short_date} {nextRace?.year}
                </p>
              </div>
            </div>
          </a>
        )}
        <div className="bg-surface border border-surface rounded-2xl p-4 flex items-center gap-4 shadow-sm">
          <div className="size-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            <span className="material-symbols-outlined">trophy</span>
          </div>
          <div>
            <p className="text-text-muted text-xs font-medium uppercase">
              {pilotStatus} del campeonato
            </p>
            <p className="text-text font-bold">{pilotName}</p>
          </div>
        </div>
      </div>
      {nextRace && (
        <NextRace open={open} setOpen={setOpen} nextRace={nextRace} />
      )}
    </>
  )
}
