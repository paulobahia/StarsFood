import { Dispatch, SetStateAction, useState } from "react"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/app/components/ui/accordion"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/app/components/ui/alert-dialog"
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuTrigger,
} from "@/app/components/ui/context-menu"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/app/components/ui/tooltip"

import { X, Minus, Check } from "lucide-react"
import { amountProduct } from "@/utils/methods"
import { Button } from "@/app/components/ui/button"

type AccordionInvoiceProps = {
    data: ProductsInvoice[];
    persons: Person[];
    dataCopy: ProductsInvoice[] | null;
    isDivision: boolean;
    setSelectedPerson: Dispatch<SetStateAction<Person | undefined>>;
    setPerson: Dispatch<SetStateAction<Person[]>>;
    setData: Dispatch<SetStateAction<ProductsInvoice[]>>;
    setIsActiveBtn: Dispatch<SetStateAction<boolean>>;
    setIsDivision: Dispatch<SetStateAction<boolean>>;
};

const AccordionInvoice: React.FC<AccordionInvoiceProps> = ({ data, persons, dataCopy, isDivision, setData, setPerson, setSelectedPerson, setIsActiveBtn, setIsDivision }) => {
    const [editPerson, setEditPerson] = useState<string>('');
    const [renamePersonId, setRenamePersonId] = useState<number>();
    const [showAlertDialog, setShowAlertDialog] = useState<boolean>(false);

    const amountOrderForPerson = (products: ProductsInvoice[]) => {
        let totalSum = 0;

        products.forEach((product) => {
            const parsePrice = parseFloat(product.price.replace('R$', '').replace(',', '.'));
            const partialSum = parsePrice * product.quantity;
            totalSum += partialSum;
        });

        return totalSum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    const decrementPersonProduct = (product: ProductsInvoice, personId: number) => {
        setPerson((prevPersons) => {
            return prevPersons.map((person) => {
                if (person.id === personId) {
                    const updatedPerson = { ...person };
                    const productIndex = updatedPerson.products.findIndex((p) => p.id === product.id);

                    if (productIndex !== -1) {
                        if (updatedPerson.products[productIndex].quantity > 1) {
                            updatedPerson.products[productIndex].quantity -= 1;
                        } else {
                            updatedPerson.products.splice(productIndex, 1);
                        }
                        const dataProduct = data.find((p) => p.id === product.id);

                        if (dataProduct) {
                            dataProduct.quantity += 1;
                        }
                    }
                    return updatedPerson;
                }
                return person;
            });
        });
    };

    const removePerson = (id: number) => {
        const updatedPersons = persons.filter((person) => person.id !== id);
        setPerson(updatedPersons);
    };

    const cancelDivision = () => {
        const updatePersons = persons.map((item) => {
            return {
                ...item,
                products: [],
            };
        });
        setPerson(updatePersons);
        setData(dataCopy!);
        setIsActiveBtn(false);
    };

    const setRenamePerson = (person: Person) => {
        setRenamePersonId(person.id);
        setEditPerson(person.name);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setEditPerson(value);
    };

    const changePersonName = (personId: number) => {
        const updatePerson = persons.map((person) => {
            if (person.id == personId) {
                person.name = editPerson;
            }
            return person;
        });
        setEditPerson('');
        setRenamePersonId(0);
        setPerson(updatePerson);
    };

    const cleanPersonProducts = (person: Person) => {

        if (isDivision) {
            setShowAlertDialog(true);
            setIsDivision(false)
            return
        }

        const updatedData = data.map((dataProduct) => {
            const matchingProduct = person.products.find((personProduct) => personProduct.id === dataProduct.id);

            if (matchingProduct) {
                return {
                    ...dataProduct,
                    quantity: matchingProduct.quantity,
                };
            }

            return dataProduct;
        });

        const updatePersons = persons.map((item) => {
            if (item.id == person.id) {
                return {
                    ...item,
                    products: [],
                };
            } else {
                return item;
            }
        });

        setPerson(updatePersons);
        setData(updatedData);
    };

    return (
        <Accordion type="single" collapsible className="w-full">
            {persons.map((item, index) => (
                <ContextMenu key={index}>
                    <AccordionItem onClick={() => setSelectedPerson(item)} value={item.id.toString()}>
                        <ContextMenuTrigger>
                            <AccordionTrigger className={'text-sm hover:no-underline flex justify-between w-full'}>
                                <div className="flex flex-col items-start gap-y-1">
                                    {renamePersonId == item.id ? (
                                        <div className="flex items-center gap-x-2">
                                            <input
                                                className="flex placeholder:text-primary-secundary text-center placeholder:text-xs py-1.5 bg-transparent border text-sm border-primary-light text-white rounded-md"
                                                value={editPerson}
                                                onChange={handleChange}
                                                autoFocus
                                            />
                                            <Button onClick={() => changePersonName(item.id)} variant={'ghost'} type="button" name="done" className="h-8 w-8 p-0">
                                                <Check className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    ) : (
                                        <div>{item.name}</div>
                                    )}
                                    <div className="text-xs font-light text-gray-400">Total: {amountOrderForPerson(item.products)}</div>
                                </div>
                            </AccordionTrigger>
                        </ContextMenuTrigger>
                        <AccordionContent className="flex flex-col">
                            {item.products.map((product, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div className={`flex gap-x-2 ${index != 0 && 'mt-3'}`}>
                                        {product.category != 'Divisão' ? (
                                            <div onClick={() => decrementPersonProduct(product, item.id)} className="bg-primary group w-8 h-8 flex justify-center items-center group rounded-full">
                                                <div className="text-black text-lg group-hover:hidden font-semibold cursor-pointer">{product.quantity}</div>
                                                <div className="text-black text-lg group-hover:flex hidden font-semibold justify-center items-center">
                                                    {product.quantity > 1 ? <Minus size="20" color="#000" /> : <X size="20" color="#000" />}
                                                </div>
                                            </div>
                                        ) : (
                                            <AlertDialog open={showAlertDialog} onOpenChange={setShowAlertDialog}>
                                                <AlertDialogTrigger className="bg-primary group w-8 h-8 flex justify-center items-center group rounded-full">
                                                    <div className="text-black text-lg group-hover:hidden font-semibold cursor-pointer">{product.quantity}</div>
                                                    <div className="text-black text-lg group-hover:flex hidden font-semibold justify-center items-center">
                                                        <X size="20" color="#000" />
                                                    </div>
                                                </AlertDialogTrigger>
                                                <AlertDialogContent>
                                                    <AlertDialogHeader>
                                                        <AlertDialogTitle>Você tem certeza absoluta?</AlertDialogTitle>
                                                        <AlertDialogDescription>Essa ação irá cancelar a divisão igualitaria dos itens retornando todos ao seu estado inicial.</AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                                        <AlertDialogAction onClick={() => cancelDivision()}>Continuar</AlertDialogAction>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                        )}
                                        <div className="flex flex-col items-start justify-center">
                                            <div className="text-primary text-sm font-medium whitespace-nowrap overflow-hidden truncate max-w-[160px]">{product.productName}</div>
                                            <div className="text-primary-secundary text-xs font-light">{product.category}</div>
                                        </div>
                                    </div>
                                    <div className="text-primary text-base font-semibold mb-1">{amountProduct(product.price, product.quantity.toString())}</div>
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                    <ContextMenuContent>
                        <ContextMenuItem onClick={() => setRenamePerson(item)} className="flex items-center gap-3 hover:bg-white/10">
                            <div>Renomear</div>
                            <ContextMenuShortcut>Ctrl + R</ContextMenuShortcut>
                        </ContextMenuItem>
                        <ContextMenuItem onClick={() => cleanPersonProducts(item)} className="flex items-center gap-3 hover:bg-white/10">
                            <div>Limpar</div>
                        </ContextMenuItem>
                        <ContextMenuSeparator />
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger className="w-full">
                                    <ContextMenuItem disabled={persons.length <= 2 || item.products.length != 0} onClick={() => removePerson(item.id)} className="flex items-center gap-3 hover:bg-white/10">
                                        Excluir
                                        <ContextMenuShortcut>Ctrl + D</ContextMenuShortcut>
                                    </ContextMenuItem>
                                </TooltipTrigger>
                                {
                                    item.products.length != 0 &&
                                    <TooltipContent side="bottom">
                                        <p>Antes de excluir esta pessoa, certifique-se de remover todos os produtos associados a ela.</p>
                                    </TooltipContent>
                                }
                                {
                                    persons.length == 2 &&
                                    <TooltipContent side="bottom">
                                        <p>O número mínimo de pessoas para a divisão é 2. Portanto, não é possível remover essa pessoa.</p>
                                    </TooltipContent>
                                }
                            </Tooltip>
                        </TooltipProvider>
                    </ContextMenuContent>
                </ContextMenu>
            ))
            }
        </Accordion >
    );
};

export default AccordionInvoice