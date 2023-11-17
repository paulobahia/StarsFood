import { SheetContent } from "@/app/components/ui/sheet"
import { Card, Moneys } from "iconsax-react"

import DialogSplit from "./components/DialogSplit"

import { amountOrder, amountProduct } from "@/utils/methods"

type SheetInvoiceProps = {
    data: ProductsInvoice[]
}

const SheetInvoice: React.FC<SheetInvoiceProps> = ({ data }) => {
    return (
      <SheetContent side={'right'} className="w-[450px] sm:max-w-none py-10 px-5">
        <div className="pb-4 text-3xl font-normal">Finalizar Pedido</div>
        <div className="flex flex-1 flex-col gap-y-5 h-[60%] w-full bg-[#1e1e21] rounded-t-xl p-5 overflow-auto">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex gap-x-3 items-center">
                <div className="bg-primary w-8 h-8 flex justify-center items-center rounded-full">
                  <div className="text-black text-lg font-semibold">{item.quantity}</div>
                </div>
                <div className="flex flex-col items-start justify-center">
                  <div className="text-primary text-sm font-medium">{item.productName}</div>
                  <div className="text-primary-secundary text-xs font-light">{item.category}</div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-center">
                <div className="text-primary text-base font-semibold">{amountProduct(item.price, item.quantity.toString())}</div>
                <div className="text-primary-secundary text-xs font-light">{item.price}/Un</div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#1e1e21] px-3">
          <div className="border-t-2 border-primary/30 border-dashed" />
        </div>
        <div className="flex flex-col justify-end flex-1 h-[20%] w-full bg-[#1e1e21] p-5">
          <div className="gap-y-2 flex flex-col">
            <div className="w-full flex justify-between">
              <div>Taxas</div>
              <div className="text-sm font-light text-primary-secundary">R$ 00,00</div>
            </div>
            <div className="w-full flex justify-between">
              <div>Desconto</div>
              <div className="text-sm font-light text-primary-secundary">R$ 00,00</div>
            </div>
            <div className="w-full flex justify-between items-center">
              <div>Subtotal</div>
              <div className="text-sm font-light text-primary-secundary">{amountOrder(data)}</div>
            </div>
          </div>
          <div className="w-full flex flex-1 justify-between items-end">
            <div className="text-xl font-bold">TOTAL</div>
            <div className="text-xl font-normal">{amountOrder(data)}</div>
          </div>
        </div>
        <div className="grid grid-cols-3 flex-1 h-[15%] w-full bg-primary rounded-b-xl">
          <div className="text-black bg-primary hover:bg-[#c8c8c8]/20 flex flex-col gap-y-1 rounded-bl-xl justify-center group items-center cursor-pointer">
            <Moneys size="45" color="#555555" variant="Bulk" />
            <div className="text-xs font-normal text-primary-light">Dinheiro</div>
          </div>
          <div className="text-black bg-primary hover:bg-[#c8c8c8]/20 transition-colors ease-in-out flex flex-col gap-y-1 group justify-center items-center cursor-pointer">
            <Card size="45" color="#555555" variant="Bulk" />
            <div className="text-xs font-normal text-primary-light">Cartão</div>
          </div>
          <DialogSplit Invoicedata={data} />
        </div>
      </SheetContent>
    );
}

export default SheetInvoice