"use client"

import { Button } from "@/app/components/ui/button";
import { Calendar } from "@/app/components/ui/calendar";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/app/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

export default function PersonalInfoForm() {
    const [date, setDate] = useState<Date>()

    return (
        <form className="space-y-8">
            <div className="w-full gap-y-7 flex mt-3 flex-col justify-start">
                <div className="flex flex-col gap-y-2.5">
                    <Label>Email</Label>
                    <div>
                        <input name='email' placeholder="Nome@exemplo.com" type="text" className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                    </div>
                    <p className="text-xs text-muted-foreground">
                        Este é o seu nome de exibição público. Pode ser seu nome verdadeiro ou um pseudônimo.
                    </p>
                </div>
                <div className="flex flex-col gap-y-2.5">
                    <Label>Telefone</Label>
                    <div>
                        <input name='telefone' placeholder="(XX) X XXXX-XXXX" type="text" className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                    </div>
                    <p className="text-xs text-muted-foreground">
                        Este é o nome que será exibido no seu perfil e poderá ser utilizado para fazer login.
                    </p>
                </div>
                <div className="flex flex-col gap-y-2.5">
                    <Label>Data de Nascimento</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Selecione uma data</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                weekStartsOn={0}
                                locale={ptBR}
                                selected={date}
                                onSelect={setDate}
                                mode="single"
                                initialFocus
                                disabled={(date) =>
                                    date > new Date() || date < new Date("1900-01-01")
                                }
                            />
                        </PopoverContent>
                    </Popover>
                    <p className="text-xs text-muted-foreground">
                        Este é o nome que será exibido no seu perfil e poderá ser utilizado para fazer login.
                    </p>
                </div>

            </div>
            <Button type="button" >Atualizar perfil</Button>
        </form>
    )
}