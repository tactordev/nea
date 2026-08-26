import React from "react"

interface InputProps extends React.ComponentProps<'input'> {
    children: React.ReactNode;
}

export default function Input(
    {
        children,
        className = "",
        placeholder = " ",
        id,
        ...props
    }: InputProps
) {
    const inputId = id || React.useId();

    return (
        <div
            className={`relative bg-zinc-200/5 px-2 py-1 group transition-all duration-200 rounded-sm focus-within:bg-zinc-200/10 focus-within:pt-6 has-[input:not(:placeholder-shown)]:pt-6`}
        >
            <input
                id={inputId}
                className={`${className} peer focus:outline-none py-1 text-zinc-200/80`}
                {...props}
                placeholder={" "}
            />
            <label
                htmlFor={inputId}
                className="absolute pointer-events-none w-fit h-full top-0 left-0 flex flex-row justify-start items-center ml-1 gap-1 peer-focus:scale-80 peer-focus:-top-4 peer-focus:-left-3 peer-not-placeholder-shown:scale-80 peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:-left-3 px-1 rounded-md transition-all duration-200"
            >
                {children}
            </label>
        </div>
    )
}