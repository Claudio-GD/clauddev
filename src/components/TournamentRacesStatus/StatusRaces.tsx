import useGetStatusRaces from "@/hooks/useGetStatusRaces"
import FinishedRace from "./FinishedRace"
import NextRace from "./NextRace"
import ScheduledRace from "./ScheduledRace"

type StatusRacesProps = {
  tournamentCode: string
}

const StatusRaces = ({ tournamentCode }: StatusRacesProps) => {
  const { tournamentRaces, isLoading, error } =
    useGetStatusRaces(tournamentCode)

  if (error) return null
  if (isLoading) return <div>Loading...</div>

  let raceNumber = 0
  let nextRace = 0

  return (
    <>
      {tournamentRaces && (
        <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-[#28392f]">
          <div className="grid grid-cols-1 gap-3">
            {tournamentRaces.map((r) => {
              raceNumber++
              if (r.finished) {
                return (
                  <FinishedRace
                    key={r.circuit_name}
                    raceNumber={raceNumber}
                    name={r.circuit_name}
                    type={r.circuit_type}
                  />
                )
              }

              if (nextRace === 0) {
                const next = (
                  <NextRace
                    key={r.circuit_name}
                    tournamentCode={tournamentCode}
                    raceNumber={raceNumber}
                    name={r.circuit_name}
                    type={r.circuit_type}
                    dateTime={r.race_time}
                  />
                )
                nextRace++
                return next
              }

              return (
                <ScheduledRace
                  key={r.circuit_name}
                  raceNumber={raceNumber}
                  name={r.circuit_name}
                  type={r.circuit_type}
                  dateTime={r.race_time}
                />
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}

export default StatusRaces
