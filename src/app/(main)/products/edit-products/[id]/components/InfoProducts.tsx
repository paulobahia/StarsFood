"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Variants } from "../page";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/app/components/ui/select"
import { Categories } from "../../../categories/components/columns";
import { getAllCategorys } from "@/services";

interface InfoProductsProps {
    register: UseFormRegister<{
        name: string;
        description: string;
    }>
    errors: FieldErrors<{
        name: string;
        description: string;
    }>
    productName: string | null
    setProductName: Dispatch<SetStateAction<string | null>>
    variations: Variants[]
    setCategoryDataForm: any
    categoryDataForm: Categories
    description: string
    setDescription: Dispatch<SetStateAction<string>>
    category: Categories[]
}

const InfoProducts = ({ setProductName, productName, variations, register, errors, setCategoryDataForm, categoryDataForm, description, setDescription, category }: InfoProductsProps) => {

    const handlerCategory = (categoryName: string) => {
        let filteredCategory = category.filter((e) => e.categoryName == categoryName)[0]
        setCategoryDataForm(filteredCategory)
    }

    return (
        <div className="bg-backgrounds-secondary rounded-xl p-5">
            <div className="text-xl font-semibold">
                Informações do Produto
            </div>
            <div className="mt-3 gap-y-2 flex flex-col">
                <div className="flex relative flex-col group gap-y-2 w-full">
                    <span className="text-sm font-medium">Nome</span>
                    <input readOnly={variations.length > 0} {...register('name')} name='name' value={productName ? productName : ''} onChange={(e) => setProductName(e.target.value)} placeholder="Porção de mandioca" className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-xs border-primary-light text-white rounded-md read-only:border-dashed read-only:border read-only:outline-none" />
                    {errors.name && productName == '' && <span className='text-danger-base w-full text-xs font-semibold'>{errors.name.message}</span>}
                    {variations.length > 0 && <span className={`absolute mb-8 rounded-t-lg rounded-br-lg text-xs font-medium scale-0 bg-gray-50 -top-2 left-14 p-2 text-zinc-800 group-hover:scale-100`}>Remova as variações para alterar o nome do produto</span>}
                </div>
                <div className="flex w-full justify-between gap-x-4 items-center">
                    <div className="flex flex-col gap-y-2 w-full">
                        <span className="text-sm font-medium">Categoria</span>
                        <Select value={categoryDataForm.categoryName} onValueChange={(e) => handlerCategory(e)}>
                            <SelectTrigger className="flex w-full p-2 bg-transparent border text-xs border-primary-light text-primary-secundary rounded-md">
                                <SelectValue placeholder="Selecione uma categoria" />
                                <SelectContent >
                                    <SelectGroup >
                                        <SelectLabel>Categorias</SelectLabel>
                                        {category.map((item, index) => {
                                            return (
                                                <SelectItem key={index} value={item.categoryName}>{item.categoryName}</SelectItem>
                                            )
                                        })}
                                    </SelectGroup>
                                </SelectContent>
                            </SelectTrigger>
                        </Select>
                    </div>
                </div>
                <div className="flex-col sm:flexl w-full justify-between gap-x-4">
                    <div className="flex flex-col gap-y-2 w-full mt-2">
                        <span className="text-sm font-medium">Descrição</span>
                        <textarea value={description} {...register('description')} name="description" onChange={(e) => setDescription(e.target.value)} placeholder="Uma breve descrição sobre o seu produto..." className="flex placeholder:text-primary-secundary h-28 max-h-28 placeholder:text-xs w-full p-2 bg-transparent border text-xs border-primary-light text-white rounded-md" />
                        {errors.description && <span className='text-danger-base w-full text-xs font-semibold'>{errors.description.message}</span>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoProducts