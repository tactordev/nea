import { RecordUnit } from "./units";
import { Caller } from "./call";

export interface RecordScene {
    sceneId: number;
    type: string;
    startTime: number;
    units: RecordUnit[];
}

export interface Record extends RecordScene {
    simId: number;
    location: number[];
    status: string;
    evolveProb: number;
}

export interface CallerInitiatedRecord extends Record {
    caller: Caller;
    callerTranscriptId: number;
}