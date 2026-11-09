import type { NextRaceRPC } from "@/hooks/useNextRace"

type RaceInfoProps = {
  nextRace: NextRaceRPC
}

const RaceInfo = ({ nextRace }: RaceInfoProps) => (
  <div className="flex-1 overflow-y-auto sidesheet-scroll p-6 bg-surface">
    <div className="rounded-2xl bg-surface border border-surface-highlight overflow-hidden p-6 flex flex-col items-center">
      <div className="w-full h-40 bg-slate-200 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden group">
        <span className="text-6xl text-slate-400 group-hover:text-slate-500 transition-colors">
          <img
            src={nextRace.track_map}
            className="w-70 h-70 object-contain"
            alt="Mapa del Circuito"
          />
        </span>
      </div>
      <h4 className="text-text-muted font-bold text-lg">{nextRace.name}</h4>
      <h4 className="text-text-muted font-bold text-lg">{nextRace.type}</h4>
      <p className="text-text text-sm">{nextRace.location}</p>
    </div>
    <div className="grid grid-cols-2 p-6 gap-4">
      <div className="bg-surface p-4 rounded-xl border border-surface-highlight">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="material-symbols-outlined text-primary-dark text-xl">
            schedule
          </span>
          <span className="text-text-muted text-xs font-bold uppercase">
            Hora Virtual
          </span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <p className="text-text font-bold text-lg">{nextRace.hour_minutes}</p>
        </div>
      </div>
      <div className="bg-surface p-4 rounded-xl border border-surface-highlight">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="material-symbols-outlined text-blue-500 text-xl">
            weather_mix
          </span>
          <span className="text-text-muted text-xs font-bold uppercase">
            Clima
          </span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <p className="text-text font-bold text-lg">{nextRace.weather}</p>
        </div>
      </div>
      <div className="bg-surface p-4 rounded-xl border border-surface-highlight">
        <div className="flex items-center justify-center gap-3">
          <span className="material-symbols-outlined text-orange-500 text-xl">
            stat_1
          </span>
          <span className="text-text-muted text-xs font-bold uppercase">
            Paradas
          </span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <p className="text-text font-bold text-lg">
            {nextRace.stops} Obligatoria
          </p>
        </div>
      </div>
      <div className="bg-surface p-4 rounded-xl border border-surface-highlight">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="material-symbols-outlined text-red-500 text-xl">
            tire_repair
          </span>
          <span className="text-text-muted text-xs font-bold uppercase">
            Desgaste
          </span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <p className="text-text font-bold text-lg">x{nextRace.tires}</p>
        </div>
      </div>
    </div>
    <div>
      <div className="bg-sureface border border-surface-highlight rounded-xl p-5 mb-8">
        <h3 className="text-text text-sm font-bold uppercase tracking-wide mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-lg">
            info
          </span>
          Información de Pista
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center group">
            <span className="text-text-muted text-sm group-hover:text-gray-900 transition-colors">
              Longitud
            </span>
            <span className="text-text text-mono font-bold">
              {nextRace.large} mts
            </span>
          </div>
          <div className="flex justify-between items-center group">
            <span className="text-text-muted text-sm group-hover:text-gray-900 transition-colors">
              Curvas
            </span>
            <span className="text-text text-mono font-bold">
              {nextRace.corners}
            </span>
          </div>
          <div className="flex justify-between items-center group">
            <span className="text-text-muted text-sm group-hover:text-gray-900 transition-colors">
              Vueltas
            </span>
            <span className="text-text text-mono font-bold">
              {nextRace.laps}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default RaceInfo
