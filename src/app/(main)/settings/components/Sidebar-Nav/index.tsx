"use client"

import { buttonVariants } from "@/app/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    items: {
        href: string
        icon: JSX.Element
        title: string
    }[]
}

const SidebarNav = ({ className, items, ...props }: SidebarNavProps) => {
    const pathname = usePathname()

    return (
        <nav
            className={cn(
                "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
                className
            )}
            {...props}
        >
            {items.map((item, index) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                        buttonVariants({ variant: "ghost" }),
                        pathname === item.href
                            ? "bg-muted hover:bg-muted"
                            : "hover:bg-transparent hover:underline",
                        "justify-start"
                    )}
                >
                    <div className="flex items-center gap-x-3">
                        <div>
                            {item.icon}
                        </div>
                        <div>
                            {item.title}
                        </div>
                    </div>
                </Link>
            ))
            }
        </nav >
    )
}

export default SidebarNav