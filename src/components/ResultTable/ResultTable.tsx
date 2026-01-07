import { useState } from "react";

import { ResultRace } from "@/components/ResultRace";
import { Leyend } from "@/components/ResultTable/Leyend";

import useActiveRaces, { type ActiveRow } from "@/hooks/useActiveRaces";
import useSeasonStandings from "@/hooks/useSeasonStandings";

export const ResultTable = () => {
    const [open, setOpen] = useState(false)
    const [pilotId, setPilotId] = useState<string | null>(null)
    const [raceId, setRaceId] = useState<string | null>(null)
    const { activeRaces, isLoading: loadingActiveRaces } = useActiveRaces()
    const { standings, isLoading: loadingStandings } = useSeasonStandings()

    if (loadingActiveRaces || loadingStandings) return <div>Loading...</div>

    const handleClickResume = (pilotId: string, raceId: string) => {
        setOpen(true);
        setPilotId(pilotId);
        setRaceId(raceId);
    }

    return (
        <>
            <Leyend />
            <div className="w-full bg-surface border border-surface rounded-2xl overflow-hidden shadow-lg shadow-surface/50">
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-surface/80 border-b border-surface">
                                <th className="sticky-column-left bg-surface/80 px-6 py-4 text-left min-w-[280px]">
                                    <span className="text-text-muted text-xs font-bold uppercase tracking-wider">Piloto / Equipo</span>
                                </th>
                                {activeRaces?.map((race: ActiveRow) => (
                                    <th key={race.id} className="px-4 py-4 text-center min-w-[100px]">
                                        <div className="flex flex-col items-center">
                                            <span className="text-text-muted/60 text-[10px] uppercase font-bold">{race.short_date}</span>
                                            <span className="text-text text-sm font-bold tracking-tight">{race.name}</span>
                                        </div>
                                    </th>

                                ))}
                                <th className="px-4 py-4 text-center min-w-[100px] bg-surface/80 border-l border-surface">
                                    <span className="text-primary text-xs font-bold uppercase tracking-wider">Total</span>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {standings?.map((pilot, index) => (
                                <tr key={index} className="group hover:bg-surface-50 transition-colors">
                                    <td className="sticky-column-left bg-surface group-hover:bg-surface-500/80 transition-colors px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <span className="text-text-muted/60 font-display font-bold text-lg w-4 text-right">{index + 1}</span>
                                            <div>
                                                <p className="text-text font-bold text-sm">{pilot.pilot_name}</p>
                                                <div className="flex items-center gap-1.5 mt-0.5">
                                                    <span className="size-2 rounded-full bg-blue-600"></span>
                                                    <p className="text-text-muted text-xs font-medium">{pilot.team_name}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    {activeRaces?.map((race) => {
                                        const res = pilot.races[race.id ?? '']
                                        if (!res) {
                                            return (
                                                <td key={pilot.pilot_name + race.id} className="px-4 py-4 text-center">
                                                    <span className="text-text-muted/60 font-display font-bold text-lg w-4 text-right">-</span>
                                                </td>
                                            )
                                        }
                                        return (
                                            <td key={pilot.pilot_name + race.id} className={`px-4 py-4 text-center${res.has_penalties || res.has_fast_lap ? ' relative group/cell' : ''}`}>
                                                <a href="#" onClick={() => handleClickResume(pilot.pilot_id, race.id ?? '')} title="Ver resumen" className="inline-flex items-center gap-1">
                                                    <span className={!res.is_winner ? 'text-text font-medium text-sm' : 'inline-flex items-center justify-center size-8 rounded-lg bg-primary/20 text-primary font-bold text-sm border border-primary/30'}>
                                                        {res.points}
                                                    </span>
                                                    {res.has_penalties && (
                                                        <span className="material-symbols-outlined text-yellow-500 text-[14px]" title="Sanción">warning</span>
                                                    )}
                                                    {res.has_fast_lap && (
                                                        <span className="material-symbols-outlined text-orange-500 text-[14px]" title="Vuelta Rápida">speed</span>
                                                    )}
                                                </a>
                                            </td>
                                        )
                                    })}

                                    <td className="px-4 py-4 text-center bg-surface border-l border-surface">
                                        <span className="text-2xl font-bold text-primary tracking-tight">{pilot.total_points}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
            <ResultRace open={open} setOpen={setOpen} pilotId={pilotId ?? ''} raceId={raceId ?? ''} />
        </>
    )
}