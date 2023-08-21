"use client"

import { Login } from '@/services'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { authUserFormSchema } from '@/utils/zod/authUserFormSchema'
import { Eye, EyeSlash } from 'iconsax-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { z } from 'zod'
import Notify from '@/utils/Notify/notifyUtils'

const LoginForm = () => {
    type AuthUserFormData = z.infer<typeof authUserFormSchema>
    const [typePassword, setTypePassword] = useState<string>("password")
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm<AuthUserFormData>({
        resolver: zodResolver(authUserFormSchema)
    })

    const changeTypePassword = () => {
        setTypePassword((prev) => {
            if (prev === 'password') {
                return 'text'
            }
            return 'password'
        })
    }

    const authUser: SubmitHandler<AuthUserFormData> = ({ email, password }) => {
        setLoading(true)
        let postData = {
            email,
            password
        }
        Login(postData)
            .then(() => {
                router.push('/home')
            })
            .catch((e) => {
                Notify({ title: 'Erro inesperado', message: 'Desculpe, ocorreu um erro no servidor.', type: 'Error' })
                setLoading(false)
            })
    }

    return (
        <form onSubmit={handleSubmit(authUser)} className="w-full flex-col flex justify-center items-center max-w-sm">
            <span className="text-center">
                <p className="font-semibold text-2xl">Faça o login aqui</p>
                <p className="font-light text-sm text-primary-secundary">Digite seu e-mail e senha para acessar sua conta</p>
            </span>
            <div className="w-full gap-y-2 flex mt-6 flex-col justify-center items-center">
                <input {...register('email')} name='email' placeholder="Nome@exemplo.com" type="email" className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                {errors.email && <span className='text-danger-base w-full text-xs font-semibold'>{errors.email.message}</span>}
                <div className="relative w-full">
                    <input {...register('password')} name='password' placeholder="Senha" type={typePassword} className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                    <span onClick={changeTypePassword} className="absolute inset-y-0 right-3 flex items-center pl-2">
                        {typePassword == 'password' ? <Eye className="w-5 h-5 text-itens-primary cursor-pointer" variant="Bulk" /> : <EyeSlash className="w-5 h-5 text-itens-primary cursor-pointer" variant="Bulk" />}
                    </span>
                </div>
                {errors.password && <span className='text-danger-base w-full text-xs font-semibold'>{errors.password.message}</span>}
                <div className='w-full flex justify-start'>
                    <p className='text-white font-semibold text-xs cursor-pointer text-end'>Esqueci minha senha</p>
                </div>
                <div className='relative w-full'>
                    <button disabled={loading} type='submit' className="bg-white transition-colors items-center flex justify-center gap-x-2 ease-in-out w-full p-2 mt-1 border text-black font-medium text-sm rounded-md hover:bg-transparent hover:border hover:border-gray-300 hover:text-white disabled:bg-neutral-500 disabled:border-0 disabled:hover:text-black">
                        {loading && <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />}
                        Entrar com E-mail
                    </button>
                </div>
            </div>
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
        </form>
    )
}


export default LoginForm