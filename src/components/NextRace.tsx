import { Dialog, Transition } from "@headlessui/react"

import type { NextRaceRPC } from "@/hooks/useNextRace"
import RaceInfo from "./RaceInfo"

type Props = {
  open: boolean
  setOpen: (v: boolean) => void
  nextRace: NextRaceRPC | null
}

export const NextRace = ({ open, setOpen, nextRace }: Props) => {
  if (!open || !nextRace) return null

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="transition duration-600 ease-in data-closed:opacity-0"
      transition
    >
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
                <span className="material-symbols-outlined">
                  calendar_month
                </span>
              </div>

              <div className="flex flex-col">
                <h2 className="text-text text-lg font-bold tracking-tight">
                  Próxima Carrera
                </h2>
                <span className="text-gray-400 text-xs font-medium">
                  {nextRace?.name} • {nextRace?.short_date} {nextRace?.year}
                </span>
              </div>
            </div>
            <button
              className="flex items-center justify-center size-10 rounded-full bg-surface-highlight text-text-muted hover:bg-surface-highlight/80 transition-colors cursor-pointer group"
              onClick={() => setOpen(false)}
            >
              <span className="material-symbols-outlined text-[20px] group-hover:rotate-90 transition-transform duration-300">
                close
              </span>
            </button>
          </div>
          <RaceInfo nextRace={nextRace} />
        </div>
      </Transition>
    </Dialog>
  )
}
