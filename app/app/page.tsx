
import Cad from "./_components/cad";
import Call from "./_components/call";
import Map from "./_components/map";
import Scenes from "./_components/scenes";
import Units from "./_components/units";



export default function App() {
    return (
        <div className="w-full h-full grid grid-cols-3 grid-rows-2">
            <Scenes /> <Call /> <Map /> <Units /> <Cad />
        </div>
    )
}