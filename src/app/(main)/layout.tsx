import Image from "next/image";
import logo from '../assets/StarsLogo.png'
import Link from "next/link";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <nav className="border-b p-2 px-10 text-white flex items-center border-primary-light">
                <div className="flex items-center justify-between gap-x-16">
                    <Image src={logo} alt="Logo" className="w-8" />
                    <div className="flex gap-x-6 font-medium text-sm">
                        <p>
                            <Link className="cursor-pointer" href={"/overview"}>
                                Overview
                            </Link>
                        </p>
                        <p>
                            <Link className="cursor-pointer" href={"/orders"}>
                                Pedidos
                            </Link>
                        </p>
                        <p>
                            <Link className="cursor-pointer" href={"/products"}>
                                Produtos
                            </Link>
                        </p>
                        <p>
                            <Link className="cursor-pointer" href={"/commands"}>
                                Comandas
                            </Link>
                        </p>
                        <p>
                            <Link className="cursor-pointer" href={"/settings"}>
                                Configurações
                            </Link>
                        </p>
                    </div>
                </div>
            </nav>
            <div className="p-10">
                {children}
            </div>
        </main>
    )
}