import { ArrowDown2, Eye, EyeSlash } from 'iconsax-react'
import { useState } from 'react'
import { DatePicker } from '../../DatePicker'
import { Select } from '../../Select'

const Step2 = () => {
    const [typePassword, setTypePassword] = useState<string>("password")
    const [date, setDate] = useState<Date | undefined>(new Date())

    const changeTypePassword = () => {
        setTypePassword((prev) => {
            if (prev === 'password') {
                return 'text'
            }
            return 'password'
        })
    }

    return (
        <>
            <form className="w-full gap-y-2 flex mt-6 flex-col justify-center items-center">
                <div className="flex w-full">
                    <input name='email' placeholder="Nome Completo" type='text' className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                </div>
                <div className="flex w-full">
                    <input name='email' readOnly type="email" className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border-dashed border-2 outline-none border-primary-light text-sm text-white rounded-md" />
                </div>
                <div className="relative w-full">
                    <input name='password' placeholder="Senha" type={typePassword} className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                    <span onClick={changeTypePassword} className="absolute inset-y-0 right-3 flex items-center pl-2">
                        {typePassword == 'password' ? <Eye className="w-5 h-5 text-itens-primary cursor-pointer" variant="Bulk" /> : <EyeSlash className="w-5 h-5 text-itens-primary cursor-pointer" variant="Bulk" />}
                    </span>
                </div>
                <div className="relative w-full">
                    <DatePicker />
                </div>
                <div className="relative w-full">
                    {/* <input name='gender' placeholder="Gênero" type='text' className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                    <span className="absolute inset-y-0 right-3 flex items-center pl-2">
                        <ArrowDown2 className="w-5 h-5 text-itens-primary cursor-pointer" variant="Bold" />
                    </span> */}
                    <Select />
                </div>
                <div className="flex w-full mt-3 mb-1">
                    <input name='email' placeholder="Código do restaurante" type="text" className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                </div>
                <button type='submit' className="bg-white transition-colors items-center flex justify-center gap-x-2 ease-in-out w-full p-2 border text-black font-medium text-sm rounded-md hover:bg-transparent hover:border hover:border-gray-300 hover:text-white disabled:bg-neutral-500 disabled:border-0 disabled:hover:text-black">
                    {/* {loading && <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />} */}
                    Continuar
                </button>
            </form>
        </>
    )
}

export default Step2
