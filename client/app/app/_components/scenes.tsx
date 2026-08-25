import { ChevronDown, Clock, Hash, ListSortDescending, UserSearch } from "lucide-react";
import Section from "./section";


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

export default function Scenes() {
    return (
        <Section className="gap-2" title="Scenes">
            <FilterBar />
        </Section>
    )
}