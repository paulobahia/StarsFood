"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Button } from "@/app/components/ui/button"

import { MoreVertical } from "lucide-react"
import { Badge } from "@/app/components/ui/badge"
import { DataTableColumnHeader } from "./data-table-column-header"

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
      <DataTableColumnHeader column={column} title="Categoria" />
    ),
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "isAvailable",
    header: ({ column }) => (
      <DataTableColumnHeader className="flex justify-center" column={column} title="Status" />
    ),
    cell: ({ row }) => {
      return (
        row.getValue("isAvailable") == 'active'
          ?
          <div className="flex justify-center items-center mr-7">
            <Badge className="rounded-md" variant='outline'>Ativo</Badge>
          </div>
          :
          <div className="flex justify-center items-center mr-7">
            <Badge className="rounded-md" variant='outline'>Inativo</Badge>
          </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {

      return (
        <div className="flex justify-end items-end">
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MoreVertical className="h-4 w-4 text-white" />
          </Button>
        </div>
      )
    },
  }
]
