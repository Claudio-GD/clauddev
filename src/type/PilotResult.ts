import type { Race } from "./Race";

export type Pilot = {
    id: string;
    name: string;
    team: string;
    points: number;
}

type Penalties = {
    detail?: string;
    positions: number;
    points: number;
}

type AdditionalPoints = {
    fastLap: number;
    cleanRace: number;
    qualy: number;
}

export type RaceResult = {
    race: Race;
    position: string;
    points: number;
    penalties: Penalties[];
    additionalPoints: AdditionalPoints;
}

export type PilotResult = {
    pilot: Pilot;
    results: RaceResult[];
}