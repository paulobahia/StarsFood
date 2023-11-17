"use client"

import { useState } from "react"
import { createCategory } from "@/services"
import { z } from 'zod'
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { CreateCategorySchema } from "@/contracts"

import { Notify } from "@/context/NotifyContext"
import PingLoading from "@/app/components/ui/pingLoading"
import { useRouter } from "next/navigation"

export default function AddCategories() {
    type CreateCategoryData = z.infer<typeof CreateCategorySchema>
    const [loading, setLoading] = useState<boolean>(false)
    const _Notify = Notify();
    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm<CreateCategoryData>({
        resolver: zodResolver(CreateCategorySchema)
    })

    const postCategory: SubmitHandler<CreateCategoryData> = ({ categoryName }) => {
        setLoading(true)

        let postData = {
            categoryName,
        }

        createCategory(postData)
            .then((response) => {
                _Notify.showNotify('Categoria criada com sucesso', 'Seu categoria foi criado com sucesso e está pronto para ser utilizada.', 'Success')
                router.push('/products/categories')
                setLoading(true)
            })
            .catch((e) => {
                setLoading(false)
                console.log(e)
            })
    }

    return (
        <form onSubmit={handleSubmit(postCategory)} className="min-h-[80vh] flex items-center p-10 justify-center">
            <div className="w-full flex-col text-white flex gap-y-3 justify-center items-center max-w-sm">
                <span className="text-center">
                    <p className="font-semibold text-2xl">Adicionar Categorias</p>
                </span>
                <div className="w-full gap-y-2 flex mt-3 flex-col justify-center items-center">
                    <input {...register('categoryName')} name='categoryName' placeholder="Acompanhamento, Bebidas ou Sobremesas..." type="text" className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                    {errors.categoryName && <span className='text-danger-base w-full text-xs font-semibold'>{errors.categoryName.message}</span>}
                </div>
                <div className='w-full'>
                    <button disabled={loading} type='submit' className="bg-white transition-colors items-center flex justify-center gap-x-2 ease-in-out w-full p-2 mt-1 border text-black font-medium text-sm rounded-md hover:bg-transparent hover:border hover:border-gray-300 hover:text-white disabled:bg-neutral-500 disabled:border-0 disabled:hover:text-black">
                        {loading
                            ?
                            <PingLoading />
                            :
                            <span>
                                Adicionar
                            </span>
                        }
                    </button>
                </div>
                <div className="gap-x-3 flex items-center justify-center w-full">
                    <div className="bg-neutral-600 p-[0.2px] rounded-full flex-1" />
                    <div>
                        <p className="text-[10px] font-normal text-primary-secundary">OU</p>
                    </div>
                    <div className="bg-primary-secundary p-[0.2px] rounded-full flex-1" />
                </div>
                <div className='w-full'>
                    <button className="bg-white transition-colors items-center flex justify-center gap-x-2 ease-in-out w-full p-2 mt-1 border text-black font-medium text-sm rounded-md hover:bg-transparent hover:border hover:border-gray-300 hover:text-white disabled:bg-neutral-500 disabled:border-0 disabled:hover:text-black">
                        <span>
                            Cancelar
                        </span>
                    </button>
                </div>
            </div>
        </form>
    )
}