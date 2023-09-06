import React from 'react';

import { Check, Pencil, Trash2, X } from 'lucide-react';

import { Button } from '@/app/components/ui/button';

const EditCell = ({ row, table }: any) => {
    const meta = table.options.meta;

    const setEditedRow = (e: any) => {
        const elName = e.currentTarget.name
        meta.setEditedRows((old: any) => ({
            ...old,
            [row.id]: !old[row.id],
        }));
        if (elName !== "edit") {
            meta.onRevert(row.index, e.currentTarget.name === "cancel")
        }
    };

    const removeRow = (row: any) => {
        meta.onRemove(row.index)
    }

    return meta?.editedRows[row.id] ? (
        <>
            <div className="flex justify-center gap-x-1 items-center">
                <Button variant={'ghost'} type='button' onClick={setEditedRow} name="cancel" className="h-8 w-8 p-0">
                    <X className="h-4 w-4" />
                </Button>
                <Button variant={'ghost'} type='button' onClick={setEditedRow} name="done" className="h-8 w-8 p-0">
                    <Check className="h-4 w-4" />
                </Button>
            </div>
        </>
    ) : (
        <div className="flex justify-center items-center">
            <Button variant={'ghost'} type='button' onClick={setEditedRow} name="edit" className="h-8 w-8 p-0 gap-x-1">
                <Pencil className="h-4 w-4" />
            </Button>
            <Button variant={'ghost'} type='button' onClick={() => removeRow(row)} name="edit" className="h-8 w-8 p-0 gap-x-2">
                <Trash2 className="h-4 w-4" />
            </Button>
        </div>
    );
};

export default EditCell;
