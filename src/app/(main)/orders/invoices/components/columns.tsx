"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Button } from "@/app/components/ui/button"

import { MoreVertical } from "lucide-react"
import { Badge } from "@/app/components/ui/badge"

export const columns: ColumnDef<Invoices>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <div>{row.getValue("id")}</div>,
  },
  {
    accessorKey: "isAvailable",
    header: "Status",
    cell: ({ row }) => {
      return (
        <Badge className="rounded-md" variant='outline'>{row.getValue("isAvailable")}</Badge>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "createdAt",
    header: "Data",
  },
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (<div className="flex justify-center">Total</div>),
    cell: ({ row }) => <div className="flex justify-center">{row.getValue("amount")}</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => {

      return (
        <div className="flex justify-center items-center">
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MoreVertical className="h-4 w-4 text-white" />
          </Button>
        </div>
      )
    },
  }
]
