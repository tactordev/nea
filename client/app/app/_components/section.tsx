import React from "react";


interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
}
export default function Section(
    {
        title,
        ...props
    }: SectionProps
) {
    return (
        <div className={`${props.className} row-span-1 col-span-1 flex flex-col bg-red-500 border-2 border-yellow-200`}>
            <p>
                { title }
            </p>
        </div>
    )
}