"use client"

import Image from "next/image";
import logo from '../assets/StarsLogo.png'
import Link from "next/link";
import { usePathname } from "next/navigation";

import SheetComponent from './components/Sheet'

import {
    Sheet,
    SheetTrigger,
} from "@/app/components/ui/sheet"

import {
    NavigationMenu,
} from "@/app/components/ui/navigation-menu"
import { NavigationMenuOrder as NavigationOrder } from "./components/NavigationMenuOrder";
import { NavigationMenuProducts as NavigationProduct } from "./components/NavigationMenuProducts";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const pathSplited = pathname.split('/')[1]

    return (
        <main>
            <Sheet>
                <nav className="border-b p-2 px-5 sm:px-10 text-white flex items-center border-primary-light">
                    <div className="flex items-center justify-between gap-x-16">
                        <SheetTrigger className="flex sm:hidden">
                            <Image src={logo} alt="Logo" className="w-8" />
                        </SheetTrigger>
                        <Image src={logo} alt="Logo" className="w-8 hidden sm:flex" />
                        <NavigationMenu className="gap-x-6 hidden sm:flex font-medium w-full text-sm">
                            <p className={pathSplited == 'overview' ? 'text-white' : 'text-primary-light'}>
                                <Link className="cursor-pointer" href={"/overview"}>
                                    Overview
                                </Link>
                            </p>
                            <NavigationOrder />
                            <NavigationProduct/>
                            <p className={pathSplited == 'settings' ? 'text-white' : 'text-primary-light'}>
                                <Link className="cursor-pointer" href={"/settings"}>
                                    Configurações
                                </Link>
                            </p>
                        </NavigationMenu>
                    </div>
                </nav>
                <SheetComponent />
            </Sheet>
            <div className="md:p-10 p-5">
                {children}
            </div>
        </main>
    )
}