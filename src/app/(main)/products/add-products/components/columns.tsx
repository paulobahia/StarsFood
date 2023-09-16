"use client"

import { createColumnHelper } from "@tanstack/react-table"

import TableCell from "./table-cell"
import EditCell from "./edit-cell"
import { Variants } from "../page"

const columnHelper = createColumnHelper<Variants>();

export const columns = [
    columnHelper.accessor('name', {
        header: ({ column }) => (<div className="flex text-xs">Produto</div>),
        cell: ({ row }) => <div className="text-primary-light text-xs">{row.getValue("name")}</div>,
    }),
    columnHelper.accessor('range', {
        header: ({ column }) => (<div className="flex text-xs justify-center">Quantidade</div>),
        cell: TableCell,
    }),
    columnHelper.accessor('price', {
        header: ({ column }) => (<div className="flex text-xs items-center justify-center">Preço</div>),
        cell: TableCell,
        meta: {
            type: 'price'
        }
    }),
    columnHelper.display({
        id: "actions",
        cell: EditCell,
    }),
]
