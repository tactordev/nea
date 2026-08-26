import { ChevronDown, Clock, Hash, ListSortDescending, UserSearch } from "lucide-react";
import Section from "./section";
import { SceneRecord } from "@/types/scenes";


interface FilterProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    width?: string;
}

function title(value: string) {
    return value.split(" ").map((v) => {
        return `${v.slice(0, 1).toUpperCase()}${v.length > 1 ? v.slice(1) : ""}`;
    }).join(" ");
}

function Filter(
    {
        name,
        width,
        ...props
    }: FilterProps
) {
    return (
        <div className={`${props.className} flex flex-row w-full items-center justify-between px-2 py-1`} >
            { props.children ?? <></> }
            <div className="p-1 hover:bg-zinc-300/5 hover:cursor-pointer transition-colors duration-200 rounded-sm">
                <ChevronDown className="w-3.5 h-3.5 text-zinc-300" />
            </div>
        </div>
    )
}

function Separator() {
    return <div className="w-0 h-full border-r-1 border-zinc-300/10"></div>   
}


// id, type (priority), involved officers, time elapsed
function FilterBar() {
    return (
        <div className="grid grid-cols-123 w-full py-0.5 rounded-md sticky top-2 bg-zinc-200/1 border-1 border-zinc-200/2 shadow-sm backdrop-blur-md">
            <Filter className="col-span-20" name="id">
                <Hash xlinkTitle="ID" className="w-3.5 h-3.5 text-zinc-300" />
            </Filter>
            <Separator />
            <Filter className="col-span-20" name="type">
                <ListSortDescending className="w-4 h-4 text-zinc-300" />
            </Filter>
            <Separator />
            <Filter className="col-span-60" name="involved officers">
                <UserSearch className="w-4 h-4 text-zinc-300" />
            </Filter>
            <Separator />
            <Filter className="col-span-20" name="time elapsed">
                <Clock className="w-4 h-4 text-zinc-300" />
            </Filter>
        </div>
    )
}


const testData: SceneRecord[] = [
    {
        id: 1,
        type: 1,
        involved: [

        ],
        elapsed: 20
    },
    {
        id: 1,
        type: 2,
        involved: [
            {
                id: 1,
                callsign: "1L-4A1",
                type: "police"
            },
            {
                id: 2,
                callsign: "1T-211",
                type: "ambulance"
            },
            {
                id: 3,
                callsign: "4D-12",
                type: "fire"
            }
        ],
        elapsed: 120
    }
]
function Record(
    {
        data
    }: {
        data: SceneRecord
    }
) {
    return (
        <div className="grid grid-cols-120 w-full pb-1.5 border-b-1 border-zinc-300/10 items-center p-0 m-0">
            <p className="text-zinc-300 px-2 col-span-20 font-mono tabular-nums">{ data.id }</p>
            <p className="text-zinc-300 px-2 col-span-20 font-mono tabular-nums">{ data.type }</p>
            <div className="flex flex-row px-2 col-span-60 gap-2 truncate">
                {
                    data.involved.length > 0 ? data.involved.map((u, i) => <p key={`scene_record_callsign_${data.id}_${u.id}`} className={`text-zinc-300 text-sm font-mono tabular-nums px-2 py-0.5 rounded-md ${u.type === "police" ? "bg-blue-500/10" : u.type === "ambulance" ? "bg-white/10" : "bg-red-500/10" }`}>{u.callsign}</p>)
                    : <p className="font-mono text-zinc-300/80 text-sm px-2 col-span-60">No units attached.</p>
                }
            </div>
            <p className="text-zinc-300 px-2 col-span-20 font-mono tabular-nums truncate">{ data.elapsed } seconds</p>
        </div>
    )
}

function RecordList(
    {
        data
    }: {
        data: SceneRecord[]
    }
) {
    return data.map((d, index) => <Record key={`scene_record_${index}`} data={d} />);
}

export default function Scenes() {
    return (
        <Section className="gap-2" title="Scenes">
            <FilterBar />
            <RecordList data={testData} />
        </Section>
    )
}