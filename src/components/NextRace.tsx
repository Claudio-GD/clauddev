import { Dialog, Transition } from "@headlessui/react"

import Map from '@assets/Watkins_Glen_International_Track_Map.svg'
import type { Race } from "@type/Race";

type Props = {
    open: boolean;
    setOpen: (v: boolean) => void;
    nextRace: Race;
}

export const NextRace = ({ open, setOpen, nextRace }: Props) => {
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
                            <div className="size-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                <span className="material-symbols-outlined">calendar_month</span>
                            </div>

                            <div className="flex flex-col">
                                <h2 className="text-text text-lg font-bold tracking-tight">Próxima Carrera</h2>
                                <span className="text-gray-400 text-xs font-medium">{nextRace.name} • {nextRace.shortDate} {nextRace.year}</span>
                            </div>
                        </div>
                        <button className="flex items-center justify-center size-10 rounded-full bg-surface-highlight text-text-muted hover:bg-surface-highlight/80 transition-colors cursor-pointer group" onClick={() => setOpen(false)}>
                            <span className="material-symbols-outlined text-[20px] group-hover:rotate-90 transition-transform duration-300">close</span>
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto sidesheet-scroll p-6 bg-surface">
                        <div className="rounded-2xl bg-surface border border-surface-highlight overflow-hidden p-6 flex flex-col items-center">
                            <div className="w-full h-40 bg-slate-200 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden group">
                                <span className="text-6xl text-slate-400 group-hover:text-slate-500 transition-colors">
                                    <img src={Map} className="w-70 h-70 object-contain" alt="Mapa del Circuito" />
                                </span>
                            </div>
                            <h4 className="text-text-muted font-bold text-lg">{nextRace.name}</h4>
                            <h4 className="text-text-muted font-bold text-lg">{nextRace.circuit.type}</h4>
                            <p className="text-text text-sm">{nextRace.circuit.location}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-surface p-4 rounded-xl border border-surface-highlight">
                                <div className="flex items-center justify-center gap-3 mb-2">
                                    <span className="material-symbols-outlined text-primary-dark text-xl">schedule</span>
                                    <span className="text-text-muted text-xs font-bold uppercase">Hora Virtual</span>
                                </div>
                                <div className="flex items-center justify-center gap-3">
                                    <p className="text-text font-bold text-lg">{nextRace.time}</p>
                                </div>
                            </div>
                            <div className="bg-surface p-4 rounded-xl border border-surface-highlight">
                                <div className="flex items-center justify-center gap-3 mb-2">
                                    <span className="material-symbols-outlined text-blue-500 text-xl">weather_mix</span>
                                    <span className="text-text-muted text-xs font-bold uppercase">Clima</span>
                                </div>
                                <div className="flex items-center justify-center gap-3">
                                    <p className="text-text font-bold text-lg">{nextRace.weather}</p>
                                </div>
                            </div>
                            <div className="bg-surface p-4 rounded-xl border border-surface-highlight">
                                <div className="flex items-center justify-center gap-3">
                                    <span className="material-symbols-outlined text-orange-500 text-xl">stat_1</span>
                                    <span className="text-text-muted text-xs font-bold uppercase">Paradas</span>
                                </div>
                                <div className="flex items-center justify-center gap-3">
                                    <p className="text-text font-bold text-lg">{nextRace.stops} Obligatoria</p>
                                </div>
                            </div>
                            <div className="bg-surface p-4 rounded-xl border border-surface-highlight">
                                <div className="flex items-center justify-center gap-3 mb-2">
                                    <span className="material-symbols-outlined text-red-500 text-xl">tire_repair</span>
                                    <span className="text-text-muted text-xs font-bold uppercase">Desgaste</span>
                                </div>
                                <div className="flex items-center justify-center gap-3">
                                    <p className="text-text font-bold text-lg">x{nextRace.tires}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bg-sureface border border-surface-highlight rounded-xl p-5 mb-8">
                                <h3 className="text-text text-sm font-bold uppercase tracking-wide mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-lg">info</span>
                                    Información de Pista
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center group">
                                        <span className="text-text-muted text-sm group-hover:text-gray-900 transition-colors">Longitud</span>
                                        <span className="text-text text-mono font-bold">{nextRace.circuit.large} km</span>
                                    </div>
                                    <div className="flex justify-between items-center group">
                                        <span className="text-text-muted text-sm group-hover:text-gray-900 transition-colors">Curvas</span>
                                        <span className="text-text text-mono font-bold">{nextRace.circuit.corners}</span>
                                    </div>
                                    <div className="flex justify-between items-center group">
                                        <span className="text-text-muted text-sm group-hover:text-gray-900 transition-colors">Vueltas</span>
                                        <span className="text-text text-mono font-bold">{nextRace.circuit.laps}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </Dialog>
    )
}