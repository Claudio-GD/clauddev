type ScheduledRaceProps = {
  raceNumber: number
  name: string
  type: string
  dateTime: string
}

const ScheduledRace = ({
  raceNumber,
  name,
  type,
  dateTime,
}: ScheduledRaceProps) => (
  <div className="flex items-center justify-between p-3 bg-transparent border border-slate-200 dark:border-[#28392f] rounded-xl opacity-60">
    <div className="flex items-center gap-4">
      <div className="text-slate-400">
        <span className="material-symbols-outlined">calendar_today</span>
      </div>
      <div>
        <p className="text-slate-400 dark:text-[#9db9a8] text-[10px] font-bold uppercase">
          Fecha {raceNumber} • Programada
        </p>
        <p className="text-slate-900 dark:text-white text-sm font-bold">
          {name} - {type}
        </p>
      </div>
    </div>
    <span className="text-slate-400 text-xs">{dateTime}</span>
  </div>
)

export default ScheduledRace
