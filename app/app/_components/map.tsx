import LF from "./lf";
import Section from "./section";


export default function Map() {
    return (
        <Section title="Map">
            <LF posix={[51.505, -0.09]} zoom={10} />
        </Section>
    );
}