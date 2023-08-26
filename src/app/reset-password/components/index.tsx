"use client"

import { useState } from "react"
import Link from 'next/link'
import { z } from 'zod'
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form"

import { Notify } from "@/context/NotifyContext"
import { resetPasswordFormSchema } from "@/schemas/user/passwordResetFormSchema"

const ResetPasswordForm = () => {
    type ResetPasswordFormData = z.infer<typeof resetPasswordFormSchema>
    const [loading, setLoading] = useState<boolean>(false)
    const _Notify = Notify();
    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm<ResetPasswordFormData>({
        resolver: zodResolver(resetPasswordFormSchema)
    })

    const resetPassword: SubmitHandler<ResetPasswordFormData> = ({ email }) => {
        // Implementação ResetPassword
    }

    return (
        <form onSubmit={handleSubmit(resetPassword)} className="w-full flex-col text-white flex justify-center items-center max-w-sm">
            <span className="text-center">
                <p className="font-semibold text-2xl">Recuperar senha</p>
            </span>
            <div className="w-full gap-y-2 flex mt-6 flex-col justify-center items-center">
                <input {...register('email')} name='email' placeholder="nome@exemplo.com" type="email" className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                {errors.email && <span className='text-danger-base w-full text-xs font-semibold'>{errors.email.message}</span>}
            </div>
            <div className='relative w-full mt-3'>
                <button disabled={loading} type='submit' className="bg-white transition-colors items-center flex justify-center gap-x-2 ease-in-out w-full p-2 mt-1 border text-black font-medium text-sm rounded-md hover:bg-transparent hover:border hover:border-gray-300 hover:text-white disabled:bg-neutral-500 disabled:border-0 disabled:hover:text-black">
                    {loading && <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />}
                    Recuperar
                </button>
                <span className="justify-center items-center w-full mt-3 font-normal text-primary-light text-xs flex">
                    <Link className="cursor-pointer" href={"/"}>
                        Voltar
                    </Link>
                </span>
            </div>
        </form>
    )
}

export default ResetPasswordForm