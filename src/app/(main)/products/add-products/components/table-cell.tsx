import { useEffect, useState } from "react"

const TableCell = ({ getValue, row, column, table }: any) => {
    const initialValue = getValue()
    const [value, setValue] = useState<string>("")
    const tableMeta = table.options.meta

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    const onBlur = () => {
        table.options.meta?.onEdit(row.index, column.id, value)
    }

    if (tableMeta?.editedRows[row.id]) {
        return (
            <div className="py-1 flex justify-center items-center">
                <input
                    className="flex placeholder:text-primary-secundary text-center max-w-[50%] placeholder:text-xs p-2 bg-transparent border text-sm border-primary-light text-white rounded-md"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    onBlur={onBlur}
                />
            </div>
        )
    }
    return <div className="text-xs flex justify-center">{value}</div>
}

export default TableCell
