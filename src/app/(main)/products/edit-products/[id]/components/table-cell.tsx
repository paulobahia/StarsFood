import { useEffect, useState } from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/app/components/ui/select"

const TableCell = ({ getValue, row, column, table }: any) => {
    const initialValue = getValue()
    const columnMeta = column.columnDef.meta
    const [value, setValue] = useState<string>("")
    const [measurement, setMeasurement] = useState<string>("")
    const tableMeta = table.options.meta

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    const onBlurPrice = () => {
        table.options.meta?.onEdit(row.index, column.id, value)
    }

    const onBlurMeasurement = () => {
        const splitValue = value.split(" ")[0]
        const formattedMeasurement = splitValue + " " + measurement
        table.options.meta?.onEdit(row.index, column.id, formattedMeasurement)
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
        return columnMeta?.type == "price" ?
            (
                <div className="py-1 flex justify-center items-center">
                    <input
                        className="flex placeholder:text-primary-secundary w-28 text-center placeholder:text-xs p-2 bg-transparent border text-sm border-primary-light text-white rounded-md"
                        value={value}
                        onChange={handleChange}
                        onBlur={onBlurPrice}
                    />
                </div>
            ) :
            (
                <div className="py-1 flex justify-center items-center">
                    <input
                        className="flex placeholder:text-primary-secundary w-28 text-center placeholder:text-xs p-2 bg-transparent border text-sm border-primary-light text-white rounded-md border-r-0 rounded-r-none"
                        value={value.split(" ")[0]}
                        onChange={e => setValue(e.target.value)}
                    />
                    <Select onValueChange={(e) => setMeasurement(e)} defaultValue={measurement}>
                        <SelectTrigger onBlur={onBlurMeasurement} className="w-min border-l-0 rounded-l-none">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Medida</SelectLabel>
                                <SelectItem value="g">g</SelectItem>
                                <SelectItem value="ml">ml</SelectItem>
                                <SelectItem value="L">L</SelectItem>
                                <SelectItem value="Uni">Un</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            )
    }
    return <div className="text-xs flex justify-center">{value}</div>
}

export default TableCell
