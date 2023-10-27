"use client"

import { ColumnDef } from "@tanstack/react-table"

export type ProductsInvoice = {
  id: string
  productName: string
  quantity: number
  price: string
}

const amountProduct = (price: string, quantity: string) => {
  const parsePrice = parseFloat(price.replace('R$', '').replace(',', '.'));
  const amount = parsePrice * parseFloat(quantity)
  return amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export const columns: ColumnDef<ProductsInvoice>[] = [
  {
    accessorKey: "productName",
    header: ({ column }) => (<div className="flex min-w-max">Produto</div>),
    cell: ({ row }) => <div className="flex font-semibold min-w-max">{row.getValue("productName")}</div>,
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => (<div className="flex min-w-max justify-center">Quantidade</div>),
    cell: ({ row }) => <div className="flex min-w-max font-normal justify-center">{row.getValue("quantity")}</div>,
  },
  {
    accessorKey: "price",
    header: ({ column }) => (<div className="flex min-w-max justify-center">Preço Un</div>),
    cell: ({ row }) => <div className="flex min-w-max font-normal justify-center">{row.getValue("price")}</div>,
  },
  {
    id: "amount",
    header: ({ column }) => (<div className="flex min-w-max justify-center">Total</div>),
    cell: ({ row }) => <div className="flex min-w-max font-normal justify-center">{amountProduct(row.getValue("price"), row.getValue("quantity"))}</div>,

  }
]
