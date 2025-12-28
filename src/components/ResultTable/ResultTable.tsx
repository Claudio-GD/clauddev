import { useState } from "react";

import { ResultTableColumns } from "./Columns";
import { ResultRace } from "../ResultRace";
import { ResultTableRows } from "./Rows";
import type { Pilot, RaceResult } from "@type/PilotResult";
import { Leyend } from "./Leyend";

export const ResultTable = () => {
    const [open, setOpen] = useState(false)
    const [pilot, setPilot] = useState<Pilot | null>(null)
    const [raceResult, setRaceResult] = useState<RaceResult | null>(null)

    const races = [
        {
            id: "1",
            name: "Suzuka",
            shortDate: "08 Dic",
            year: "2025",
            circuit: "GP"
        },
        {
            id: "2",
            name: "Sebring",
            shortDate: "15 Dic",
            year: "2025",
            circuit: "GP"
        },
        {
            id: "3",
            name: "Silverstone",
            shortDate: "22 Dic",
            year: "2025",
            circuit: "GP"
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