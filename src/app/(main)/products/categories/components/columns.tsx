"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Button } from "@/app/components/ui/button"

import { MoreVertical } from "lucide-react"
import { Badge } from "@/app/components/ui/badge"

export type Categories = {
  id: string
  name: string
  isAvailable: boolean
}

export const columns: ColumnDef<Categories>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Categoria",
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "isAvailable",
    header: ({ column }) => (<div className="flex justify-center">Status</div>),
    cell: ({ row }) => {
      return (
        row.getValue("isAvailable")
          ?
          <div className="flex justify-center items-center">
            <Badge className="rounded-md" variant='outline'>Ativo</Badge>
          </div>
          :
          <div className="flex justify-center items-center">
            <Badge className="rounded-md" variant='outline'>Inativo</Badge>
          </div>
      )
    }
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
