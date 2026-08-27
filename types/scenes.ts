import { RecordUnit } from "./units";

export interface SceneRecord {
    id: number;
    type: number;
    involved: RecordUnit[];
    elapsed: number;
}