import type { Race } from "@type/Race";

type Props = {
    races: Race[];
}

export const ResultTableColumns = ({ races }: Props) => {
    const columnRaces = races.map((race) => {
        return (
            <th key={race.id} className="px-4 py-4 text-center min-w-[100px]">
                <div className="flex flex-col items-center">
                    <span className="text-text-muted/60 text-[10px] uppercase font-bold">{race.shortDate}</span>
                    <span className="text-text text-sm font-bold tracking-tight">{race.name}</span>
                </div>
            </th>
        )
    })
    return (
        <thead>
            <tr className="bg-surface/80 border-b border-surface">
                <th className="sticky-column-left bg-surface/80 px-6 py-4 text-left min-w-[280px]">
                    <span className="text-text-muted text-xs font-bold uppercase tracking-wider">Piloto / Equipo</span>
                </th>
                {columnRaces}
                <th className="px-4 py-4 text-center min-w-[100px] bg-surface/80 border-l border-surface">
                    <span className="text-primary text-xs font-bold uppercase tracking-wider">Total</span>
                </th>
            </tr>
        </thead>
    )
}