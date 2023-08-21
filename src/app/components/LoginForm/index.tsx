"use client"

import { authUser } from '@/services'
import { Eye, EyeSlash } from 'iconsax-react'
import { useState } from 'react'

const LoginForm = () => {
    const [typePassword, setTypePassword] = useState<string>("password")

    const changeTypePassword = () => {
        setTypePassword((prev) => {
            if (prev === 'password') {
                return 'text'
            }
            return 'password'
        })
    }

    const login = () => {
        let postData = {
            email: 'paulo@example.com',
            password: '02@ADR16na'
        }
        authUser(postData)
            .then((response) => {
                console.log(response)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return (
        <div className="w-full flex-col flex justify-center items-center max-w-sm">
            <span className="text-center">
                <p className="font-semibold text-2xl">Faça o login aqui</p>
                <p className="font-light text-sm text-primary-secundary">Digite seu e-mail e senha para acessar sua conta</p>
            </span>
            <div className="w-full gap-y-2 flex mt-6 flex-col justify-center items-center">
                <input placeholder="Nome@exemplo.com" type="email" className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                <div className="relative w-full">
                    <input placeholder="Senha" type={typePassword} className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                    <span onClick={changeTypePassword} className="absolute inset-y-0 right-3 flex items-center pl-2">
                        {typePassword == 'password' ? <Eye className="w-5 h-5 text-itens-primary cursor-pointer" variant="Bulk" /> : <EyeSlash className="w-5 h-5 text-itens-primary cursor-pointer" variant="Bulk" />}
                    </span>
                </div>
                <div className='relative w-full'>
                    <button onClick={login} className="bg-white transition-colors ease-in-out w-full p-2 mt-1 border text-black font-medium text-sm rounded-md hover:bg-transparent hover:border hover:border-gray-300 hover:text-white">
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
            <button className="bg-transparent w-full p-2 mt-4 border font-medium border-primary-secundary text-white text-sm rounded-md hover:bg-white/10">
                Google
            </button>
        </div>
    )
}


export default LoginForm