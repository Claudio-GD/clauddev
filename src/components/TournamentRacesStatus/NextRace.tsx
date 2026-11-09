import useNextRace from "@/hooks/useNextRace"
import { useState } from "react"
import RaceInfo from "../RaceInfo"

type NextRaceProps = {
  tournamentCode: string
  raceNumber: number
  name: string
  type: string
  dateTime: string
}

const NextRace = ({
  tournamentCode,
  raceNumber,
  name,
  type,
  dateTime,
}: NextRaceProps) => {
  const { nextRace } = useNextRace(tournamentCode)
  const [showDetails, setShowDetails] = useState<boolean>(false)

  return (
    <>
      <div className="flex items-center justify-between p-3 bg-primary/5 border border-primary/30 rounded-xl">
        <div className="flex items-center gap-4">
          <div className="text-primary">
            <span className="material-symbols-outlined animate-pulse">
              sports_score
            </span>
          </div>
          <div>
            <p className="text-primary text-[10px] font-bold uppercase tracking-widest">
              Fecha {raceNumber} • Próxima Carrera
            </p>
            <p className="text-slate-900 dark:text-white text-sm font-bold">
              {name} - {type}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#9db9a8] text-xs">{dateTime}</span>
          {nextRace && (
            <button
              className="px-4 py-1.5 bg-primary text-background-dark rounded-full text-xs font-bold"
              onClick={() => setShowDetails(!showDetails)}
            >
              Detalles
            </button>
          )}
        </div>
      </div>
      {showDetails && nextRace && (
        <details
          className="group bg-white dark:bg-[#1c2720] rounded-2xl shadow-xl border border-slate-200 dark:border-[#28392f] overflow-hidden"
          open={true}
        >
          <summary className="cursor-pointer p-6">
            <RaceInfo nextRace={nextRace} />
          </summary>
        </details>
      )}
    </>
  )
}

export default NextRace
