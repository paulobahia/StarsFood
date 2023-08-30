"use client"

import Image from "next/image";
import logo from '../assets/StarsLogo.png'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    return (
        <main>
            <nav className="border-b p-2 px-10 text-white flex items-center border-primary-light">
                <div className="flex items-center justify-between gap-x-16">
                    <Image src={logo} alt="Logo" className="w-8" />
                    <div className="gap-x-6 hidden sm:flex font-medium w-full text-sm">
                        <p className={pathname.split('/')[1] == 'overview' ? 'text-white' : 'text-primary-light'}>
                            <Link className="cursor-pointer" href={"/overview"}>
                                Overview
                            </Link>
                        </p>
                        <p className={pathname.split('/')[1] == 'orders' ? 'text-white' : 'text-primary-light'}>
                            <Link className="cursor-pointer" href={"/orders"}>
                                Pedidos
                            </Link>
                        </p>
                        <p className={pathname.split('/')[1] == 'products' ? 'text-white' : 'text-primary-light'}>
                            <Link className="cursor-pointer" href={"/products"}>
                                Produtos
                            </Link>
                        </p>
                        <p className={pathname.split('/')[1] == 'commands' ? 'text-white' : 'text-primary-light'}>
                            <Link className="cursor-pointer" href={"/commands"}>
                                Comandas
                            </Link>
                        </p>
                        <p className={pathname.split('/')[1] == 'settings' ? 'text-white' : 'text-primary-light'}>
                            <Link className="cursor-pointer" href={"/settings"}>
                                Configurações
                            </Link>
                        </p>
                    </div>
                </div>
            </nav>
            <div className="md:p-10 p-5">
                {children}
            </div>
        </main>
    )
}