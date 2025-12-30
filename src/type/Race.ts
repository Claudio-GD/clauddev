type Circuit = {
    type: string;
    large: string;
    corners: number;
    laps: number;
    location: string;
}

export type Race = {
    id: string;
    name: string;
    shortDate: string;
    year: string;
    circuit: Circuit;
    time: string;
    weather: string;
    stops: number;
    tires: number;
}