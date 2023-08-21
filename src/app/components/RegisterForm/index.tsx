
const RegisterForm = () => {

    return (
        <div className="w-full flex-col flex justify-center items-center max-w-sm">
            <span className="text-center">
                <p className="font-semibold text-2xl">Crie a sua conta aqui</p>
                <p className="font-light text-sm text-primary-secundary">Digite seu e-mail abaixo para criar sua conta</p>
            </span>
            <div className="w-full gap-y-2 flex mt-6 flex-col justify-center items-center">
                <input placeholder="Nome@exemplo.com" type="email" className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                <button className="bg-white w-full p-2 mt-1 border text-black font-medium text-sm rounded-md hover:bg-transparent hover:border hover:border-gray-300 hover:text-white">
                    Entrar com E-mail
                </button>
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
            <span className="text-primary-secundary text-center text-sm mt-6">
                Ao clicar em continuar, você concorda com nossos <br />
                <span className="underline cursor-pointer">Termos de Serviço</span> e  <span className="underline cursor-pointer">Política de Privacidade.</span>
            </span>
        </div>
    )
}


export default RegisterForm