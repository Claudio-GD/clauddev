import type { Pilot, RaceResult } from "@type/PilotResult";
import { rows } from "@data/resultRaces";

type Props = {
    handleClickResume: (pilot: Pilot, race: RaceResult) => void;
}

export const ResultTableRows = ({ handleClickResume }: Props) => {
    let totalPoints = 0;
    let position = 0;

    const sortedRows = rows.sort((a, b) => {
        const aPoints = a.results.reduce((acc, result) => acc + result.points + result.additionalPoints.fastLap + result.additionalPoints.qualy + result.additionalPoints.cleanRace, 0);
        const bPoints = b.results.reduce((acc, result) => acc + result.points + result.additionalPoints.fastLap + result.additionalPoints.qualy + result.additionalPoints.cleanRace, 0);
        return bPoints - aPoints;
    });

    return (
        <tbody className="divide-y divide-surface">
            {sortedRows.map((row) => {
                totalPoints = 0;
                position++;
                return (
                    <tr key={row.pilot.id} className="group hover:bg-surface-50 transition-colors">
                        <td className="sticky-column-left bg-surface group-hover:bg-surface-500/80 transition-colors px-6 py-4">
                            <div className="flex items-center gap-4">
                                <span className="text-text-muted/60 font-display font-bold text-lg w-4 text-right">{position}</span>
                                <div>
                                    <p className="text-text font-bold text-sm">{row.pilot.name}</p>
                                    <div className="flex items-center gap-1.5 mt-0.5">
                                        <span className="size-2 rounded-full bg-blue-600"></span>
                                        <p className="text-text-muted text-xs font-medium">{row.pilot.team}</p>
                                    </div>
                                </div>
                            </div>
                        </td>
                        {row.results.map((result, index) => {
                            totalPoints += result.points + result.additionalPoints.fastLap + result.additionalPoints.qualy + result.additionalPoints.cleanRace;
                            return (
                                <td key={index} className={`px-4 py-4 text-center${result.penalties.length > 0 || result.additionalPoints.fastLap > 0 ? ' relative group/cell' : ''}`}>
                                    <a href="#" onClick={() => handleClickResume(row.pilot, result)} title="Ver resumen" className="inline-flex items-center gap-1">
                                        <span className={result.position !== '1' ? 'text-text font-medium text-sm' : 'inline-flex items-center justify-center size-8 rounded-lg bg-primary/20 text-primary font-bold text-sm border border-primary/30'}>
                                            {result.points + result.additionalPoints.fastLap + result.additionalPoints.qualy + result.additionalPoints.cleanRace}
                                        </span>
                                        {result.penalties.length > 0 && (
                                            <span className="material-symbols-outlined text-yellow-500 text-[14px]" title="Sanción">warning</span>
                                        )}
                                        {result.additionalPoints.fastLap > 0 && (
                                            <span className="material-symbols-outlined text-orange-500 text-[14px]" title="Vuelta Rápida">speed</span>
                                        )}
                                    </a>
                                </td>
                            )
                        })}
                        <td className="px-4 py-4 text-center bg-surface border-l border-surface">
                            <span className="text-2xl font-bold text-primary tracking-tight">{totalPoints}</span>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    )
}