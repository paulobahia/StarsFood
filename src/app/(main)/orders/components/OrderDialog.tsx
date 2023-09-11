import {
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/app/components/ui/dialog"
import { Printer } from "iconsax-react"

interface OrderDialogProps {
    order: Order | null
}

const headerCard = (type: string) => {
    switch (type) {
        case 'todo':
            return 'bg-danger-base'
        case 'inProgress':
            return 'bg-warning-base'
        case 'done':
            return 'bg-success-base'
    }
}

const nextStep = (status: string) => {
    switch (status) {
        case 'todo':
            return 'Iniciar preparo'
        case 'inProgress':
            return 'Finalizar pedido'
        case 'done':
            return 'Notificar'
    }
}

const totalItens = (order: Order) => {
    var total = 0
    if (order) {
        order.itens.forEach(item => {
            total += item.price * item.quantity;
        });
    }
    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

const OrderDialog = ({ order }: OrderDialogProps) => {

    return (
        <DialogContent className="max-w-md sm:max-w-lg shadow-sm">
            <div className={`p-2 rounded-t-md w-full absolute ${headerCard(order?.status!)}`} />
            <DialogHeader className="mt-3">
                <DialogTitle className="text-xl font-medium text-white">Pedido - #{order?.id.padStart(5, '0')}</DialogTitle>
                <DialogDescription className="flex text-primary-light font-medium text-sm">
                    <p>
                        Mesa - &nbsp;
                    </p>
                    {order?.table}
                </DialogDescription>
            </DialogHeader>
            <div className="flex-col flex gap-y-2">
                {order?.itens.map((item, index) => {
                    return (
                        <div className="w-full gap-x-2 h-full flex bg-backgrounds-secondary p-3 rounded-md shadow-sm">
                            <div>
                                <img className='w-12 h-12' src={item.imagePath.src} alt="Imagem do Garçom" />
                            </div>
                            <div className="flex flex-col flex-1 justify-between">
                                <div className="flex items-center">
                                    <p className="text-primary-secundary/60 font-normal text-sm">{item.quantity}x&nbsp;</p>
                                    <p className="text-white font-medium text-sm">{item.name}</p>
                                </div>
                                <div>
                                    <p className="text-primary-secundary/60 font-normal text-sm">R$ {item.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="flex items-center mt-2 justify-end">
                    <p className="text-primary-secundary/60 font-normal text-sm">
                        Total:&nbsp;
                    </p>
                    <p className="text-white font-medium text-sm">
                        {totalItens(order!)}
                    </p>
                </div>
                <DialogFooter className="mt-4">
                    <div className="flex items-center w-full justify-between">
                        <div className="flex items-center">
                            <button type='button' className="bg-white transition-colors items-center flex justify-center ease-in-out py-1.5 px-3 border text-black font-medium text-sm rounded-md hover:bg-neutral-200">
                                <Printer
                                    size="20"
                                    className="mr-1"
                                    color="#000"
                                    variant="Broken"
                                />
                                Imprimir pedido
                            </button>
                        </div>
                        <div className="flex gap-x-1 items-center">
                            {order?.status != 'done' && <button type='button' className="bg-transparent transition-colors items-center flex justify-center ease-in-out py-1.5 px-3 border border-danger-base text-danger-base font-medium text-sm rounded-md">
                                Cancelar pedido
                            </button>}
                            <button type='button' className="bg-white transition-colors items-center flex justify-center ease-in-out py-1.5 px-3 border text-black font-medium text-sm rounded-md hover:bg-neutral-200">
                                {nextStep(order?.status!)}
                            </button>
                        </div>
                    </div>
                </DialogFooter>
            </div>
        </DialogContent>
    )
}

export default OrderDialog