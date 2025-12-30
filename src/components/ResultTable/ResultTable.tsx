import { useState } from "react";

import { ResultTableColumns } from "./Columns";
import { ResultRace } from "../ResultRace";
import { ResultTableRows } from "./Rows";
import type { Pilot, RaceResult } from "@type/PilotResult";
import { Leyend } from "./Leyend";
import type { Race } from "@type/Race";

export const ResultTable = () => {
    const [open, setOpen] = useState(false)
    const [pilot, setPilot] = useState<Pilot | null>(null)
    const [raceResult, setRaceResult] = useState<RaceResult | null>(null)

    const races: Race[] = [
        {
            id: "1",
            name: "Suzuka",
            shortDate: "08 Dic",
            year: "2025",
            circuit: {
                type: "GP",
                large: "Suzuka",
                corners: 1,
                laps: 1,
                location: "Japón"
            },
            time: "20:00",
            weather: "Despejado",
            stops: 1,
            tires: 1
        },
        {
            id: "2",
            name: "Sebring",
            shortDate: "15 Dic",
            year: "2025",
            circuit: {
                type: "GP",
                large: "Sebring",
                corners: 1,
                laps: 1,
                location: "EE.UU."
            },
            time: "20:00",
            weather: "Despejado",
            stops: 1,
            tires: 1
        },
        {
            id: "3",
            name: "Silverstone",
            shortDate: "22 Dic",
            year: "2025",
            circuit: {
                type: "GP",
                large: "Silverstone",
                corners: 1,
                laps: 1,
                location: "Reino Unido"
            },
            time: "20:00",
            weather: "Despejado",
            stops: 1,
            tires: 1
        },
    ]

    const handleClickResume = (pilot: Pilot, raceResult: RaceResult) => {
        setOpen(true);
        setPilot(pilot);
        setRaceResult(raceResult);
    }

    return (
        <>
            <Leyend />
            <div className="w-full bg-surface border border-surface rounded-2xl overflow-hidden shadow-lg shadow-surface/50">
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <ResultTableColumns races={races} />
                        <ResultTableRows handleClickResume={handleClickResume} />
                    </table>
                </div>
            </div>
            <ResultRace open={open} setOpen={setOpen} pilot={pilot} raceResult={raceResult} />
        </>
    )
}