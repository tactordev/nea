

export function title(value: string): string {
    return value.split(" ").map((v) => {
        return `${v.slice(0, 1).toUpperCase()}${v.length > 1 ? v.slice(1) : ""}`;
    }).join(" ");
};