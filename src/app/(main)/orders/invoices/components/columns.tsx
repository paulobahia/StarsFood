"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Button } from "@/app/components/ui/button"

import { Badge } from "@/app/components/ui/badge"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"

export const columns: ColumnDef<Invoices>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <div>{row.getValue("id")}</div>,
  },
  {
    accessorKey: "isAvailable",
    header: ({ column }) => (
      <DataTableColumnHeader className="min-w-max" column={column} title="Status" />
    ),
    cell: ({ row }) => {
      return (
        <Badge className="rounded-md min-w-max" variant='outline'>{row.getValue("isAvailable")}</Badge>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (<div className="flex min-w-max">Data</div>),
    cell: ({ row }) => <div className="flex min-w-max">{row.getValue("createdAt")}</div>,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader className="min-w-max" column={column} title="Nome" />
    ),
    cell: ({ row }) => <div className="flex min-w-max">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader className="flex justify-center min-w-max" column={column} title="Total" />
    ),
    cell: ({ row }) => <div className="flex justify-center min-w-max">{row.getValue("amount")}</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  }
]
