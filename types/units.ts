

export type UnitType = "police" | "ambulance" | "fire";

export interface RecordUnit {
    id: number;
    callsign: string;
    type: UnitType;
}

export interface Unit extends RecordUnit {
    occupants: number;
    status: string;
}
