import { FormField } from "@/app/components/ui/form";
import {
    Select as SelectRoot,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/app/components/ui/select"

export function Select({ register }: RegisterProps) {
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