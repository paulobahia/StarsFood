export default function ClodeOrder() {
    return (
        <main className="min-h-[80vh] flex items-center p-10 justify-center">
            <div className="w-full flex-col text-white flex gap-y-3 justify-center items-center max-w-sm">
                <span className="text-center">
                    <p className="font-semibold text-2xl">Fechar Comanda</p>
                </span>
                <div className="w-full gap-y-2 flex mt-3 flex-col justify-center items-center">
                    <input name='code' placeholder="Número da Comanda" type="text" className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                </div>
                <div className='w-full'>
                    <button type='submit' className="bg-white transition-colors items-center flex justify-center gap-x-2 ease-in-out w-full p-2 mt-1 border text-black font-medium text-sm rounded-md hover:bg-transparent hover:border hover:border-gray-300 hover:text-white disabled:bg-neutral-500 disabled:border-0 disabled:hover:text-black">
                        <span>
                            Pesquisar
                        </span>
                    </button>
                </div>
                <div className="gap-x-3 flex items-center justify-center w-full">
                    <div className="bg-neutral-600 p-[0.2px] rounded-full flex-1" />
                    <div>
                        <p className="text-[10px] font-normal text-primary-secundary">OU</p>
                    </div>
                    <div className="bg-primary-secundary p-[0.2px] rounded-full flex-1" />
                </div>
                <div className='w-full'>
                    <button type='submit' className="bg-white transition-colors items-center flex justify-center gap-x-2 ease-in-out w-full p-2 mt-1 border text-black font-medium text-sm rounded-md hover:bg-transparent hover:border hover:border-gray-300 hover:text-white disabled:bg-neutral-500 disabled:border-0 disabled:hover:text-black">
                        <span>
                            Escanear Comanda
                        </span>
                    </button>
                </div>
            </div>
        </main>
    )
}