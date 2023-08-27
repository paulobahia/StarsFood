import { FormField } from "@/components/ui/form";
import {
    Select as SelectRoot,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Dispatch, SetStateAction } from "react"
import { UseFormRegister } from "react-hook-form";

interface SelectProps {
    register: UseFormRegister<{
        email: string;
        name: string;
        password: string;
        birthDate: Date;
        restaurantId: string;
        gender: string;
    }>
}

export function Select({ register }: SelectProps) {
    return (
        <FormField
            {...register('gender')}
            name="gender"
            render={({ field }) => (
                <SelectRoot onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="w-full text-white">
                        <SelectValue className=" text-xs" placeholder="Gênero" />
                    </SelectTrigger>
                    <SelectContent >
                        <SelectItem value="Homem">Homem</SelectItem>
                        <SelectItem value="Mulher">Mulher</SelectItem>
                        <SelectItem value="Prefiro não informar">Prefiro não informar</SelectItem>
                    </SelectContent>
                </SelectRoot >
            )}

        />
    )
}