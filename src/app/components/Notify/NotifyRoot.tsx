"use client"

import { ReactNode } from "react"

interface NotifyRootProps {
    children: ReactNode,
    position: string
}

const NotifyRoot = ({ children, position }: NotifyRootProps) => {

    return (
        <div className={`fixed top-4 right-4 w-full flex max-w-xs bg-toast-background text-white rounded-lg py-3 group px-4 ${position}`}>
            <div className='flex gap-x-4 items-center'>
                {children}
            </div>
        </div>
    )
}

export default NotifyRoot