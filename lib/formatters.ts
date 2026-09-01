

function split(value: string, detector: string): string[] {
    switch (detector) {
        case "capital":
            let count = 0;
            let latestDeletion = 0;
            const chunks: string[] = [];
            for (const char of value) {
                console.log(char);
                if (char.toLowerCase() !== char) {
                    console.log("found capital");
                    const chunk = value.slice(latestDeletion, count);
                    console.log("chunk", chunk);
                    chunks.push(chunk);
                    latestDeletion = count;
                }
                count++;
            }

            const finalChunk = value.slice(latestDeletion);
            chunks.push(finalChunk);

            return chunks;
        default:
            return value.split(detector);
    }
}

export function title(value: string, type?: string): string {
    return split(value, type === "camel" ? "capital" : " ").map((v) => {
        return `${v.slice(0, 1).toUpperCase()}${v.length > 1 ? v.slice(1) : ""}`;
    }).join(" ");
};