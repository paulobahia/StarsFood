"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Button } from "@/app/components/ui/button"

import { Badge } from "@/app/components/ui/badge"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { DataTableRowActions } from "./data-table-row-actions"

export type Categories = {
  id: string
  name: string
  isAvailable: string
}

export const columns: ColumnDef<Categories>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader className="min-w-max" column={column} title="Categoria" />
    ),
    cell: ({ row }) => <div className="flex min-w-max">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "isAvailable",
    header: ({ column }) => (
      <DataTableColumnHeader className="flex justify-center min-w-max" column={column} title="Status" />
    ),
    cell: ({ row }) => {
      return (
        row.getValue("isAvailable") == 'active'
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
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
]
