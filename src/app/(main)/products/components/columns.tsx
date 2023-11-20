"use client"

import { ColumnDef } from "@tanstack/react-table"

import { DataTableColumnHeader } from "./data-table-column-header"
import { Badge } from "@/app/components/ui/badge"
import { convertDateFormat } from "@/utils/methods"
import { Category } from "@/contracts"

export type Products = {
  id: string
  name: string
  createdAt: string
  category: string
  updatedAt: string
  price: string
}

const formatCategoryData = (item: Category) => {
  return item.categoryName
}

export const columns: ColumnDef<Products>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader className="min-w-max" column={column} title="Produto" />
    ),
    cell: ({ row }) => <div className="flex min-w-max">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "createdTime",
    header: ({ column }) => (<div className="flex min-w-max">Data de Criação</div>),
    cell: ({ row }) => <div className="flex min-w-max">{convertDateFormat(row.getValue("createdTime"))}</div>,
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Categoria" />
    ),
    cell: ({ row }) => <div className="flex min-w-max">{formatCategoryData(row.getValue("category"))}</div>,
  },
  {
    accessorKey: "updateTime",
    header: ({ column }) => (<div className="flex min-w-max">Data de Modificação</div>),
    cell: ({ row }) => <div className="flex min-w-max">{convertDateFormat(row.getValue("updateTime"))}</div>,
  },
  {
    accessorKey: "isAvailable",
    header: ({ column }) => (
      <DataTableColumnHeader className="flex justify-center min-w-max" column={column} title="Status" />
    ),
    cell: ({ row }) => {
      return (
        row.getValue("isAvailable") == true
          ?
          <div className="flex justify-center items-center mr-7 min-w-max">
            <Badge className="rounded-md" variant='outline'>Ativo</Badge>
          </div>
          :
          <div className="flex justify-center items-center mr-7 min-w-max">
            <Badge className="rounded-md" variant='outline'>Inativo</Badge>
          </div>
      )
    },
  }
]
