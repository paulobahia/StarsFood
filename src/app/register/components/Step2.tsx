import { DatePicker } from '@/app/components/DatePicker'
import { Select } from '@/app/components/Select'
import { Form } from '@/app/components/ui/form'
import PingLoading from '@/app/components/ui/pingLoading'
import { Notify } from '@/context/NotifyContext'
import { registerUserFormSchema } from '@/schemas/auth/registerFormSchema'
import { creatUser } from '@/services'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeSlash } from 'iconsax-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

interface Step2Props {
    emailProp: string
}

const Step2: React.FC<Step2Props> = ({ emailProp }) => {
    type RegisterUserFormData = z.infer<typeof registerUserFormSchema>
    const [typePassword, setTypePassword] = useState<string>("password")
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()
    const _Notify = Notify();

    const RegisterForm = useForm<RegisterUserFormData>({
        resolver: zodResolver(registerUserFormSchema)
    })

    const register = RegisterForm.register;
    const handleSubmit = RegisterForm.handleSubmit;
    const errors = RegisterForm.formState.errors;

    const changeTypePassword = () => {
        setTypePassword((prev) => {
            if (prev === 'password') {
                return 'text'
            }
            return 'password'
        })
    }


    const registerUser: SubmitHandler<RegisterUserFormData> = ({ name, birthDate, email, password, restaurantCode, gender }) => {
        setLoading(true)
        let postData = {
            name,
            birthDate,
            email,
            password,
            gender,
            restaurantCode,
        }
        creatUser(postData)
            .then((response) => {
                setLoading(false)
                router.push('/')
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
        <>
            <Form {...RegisterForm}>
                <form onSubmit={handleSubmit(registerUser)} className="w-full gap-y-2 flex mt-6 flex-col justify-center items-center">
                    <div className="flex w-full">
                        <input {...register('name')} name='name' placeholder="Nome Completo" type='text' className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                    </div>
                    {errors.name && <span className='text-danger-base w-full text-xs font-semibold'>{errors.name.message}</span>}
                    <div className="flex w-full">
                        <input name='email' readOnly type="email" value={emailProp} className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border-dashed border-2 outline-none border-primary-light text-sm text-white rounded-md" />
                    </div>
                    <div className="relative w-full">
                        <input {...register('password')} name='password' placeholder="Senha" type={typePassword} className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                        <span onClick={changeTypePassword} className="absolute inset-y-0 right-3 flex items-center pl-2">
                            {typePassword == 'password' ? <Eye className="w-5 h-5 text-itens-primary cursor-pointer" variant="Bulk" /> : <EyeSlash className="w-5 h-5 text-itens-primary cursor-pointer" variant="Bulk" />}
                        </span>
                    </div>
                    {errors.password && <span className='text-danger-base w-full text-xs font-semibold'>{errors.password.message}</span>}
                    <DatePicker register={register} />
                    {errors.birthDate && <span className='text-danger-base w-full text-xs font-semibold'>{errors.birthDate.message}</span>}
                    <Select register={register} />
                    {errors.gender && <span className='text-danger-base w-full text-xs font-semibold'>{errors.gender.message}</span>}
                    <div className=" w-full mt-3 mb-1">
                        <input {...register('restaurantCode')} name='restaurantId' placeholder="Código do restaurante" type="text" className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                        {errors.restaurantCode && <span className='text-danger-base w-full text-xs font-semibold'>{errors.restaurantCode.message}</span>}
                    </div>
                    <button type='submit' className="bg-white transition-colors items-center flex justify-center gap-x-2 ease-in-out w-full p-2 border text-black font-medium text-sm rounded-md hover:bg-transparent hover:border hover:border-gray-300 hover:text-white disabled:bg-neutral-500 disabled:border-0 disabled:hover:text-black">
                        {loading
                            ?
                            <PingLoading />
                            :
                            <span>
                                Continuar
                            </span>
                        }
                    </button>
                </form>
            </Form>
        </>
    )
}

export default Step2
