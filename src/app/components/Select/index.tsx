import {
    Select as SelectRoot,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Dispatch, SetStateAction } from "react"

interface SelectProps {
    setGender: Dispatch<SetStateAction<String | undefined>>
}

export function Select({ setGender }: SelectProps) {
    return (
        <SelectRoot onValueChange={setGender}>
            <SelectTrigger className="w-full text-white">
                <SelectValue className=" text-xs" placeholder="Gênero" />
            </SelectTrigger>
            <SelectContent >
                <SelectItem value="Homem">Homem</SelectItem>
                <SelectItem value="Mulher">Mulher</SelectItem>
                <SelectItem value="Prefiro não informar">Prefiro não informar</SelectItem>
            </SelectContent>
        </SelectRoot>
    )
}