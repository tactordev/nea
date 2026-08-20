"use client";

interface InputProps extends React.ComponentProps<'button'> {
    children: React.ReactNode;
}

export default function InputButton(
    {
        children,
        className,
        ...props
    }: InputProps
) {
    return (
        <div className="relative flex flex-col w-full h-fit justify-center items-center">
            <button type="submit" {...props} className={`${className ?? ""} w-full text-zinc-800/90 bg-zinc-400/20 rounded-md py-1 px-2 transition-colors hover:bg-zinc-400/40 hover:cursor-pointer hover:scale-101 active:scale-99`}>
                {children}  
            </button>
        </div>
    )
}