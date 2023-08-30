"use client"

import { ColumnDef } from "@tanstack/react-table"

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
    header: "Código do Produto",
  },
  {
    accessorKey: "name",
    header: "Nome do Produto",
  },
  {
    accessorKey: "createdAt",
    header: "Data de Criação",
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "updatedAt",
    header: "Data de Criação",
  },
  {
    accessorKey: "price",
    header: "Preço",
  },
]
