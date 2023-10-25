"use client"

import { ColumnDef } from "@tanstack/react-table"

import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"

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
    header: ({ column }) => (
      <DataTableColumnHeader className="min-w-max" column={column} title="Produto" />
    ),
    cell: ({ row }) => <div className="flex min-w-max">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (<div className="flex min-w-max">Data de Criação</div>),
    cell: ({ row }) => <div className="flex min-w-max">{row.getValue("createdAt")}</div>,
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Categoria" />
    ),
    cell: ({ row }) => <div className="flex min-w-max">{row.getValue("category")}</div>,
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => (<div className="flex min-w-max">Data de Modificação</div>),
    cell: ({ row }) => <div className="flex min-w-max">{row.getValue("updatedAt")}</div>,
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader className="min-w-max" column={column} title="Produto" />
    ),
    cell: ({ row }) => <div className="flex min-w-max">{row.getValue("price")}</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  }
]
