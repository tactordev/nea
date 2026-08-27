

export type UnitType = "police" | "ambulance" | "fire";

export interface RecordUnit {
    unitId: number;
    callsign: string;
    department: UnitType;
}

export interface Unit extends RecordUnit {
    occupants: number;
    status: string;
    location: number[]
}
