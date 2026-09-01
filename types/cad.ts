export interface CADLog {
    logId: number;
    simId: number;
    callerId: number;
    sceneId: number;
    forms: Form[];
}

export interface Form {
    formId: number;
    logId: number;
    formType: string;
    fields: VehicleFields | SuspectFields | VictimFields;
}

export interface VehicleFields {
    licensePlate: string;
    model: string;
    colour: string;
}

export interface PersonFields {
    fullName: string;
    dateOfBirth: string;
    sex: string;
}

export interface SuspectFields extends PersonFields {
    charges: string[];
}

export interface VictimFields extends PersonFields {
    suspectId: number;
}

export interface UnitFields {
    unitId: number;
    department: string;
}



