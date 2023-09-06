import { Dispatch, SetStateAction } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface InfoProductsProps {
    register: UseFormRegister<{
        name: string;
        category: string;
        type: string;
        description: string;
    }>
    errors: FieldErrors<{
        name: string;
        category: string;
        type: string;
        description: string;
    }>
    productName: string | null
    setProductName: Dispatch<SetStateAction<string | null>>
}

const InfoProducts = ({ setProductName, productName, register, errors }: InfoProductsProps) => {
    return (
        <div className="bg-backgrounds-secondary rounded-xl p-5">
            <div className="text-xl font-semibold">
                Informações do Produto
            </div>
            <div className="mt-3 gap-y-2 flex flex-col">
                <div className="flex flex-col gap-y-2 w-full">
                    <span className="text-sm font-medium">Nome</span>
                    <input {...register('name')} name='name' onChange={(e) => setProductName(e.target.value)} placeholder="Porção de mandioca" className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                    {errors.name && productName == '' && <span className='text-danger-base w-full text-xs font-semibold'>{errors.name.message}</span>}
                </div>
                <div className="flex w-full justify-between gap-x-4 items-center">
                    <div className="flex flex-col gap-y-2 w-full">
                        <span className="text-sm font-medium">Categoria</span>
                        <input {...register('category')} name='category' placeholder="Acompanhamento" className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                        {errors.category && <span className='text-danger-base w-full text-xs font-semibold'>{errors.category.message}</span>}
                    </div>
                    <div className="flex flex-col gap-y-2 w-full">
                        <span className="text-sm font-medium">Tipo</span>
                        <input {...register('type')} name='type' placeholder="Porção" className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                        {errors.type && <span className='text-danger-base w-full text-xs font-semibold'>{errors.type.message}</span>}
                    </div>
                </div>
                <div className="flex-col sm:flexl w-full justify-between gap-x-4">
                    <div className="flex flex-col gap-y-2 w-full mt-2">
                        <span className="text-sm font-medium">Descrição</span>
                        <textarea {...register('description')} name="description" placeholder="Uma breve descrição sobre o seu produto..." defaultValue='' className="flex placeholder:text-primary-secundary h-28 max-h-28 placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                        {errors.description && <span className='text-danger-base w-full text-xs font-semibold'>{errors.description.message}</span>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoProducts