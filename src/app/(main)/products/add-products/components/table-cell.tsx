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

    const formatCurrency = (value: string) => {
        const floatValue = parseFloat(value.replace(/\D/g, '')) / 100;
        const formattedValue = floatValue.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
        return formattedValue;
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setValue(formatCurrency(value));
    };

    if (tableMeta?.editedRows[row.id]) {
        return (
            <div className="py-1 flex justify-center items-center">
                <input
                    className="flex placeholder:text-primary-secundary w-28 text-center placeholder:text-xs p-2 bg-transparent border text-sm border-primary-light text-white rounded-md"
                    value={value}
                    onChange={handleChange}
                    onBlur={onBlur}
                />
            </div>
        )
    }
    return <div className="text-xs flex justify-center">{value}</div>
}

export default TableCell
