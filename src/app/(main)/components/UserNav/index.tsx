import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import { Button } from "@/app/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu"
import localForage from "localforage";
import { useEffect, useState } from "react";

type UserData = {
    email: string,
    name: string,
    role: string,
}

const UserNav = () => {

    const [userData, setUserDate] = useState<UserData>()

    useEffect(() => {
        localForage.getItem('infoUser')
            .then((response) => {
                setUserDate(response as UserData)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const formatAvatarFallback = (userName: string | undefined) => {
        if (userName != undefined) {
            const nameParts = userName.split(' ');

            const firstLetterFirstName = nameParts[0].charAt(0).toUpperCase();
            const firstLetterLastName = nameParts[1].charAt(0).toUpperCase();
            const uppercaseInitials = firstLetterFirstName + firstLetterLastName;

            return uppercaseInitials;
        }

        return '?'
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="/avatars/01.png" alt="avataUser" />
                        <AvatarFallback>{formatAvatarFallback(userData?.name)}</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{userData?.name}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            {userData?.email}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Perfil
                        {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Configurações
                        {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserNav