import Image from "next/image";
import logo from './assets/StarsLogo.png'
import LoginForm from "./components/LoginForm";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <div className="text-white bg-background-secondary min-h-screen p-10 md:flex hidden flex-col justify-between">
          <span className="flex items-center">
            <Image src={logo} alt="Logo" />
            <p className="font-bold text-xl ml-2">Stars Inc</p>
          </span>
          <span>
            <p className="font-medium text-lg">
              “Gerenciar produtos e pedidos no meu restaurante nunca foi tão fácil e eficiente! Graças a essa poderosa aplicação, agora posso atender meus clientes com agilidade e rapidez como nunca antes. ”
            </p>
            <p className="mt-3 font-light text-sm">Ricardo Monteiro</p>
          </span>
        </div>
        <div className="text-white relative min-h-full flex items-center justify-center p-10">
          <div className="absolute font-bold text-lg top-0 w-full flex justify-end p-10">
            <Link className="cursor-pointer" href={"/register"}>
              Cadastro
            </Link>
          </div>
          <LoginForm />
        </div>
      </main>
    </>
  )
}
