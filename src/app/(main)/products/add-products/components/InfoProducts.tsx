const InfoProducts = () => {
    return (
        <div className="bg-backgrounds-secondary rounded-xl p-5">
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
                        <input name='category' placeholder="Acompanhamento" className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                    </div>
                </div>
                <div className="flex-col sm:flexl w-full justify-between gap-x-4">
                    <div className="flex flex-col gap-y-2 w-full">
                        <span className="text-sm font-medium">Tipo</span>
                        <input name='type' placeholder="Porção" className="flex placeholder:text-primary-secundary placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                    </div>
                    <div className="flex flex-col gap-y-2 w-full mt-2">
                        <span className="text-sm font-medium">Descrição</span>
                        <textarea name="decription" placeholder="Uma breve descrição sobre o seu produto..." defaultValue='' className="flex placeholder:text-primary-secundary h-28 max-h-28 placeholder:text-xs w-full p-2 bg-transparent border text-sm border-primary-light text-white rounded-md" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoProducts