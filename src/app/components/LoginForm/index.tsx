"use client"

import { Login } from '@/services'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeSlash } from 'iconsax-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { z } from 'zod'
import Link from 'next/link'

import { Notify } from '@/context/NotifyContext'
import { authUserFormSchema } from '@/schemas/auth/loginFormSchema'
import PingLoading from '../ui/pingLoading'

const LoginForm = () => {
    type AuthUserFormData = z.infer<typeof authUserFormSchema>
    const [typePassword, setTypePassword] = useState<string>("password")
    const [loading, setLoading] = useState<boolean>(false)
    const _Notify = Notify();
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
            .then((response) => {
                setLoading(false)
                router.push('/overview')
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
                    <p className='text-white font-semibold text-xs cursor-pointer text-end hover:underline-offset-1'>
                        <Link className="cursor-pointer" href={"/reset-password"}>
                            Esqueci minha senha
                        </Link>
                    </p>
                </div>
                <div className='relative w-full'>
                    <button disabled={loading} type='submit' className="bg-white transition-colors items-center flex justify-center gap-x-2 ease-in-out w-full p-2 mt-1 border text-black font-medium text-sm rounded-md hover:bg-transparent hover:border hover:border-gray-300 hover:text-white disabled:bg-neutral-500 disabled:border-0 disabled:hover:text-black">
                        {loading
                            ?
                            <PingLoading />
                            :
                            <span>
                                Entrar com E-mail
                            </span>
                        }
                    </button>
                </div>
            </div>
        </form>
    )
}


export default LoginForm