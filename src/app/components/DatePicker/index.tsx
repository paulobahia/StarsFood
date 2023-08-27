"use client"

import { Dispatch, SetStateAction, useState } from "react"
import { ptBR } from 'date-fns/locale'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar as CalendarIcon } from "iconsax-react"
import { FormField } from "@/components/ui/form"
import { UseFormRegister } from "react-hook-form"

interface DatePickerProps {
    register: UseFormRegister<{
        email: string;
        name: string;
        password: string;
        birthDate: Date;
        restaurantId: string;
        gender: string;
    }>
}

export function DatePicker({ register }: DatePickerProps) {

    const formatDate = (date: Date): string => {
        const dia: string = String(date.getDate()).padStart(2, '0');
        const mes: string = String(date.getMonth() + 1).padStart(2, '0');
        const ano: number = date.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }

    return (
        <FormField
            {...register('birthDate')}
            name="birthDate"
            render={({ field }) => (
                <Popover>
                    <PopoverTrigger className="flex text-primary-secundary text-xs w-full hover:bg-transparent p-2 bg-transparent border border-primary-light rounded-md" asChild>
                        <Button
                            variant={"default"}
                            className={cn(
                                "w-full justify-start text-left font-normal",
                                !field.value && "text-muted-foreground"
                            )}
                        >
                            <div className="flex flex-1 items-center justify-between">
                                {field.value ? <span className="text-xs text-white">{formatDate(field.value)}</span> : <span className="text-primary-secundary text-xs">Data de nascimento</span>}
                                <CalendarIcon className="w-5 h-5 text-itens-primary cursor-pointer" variant="Bulk" />
                            </div>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar
                            weekStartsOn={0}
                            locale={ptBR}
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                            disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                            }
                        />
                    </PopoverContent>
                </Popover >
            )}
        />
    )
}
