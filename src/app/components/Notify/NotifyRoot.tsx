"use client"

import { ReactNode, useEffect, useState } from "react"
import { X } from "lucide-react";

interface NotifyRootProps {
    children: ReactNode,
}

const NotifyRoot = ({ children }: NotifyRootProps) => {
    const [position, setPosition] = useState<string>('-translate-y-28');

    useEffect(() => {
        setTimeout(() => {
            setPosition('translate-y-0');
        }, 500);

        setTimeout(() => {
            setPosition('translate-x-96')
        }, 6000);
    }, [])

    const closeToast = () => {
        setPosition('translate-x-96')
    }

    return (
        <div className={`fixed top-4 right-4 w-full flex max-w-xs bg-toast-background text-white rounded-lg py-3 transition-all ease-linear duration-500 group px-4 ${position}`}>
            <div className='flex gap-x-4 items-center'>
                {children}
            </div>
            <X onClick={closeToast} className='w-4 h-4 absolute top-2 right-2 cursor-pointer text-zinc-50 opacity-0 group-hover:opacity-100 transition-opacity ease-in delay-100' />
        </div>
    )
}

export default NotifyRoot