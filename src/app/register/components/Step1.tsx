import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form"
import { checkEmailFormSchema } from '@/schemas/auth/registerFormSchema'
import { useState } from 'react'
import { checkEmail } from '@/services'
import { Notify } from '@/context/NotifyContext'


interface Step1Props {
    onNextStep: () => void
}

const Step1: React.FC<Step1Props> = ({ onNextStep }) => {
    type CheckEmailFormData = z.infer<typeof checkEmailFormSchema>
    const [loading, setLoading] = useState<boolean>(false)
    const _Notify = Notify();

    const { register, handleSubmit, formState: { errors } } = useForm<CheckEmailFormData>({
        resolver: zodResolver(checkEmailFormSchema)
    })

    const handleNext: SubmitHandler<CheckEmailFormData> = ({ email }) => {
        let postData = {
            email: email
        }
        checkEmail(postData)
            .then(() => {
                onNextStep()
            })
            .catch((e) => {
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
        <>
            <p className="font-light text-sm text-primary-secundary">Digite seu e-mail abaixo para criar sua conta</p>
            <form onSubmit={handleSubmit(handleNext)} className="w-full gap-y-2 flex mt-6 flex-col justify-center items-center">
                <input {...register('email')} name='email' placeholder="nome@exemplo.com" type="email" className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                <button disabled={loading} type='submit' className="bg-white transition-colors items-center flex justify-center gap-x-2 ease-in-out w-full p-2 mt-1 border text-black font-medium text-sm rounded-md hover:bg-transparent hover:border hover:border-gray-300 hover:text-white disabled:bg-neutral-500 disabled:border-0 disabled:hover:text-black">
                    {loading && <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />}
                    Entrar com E-mail
                </button>
            </form>
            <div className="mt-6 gap-x-3 flex items-center justify-center w-full">
                <div className="bg-neutral-600 p-[0.2px] rounded-full flex-1" />
                <div>
                    <p className="text-[10px] font-normal text-primary-secundary">OU CONTINUAR COM</p>
                </div>
                <div className="bg-primary-secundary p-[0.2px] rounded-full flex-1" />
            </div>
            <button disabled={loading} className="bg-transparent w-full p-2 mt-4 border font-medium border-primary-secundary text-white text-sm rounded-md hover:bg-white/10 disabled:bg-neutral-600">
                Google
            </button>
            <span className="text-primary-secundary text-center text-sm mt-6">
                Ao clicar em continuar, você concorda com nossos <br />
                <span className="underline cursor-pointer">Termos de Serviço</span> e  <span className="underline cursor-pointer">Política de Privacidade.</span>
            </span>
        </>
    )
}

export default Step1