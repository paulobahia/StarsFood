"use client"

import { useState } from "react"
import CommandMenu from "./components/CommandMenu"


const Search = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="w-full flex-1 md:w-auto md:flex-none">
                <button onClick={() => setOpen(true)} className="inline-flex items-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64">
                    <span className="hidden lg:inline-flex">Pesquisar por...</span>
                    <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                        <span className="text-xs">Ctrl + K</span>
                    </kbd>
                </button>
            </div>
            <CommandMenu open={open} setOpen={setOpen} />
        </>
    )
}

export default Search