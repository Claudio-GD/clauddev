import { Dialog, Transition } from "@headlessui/react"
import type { RaceResult, Pilot } from "src/types/PilotResult";

type Props = {
    open: boolean;
    setOpen: (v: boolean) => void;
    pilot: Pilot | null;
    raceResult: RaceResult | null;
}

export const ResultRace = ({ open, setOpen, pilot, raceResult }: Props) => {

    if (!raceResult || !pilot) return null;

    const totalPoints = raceResult.points + raceResult.additionalPoints.qualy + raceResult.additionalPoints.fastLap + raceResult.additionalPoints.cleanRace;

    return (
        <Dialog open={open} onClose={() => setOpen(false)} className="transition duration-600 ease-in data-closed:opacity-0" transition>
            <Transition show={open}>
                <div className="absolute inset-0 z-0 flex flex-col p-8 gap-6 opacity-30 select-none pointer-events-none overflow-hidden bg-surface">
                    <div className="flex justify-between items-center mb-8">
                        <div className="h-8 w-48 bg-surface-highlight rounded-full"></div>
                        <div className="flex gap-4">
                            <div className="size-10 rounded-full bg-surface-highlight"></div>
                            <div className="size-10 rounded-full bg-surface-highlight"></div>
                        </div>
                    </div>
                    <div className="w-full h-16 bg-surface-highlight rounded-xl"></div>
                    <div className="w-full h-16 bg-surface-highlight rounded-xl"></div>
                    <div className="w-full h-16 bg-surface-highlight rounded-xl"></div>
                    <div className="w-full h-16 bg-surface-highlight rounded-xl"></div>
                    <div className="w-full h-16 bg-surface-highlight rounded-xl"></div>
                    <div className="w-full h-16 bg-surface-highlight rounded-xl"></div>
                    <div className="w-full h-16 bg-surface-highlight rounded-xl"></div>
                    <div className="w-full h-16 bg-surface-highlight rounded-xl"></div>
                    <div className="w-full h-16 bg-surface-highlight rounded-xl"></div>
                </div>
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-10 transition-opacity"></div>
                <div className="absolute right-0 top-0 h-full w-full max-w-[540px] z-20 bg-surface border-l border-surface-highlight shadow-2xl flex flex-col transition-transform duration-300 ease-out transform translate-x-0">
                    <div className="flex items-center justify-between px-6 py-5 border-b border-surface-highlight shrink-0 bg-surface">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">flag</span>
                            <h2 className="text-text text-lg font-bold tracking-tight">Resumen de Carrera</h2>
                        </div>
                        <button className="flex items-center justify-center size-10 rounded-full bg-surface-highlight text-text-muted hover:bg-surface-highlight/80 transition-colors cursor-pointer group" onClick={() => setOpen(false)}>
                            <span className="material-symbols-outlined text-[20px] group-hover:rotate-90 transition-transform duration-300">close</span>
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto sidesheet-scroll p-6 bg-surface">
                        <div className="flex flex-col gap-6 mb-6">
                            <div className="flex items-start gap-5">
                                <div className="flex flex-col pt-1">
                                    <h1 className="text-text text-3xl font-bold leading-tight tracking-tight mb-1">{pilot.name}</h1>
                                    <p className="text-text-muted text-base font-medium flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                                        {pilot.team}
                                    </p>
                                    <div className="mt-3 flex items-center gap-2">
                                        <span className="px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-xs font-semibold tracking-wide text-gray-600">{raceResult.race.name}</span>
                                        <span className="text-gray-400 text-xs font-medium">{raceResult.race.shortDate + ' ' + raceResult.race.year}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Sanciones */}
                        {raceResult.penalties?.length > 0 && (
                            <div className="rounded-xl bg-red-200 border border-red-100 p-4 mb-8">
                                <div className="flex items-center gap-2 mb-3 text-red-600">
                                    <span className="material-symbols-outlined">gavel</span>
                                    <h3 className="font-bold text-sm uppercase tracking-wide">Sanciones Aplicadas</h3>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-800 pr-4">{raceResult.penalties?.[0].detail}</span>
                                        <span className="text-red-700 font-bold bg-red-500/10 px-2 py-0.5 rounded text-xs border border-red-200 shadow-sm">+{raceResult.penalties?.[0].positions} pos</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm pt-2 mt-1 border-t border-red-100">
                                        <span className="text-gray-500">Recargo de Posición</span>
                                        <span className="text-gray-900 font-mono flex items-center gap-2">
                                            <span className="text-gray-400 line-through">{parseInt(raceResult.position) - raceResult.penalties?.[0].positions} (Pista)</span>
                                            <span className="material-symbols-outlined text-xs text-red-500">arrow_forward</span>
                                            <span className="font-bold text-red-600">{raceResult.position} (Final)</span>
                                        </span>
                                    </div>
                                    {raceResult.penalties?.[0].points && raceResult.penalties?.[0].points > 0 ? (
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-500">Puntos de Penalización</span>
                                            <span className="text-red-600 font-bold">-{raceResult.penalties?.[0].points} pts</span>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        )}
                        {/* Resultado final */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="flex flex-col gap-1 rounded-xl bg-surface-alt border border-surface-highlight p-5 items-center justify-center text-center relative overflow-hidden group hover:shadow-md transition-shadow">
                                <div className="absolute inset-0 bg-gradient-to-br from-surface to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <span className="material-symbols-outlined text-gray-400 text-2xl mb-1">emoji_events</span>
                                <p className="text-text text-4xl font-bold leading-tight tracking-tight">{raceResult?.position}</p>
                                <p className="text-text-muted text-sm font-medium uppercase tracking-wider mt-1">Posición Oficial</p>
                            </div>
                            <div className="flex flex-col gap-1 rounded-xl bg-surface border border-primary/30 p-5 items-center justify-center relative overflow-hidden group hover:shadow-md transition-shadow">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <span className="material-symbols-outlined text-primary text-2xl mb-1">stars</span>
                                <p className="text-primary text-4xl font-bold leading-tight tracking-tight">{totalPoints}</p>
                                <p className="text-primary text-sm font-medium uppercase tracking-wider mt-1">Puntos Totales</p>
                            </div>
                        </div>
                        {/* Desglose resultado final */}
                        <div className="bg-surface border border-surface-highlight rounded-xl p-5 mb-8">
                            <h3 className="text-text text-sm font-bold uppercase tracking-wide mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-lg">format_list_bulleted</span>
                                Desglose de Puntos
                            </h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center group">
                                    <span className="text-text-muted text-sm group-hover:text-gray-900 transition-colors">Posición Final ({raceResult.position})</span>
                                    <span className="text-text text-mono font-bold">+{raceResult.points}</span>
                                </div>
                                <div className="flex justify-between items-center group">
                                    <span className="text-text-muted text-sm group-hover:text-gray-900 transition-colors">Clasificación</span>
                                    <span className="text-text text-mono font-bold">+{raceResult.additionalPoints.qualy}</span>
                                </div>
                                <div className="flex justify-between items-center group">
                                    <span className="text-text-muted text-sm group-hover:text-gray-900 transition-colors">Vuelta Rápida</span>
                                    <span className="text-text text-mono font-bold">+{raceResult.additionalPoints.fastLap}</span>
                                </div>
                                <div className="flex justify-between items-center group">
                                    <span className="text-text-muted text-sm group-hover:text-gray-900 transition-colors">Carrera Limpia</span>
                                    <span className="text-text text-mono font-bold">+{raceResult.additionalPoints.cleanRace}</span>
                                </div>
                                <div className="h-px bg-gray-200 my-1"></div>
                                <div className="flex justify-between items-center pt-1">
                                    <span className="text-text font-bold text-sm">Total Acumulado</span>
                                    <span className="text-primary text-lg font-bold">{totalPoints} Pts</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </Dialog>
    )
}