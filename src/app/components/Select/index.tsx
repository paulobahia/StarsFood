import {
    Select as SelectRoot,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export function Select() {
    return (
        <SelectRoot>
            <SelectTrigger className="w-full">
                <SelectValue className="text-primary-secundary text-xs" placeholder="Gênero" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="Homem">Homem</SelectItem>
                <SelectItem value="Mulher">Mulher</SelectItem>
                <SelectItem value="Prefiro não informar">Prefiro não informar</SelectItem>
            </SelectContent>
        </SelectRoot>
    )
}