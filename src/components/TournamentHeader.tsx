import V8 from "@/assets/v8-supercars.webp"
import { type TournamentRow } from "@/hooks/useTournament"

type THeaderProps = {
  tournament: TournamentRow
}

export const TournamentHeader = ({ tournament }: THeaderProps) => (
  <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 bg-surface border border-surface rounded-2xl p-6 md:p-10 overflow-hidden shadow-sm">
    <div className="absolute inset-y-0 right-0 w-full md:w-3/5 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-r from-surface-light via-surface-light/80 to-transparent z-10"></div>
      <img
        alt={tournament.name}
        className="w-full h-full object-cover object-center opacity-20 mix-blend-multiply"
        src={V8}
      />
    </div>
    <div className="relative z-10 flex flex-col gap-2 max-w-2xl">
      <div className="flex items-center gap-2 text-text md:text-primary text-sm font-bold uppercase tracking-wider">
        <span className="material-symbols-outlined text-[16px]">trophy</span>
        Temporada {tournament.from_to}
      </div>
      <h1 className="text-text text-3xl md:text-5xl font-bold tracking-tight leading-tight">
        {tournament.name}
      </h1>
      {!tournament.is_finished ? (
        <p className="text-text-muted text-lg font-normal mt-1">
          Tabla de resultados
        </p>
      ) : null}
    </div>
  </div>
)
