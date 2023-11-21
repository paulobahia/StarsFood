import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"

const ProfileForm = () => {
    return (
        <form className="space-y-8">
            <div className="w-full gap-y-7 flex mt-3 flex-col justify-start">
                <div className="flex flex-col gap-y-2.5">
                    <Label>Nome</Label>
                    <div>
                        <input name='name' placeholder="Nome" type="text" className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                    </div>
                    <p className="text-xs text-muted-foreground">
                        Este é o seu nome de exibição público. Pode ser seu nome verdadeiro ou um pseudônimo.
                    </p>
                </div>
                <div className="flex flex-col gap-y-2.5">
                    <Label>Nome de Usuário</Label>
                    <div>
                        <input name='username' placeholder="Username" type="text" className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                    </div>
                    <p className="text-xs text-muted-foreground">
                        Este é o nome que será exibido no seu perfil e poderá ser utilizado para fazer login.
                    </p>
                </div>
                <div className="flex flex-col gap-y-2.5">
                    <Label htmlFor="picture">Picture</Label>
                    <Input id="picture" type="file" className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                    <p className="text-xs text-muted-foreground">
                        Esta é a imagem que será exibido no seu perfil como seu avatar.
                    </p>
                </div>
            </div>
            <Button>Atualizar perfil</Button>
        </form>
    )
}

export default ProfileForm