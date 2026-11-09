type FinishedRaceProps = {
  raceNumber: number
  name: string
  type: string
}

const FinishedRace = ({ raceNumber, name, type }: FinishedRaceProps) => (
  <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-[#111814] rounded-xl border border-transparent hover:border-primary/30 transition-all">
    <div className="flex items-center gap-4">
      <div className="text-primary opacity-50">
        <span className="material-symbols-outlined filled-icon">
          check_circle
        </span>
      </div>
      <div>
        <p className="text-slate-400 dark:text-[#9db9a8] text-[10px] font-bold uppercase">
          Fecha {raceNumber} • Finalizado
        </p>
        <p className="text-slate-900 dark:text-white text-sm font-bold">
          {name} - {type}
        </p>
      </div>
    </div>
    <button className="text-primary text-xs font-bold hover:underline">
      Ver Resultados
    </button>
  </div>
)

export default FinishedRace
