

export interface CallMessage {
    agent: "caller" | "operator";
    value: string;
}

export interface Caller {
    callerId: number;
    callType: string[];
    location: number[];
    transcript: CallMessage[];
    responses: string[];
    hungUp: boolean;
}