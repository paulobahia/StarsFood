import { Separator } from "@/app/components/ui/separator"
import SidebarNav from "./components/Sidebar-Nav"
import { NotificationStatus, SecuritySafe, User, UserSquare } from "iconsax-react"

const sidebarNavItems = [
    {
        title: "Perfil",
        icon: <User size="24" color="#fff" variant="Bulk" />,
        href: "/settings",
    },
    {
        title: "Dados Pessoais",
        icon: <UserSquare size="24" color="#fff" variant="Bulk" />,
        href: "/settings/personal-info",
    },
    {
        title: "Senha e Segurança",
        icon: <SecuritySafe size="24" color="#fff" variant="Bulk" />,
        href: "/settings/password-and-security",
    },
    {
        title: "Notificações Push",
        icon: <NotificationStatus size="24" color="#d9e3f0" variant="Bulk" />,
        href: "/settings/push-notification",
    },
]

interface SettingsLayoutProps {
    children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
    return (
        <div>
            <div className="space-y-0.5">
                <h2 className="text-2xl font-bold tracking-tight">Configurações</h2>
                <p className="text-muted-foreground">
                    Gerencie as configurações da sua conta e defina preferências para o seu perfil.
                </p>
            </div>
            <Separator className="my-6" />
            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                <aside className="-mx-4 lg:w-1/5">
                    <SidebarNav items={sidebarNavItems} />
                </aside>
                <div className="flex-1 lg:max-w-2xl">{children}</div>
            </div>
        </div>
    )
}