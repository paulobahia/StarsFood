"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Button } from "@/app/components/ui/button"

import { Pencil } from "lucide-react"

export type Products = {
  id: string
  name: string
  createdAt: string
  category: string
  updatedAt: string
  price: string
}

export const columns: ColumnDef<Products>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Produto",
    cell: ({ row }) => <div className="w-[270px]">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "createdAt",
    header: "Data de Criação",
    cell: ({ row }) => <div className="w-[150px]">{row.getValue("createdAt")}</div>,
  },
  {
    accessorKey: "category",
    header: ({ column }) => (<div className="flex justify-start">Categoria</div>),
    cell: ({ row }) => <div className="w-[150px] flex justify-start">{row.getValue("category")}</div>,
  },
  {
    accessorKey: "updatedAt",
    header: "Data de Modificação",
    cell: ({ row }) => <div className="w-[180px]">{row.getValue("updatedAt")}</div>,
  },
  {
    accessorKey: "price",
    header: ({ column }) => (<div className="w-[100px] flex justify-center">Preço</div>),
    cell: ({ row }) => <div className="w-[100px] flex justify-center">{row.getValue("price")}</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => {

      return (
        <div className="flex justify-center items-center">
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Abrir Menu</span>
            <Pencil className="h-4 w-4 text-white" />
          </Button>
        </div>
      )
    },
  }
]
