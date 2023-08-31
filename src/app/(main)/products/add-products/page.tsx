export default function AddProducts() {
    return (
        <main className="text-white">
            <div className="flex-col flex justify-center items-center gap-y-4">
                <div className="flex flex-1 w-full text-3xl font-semibold">
                    Adicionar Produto
                </div>
            </div>
            <div className="min-h-screen grid grid-cols-1 gap-x-3 md:grid-cols-2 justify-between mt-5">
                <div className="flex flex-col gap-y-3">
                    <div className="bg-backgrounds-secondary p-5 rounded-xl flex h-full items-center justify-center">
                    </div>
                    <div className="bg-backgrounds-secondary  rounded-xl p-5">
                        <div className="text-xl font-semibold">
                            Informações do Produto
                        </div>
                        <div className="mt-3 gap-y-2 flex flex-col">
                            <div className="flex w-full justify-between gap-x-4">
                                <div className="flex flex-col gap-y-2 w-full">
                                    <span className="text-sm font-medium">Nome</span>
                                    <input name='name' placeholder="Porção de mandioca" className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                                </div>
                                <div className="flex flex-col gap-y-2 w-full">
                                    <span className="text-sm font-medium">Categoria</span>
                                    <input name='name' placeholder="Porção de mandioca" className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                                </div>
                            </div>
                            <div className="flex w-full justify-between gap-x-4">
                                <div className="flex flex-col gap-y-2 w-full">
                                    <span className="text-sm font-medium">Tipo</span>
                                    <input name='name' placeholder="Porção de mandioca" className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                                </div>
                                <div className="flex flex-col gap-y-2 w-full">
                                    <span className="text-sm font-medium">Descrição</span>
                                    <textarea placeholder="Uma breve descrição sobre o seu produto..." className="flex placeholder:text-primary-secundary max-h-28 placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md"> </textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w">

                </div>
            </div>
        </main>
    )
}