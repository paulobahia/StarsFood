import { Skeleton } from "@/app/components/ui/skeleton"
import { TableBody, TableCell, TableRow } from "@/app/components/ui/table"

const SkeletonCategoryTable = () => {
    return (
        <TableBody>
            <TableRow>
                <TableCell
                >
                    <Skeleton className="h-2.5 w-[6%] animate-bounce transition-all ease-linear" />
                </TableCell>
                <TableCell
                >
                    <Skeleton className="h-2.5 w-[15%] animate-bounce transition-all ease-linear" />
                </TableCell>
                <TableCell
                    className="flex justify-center"
                >
                    <Skeleton className="h-2.5 w-[10%] animate-bounce transition-all ease-linear" />

                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                >
                    <Skeleton className="h-2.5 w-[6%] animate-bounce transition-all ease-linear" />
                </TableCell>
                <TableCell
                >
                    <Skeleton className="h-2.5 w-[15%] animate-bounce transition-all ease-linear" />
                </TableCell>
                <TableCell
                    className="flex justify-center"
                >
                    <Skeleton className="h-2.5 w-[10%] animate-bounce transition-all ease-linear" />

                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                >
                    <Skeleton className="h-2.5 w-[6%] animate-bounce transition-all ease-linear" />
                </TableCell>
                <TableCell
                >
                    <Skeleton className="h-2.5 w-[15%] animate-bounce transition-all ease-linear" />
                </TableCell>
                <TableCell
                    className="flex justify-center"
                >
                    <Skeleton className="h-2.5 w-[10%] animate-bounce transition-all ease-linear" />
                </TableCell>
            </TableRow>
        </TableBody>
    )
}

export default SkeletonCategoryTable