"use client"

import { useState } from "react"
import Link from 'next/link'
import { z } from 'zod'
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form"

import { Notify } from "@/context/NotifyContext"
import { resetPasswordFormSchema } from "@/schemas/user/passwordResetFormSchema"
import { resetPassword } from "@/services"
import PingLoading from "@/app/components/ui/pingLoading"

const ResetPasswordForm = () => {
    type ResetPasswordFormData = z.infer<typeof resetPasswordFormSchema>
    const [loading, setLoading] = useState<boolean>(false)
    const _Notify = Notify();
    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm<ResetPasswordFormData>({
        resolver: zodResolver(resetPasswordFormSchema)
    })

    const changePassword: SubmitHandler<ResetPasswordFormData> = ({ email }) => {
        setLoading(true)
        let postData = {
            email
        }
        resetPassword(postData)
            .then((response) => {
                router.push('/')
                setLoading(false)
                _Notify.showNotify('Cadastro Concluído!', 'Aguarde a aprovação para prosseguir.', 'Success')
            })
            .catch((e) => {
                setLoading(false)

                var errorMessage: string = ''

                if (e.code = 'ERR_NETWORK') {
                    errorMessage = 'Desculpe, ocorreu um erro no servidor.'
                }
                if (e.response) {
                    errorMessage = e.response.data.message
                }

                _Notify.showNotify('Erro inesperado', errorMessage, 'Error')
                setLoading(false)
            })
    }

    return (
        <form onSubmit={handleSubmit(changePassword)} className="w-full flex-col text-white flex justify-center items-center max-w-sm">
            <span className="text-center">
                <p className="font-semibold text-2xl">Recuperar senha</p>
            </span>
            <div className="w-full gap-y-2 flex mt-6 flex-col justify-center items-center">
                <input {...register('email')} name='email' placeholder="nome@exemplo.com" type="email" className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                {errors.email && <span className='text-danger-base w-full text-xs font-semibold'>{errors.email.message}</span>}
            </div>
            <div className='relative w-full mt-3'>
                <button disabled={loading} type='submit' className="bg-white transition-colors items-center flex justify-center gap-x-2 ease-in-out w-full p-2 mt-1 border text-black font-medium text-sm rounded-md hover:bg-transparent hover:border hover:border-gray-300 hover:text-white disabled:bg-neutral-500 disabled:border-0 disabled:hover:text-black">
                    {loading
                        ?
                        <PingLoading />
                        :
                        <span>
                            Recuperar
                        </span>
                    }
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