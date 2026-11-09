import StatusRaces from "@/components/TournamentRacesStatus/StatusRaces"
import useGetOpenTournaments from "@/hooks/useGetOpenTournaments"
import { useEffect } from "react"

export function TournamentList() {
  useEffect(() => {
    document.title = "Torneos"
  }, [])

  const { openTournaments, isLoading } = useGetOpenTournaments()

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="space-y-6">
      <h2 className="text-slate-900 dark:text-white text-xl font-bold flex items-center gap-2">
        <span className="w-2 h-6 bg-primary rounded-full"></span>
        Torneos en Curso
      </h2>
      {openTournaments &&
        openTournaments.map((t) => {
          const progress = Math.round((t.completed_races * 100) / t.total_races)
          return (
            <details
              key={t.code}
              className="group bg-white dark:bg-[#1c2720] rounded-2xl shadow-xl border border-slate-200 dark:border-[#28392f] overflow-hidden"
              open={false}
            >
              <summary className="cursor-pointer p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="size-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                      <span className="material-symbols-outlined text-3xl">
                        emoji_events
                      </span>
                    </div>
                    <div>
                      <h3 className="text-slate-900 dark:text-white text-xl font-bold">
                        {t.name}
                      </h3>
                    </div>
                  </div>
                  <div className="flex-1 max-w-xs">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-xs font-bold text-[#9db9a8]">
                        Progreso de Fechas
                      </span>
                      <span className="text-xs font-bold text-primary">
                        {t.completed_races} / {t.total_races}
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-[#111814] h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-primary h-full transition-all duration-700"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-[#9db9a8] text-[10px] uppercase font-bold tracking-wider">
                        Líder Actual
                      </p>
                      <p className="text-slate-900 dark:text-white text-sm font-bold">
                        {t.lider}
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">
                      expand_more
                    </span>
                  </div>
                </div>
              </summary>
              {/* Fechas Torneo */}
              <StatusRaces tournamentCode={t.code} />
            </details>
          )
        })}
    </div>
  )
}
