"use client"
import { Button } from "@/app/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/app/components/ui/dialog"
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

import { Card, Moneys, Profile2User } from "iconsax-react"
import { useMemo, useState } from "react"
import { ProductsInvoice } from "../../../columns"
import { amountOrder, amountProduct } from "@/utils/methods"
import { X, Minus } from "lucide-react"

type Person = {
    id: number,
    name: string,
    products: ProductsInvoice[]
}

type DialogSplitProps = {
    Invoicedata: ProductsInvoice[]
}

const DialogSplit: React.FC<DialogSplitProps> = ({ Invoicedata }) => {

    const [data, setData] = useState<ProductsInvoice[]>([...Invoicedata])
    const [persons, setPerson] = useState<Person[]>([
        {
            id: 1,
            name: "Pessoas 01",
            products: []
        },
        {
            id: 2,
            name: "Pessoas 02",
            products: []
        },
    ])
    const [selectedPerson, setSelectedPerson] = useState<Person>()
    const amount = useMemo(() => amountOrder(Invoicedata), [Invoicedata]);
    const [dataCopy, setDataCopy] = useState<ProductsInvoice[]>()

    const addNewPerson = () => {
        const newId = persons.length + 1;
        const newName = `Pessoa ${newId.toString().padStart(2, '0')}`;
        const newPerson = {
            id: newId,
            name: newName,
            products: []
        };

        setPerson([...persons, newPerson]);
    };

    const removePerson = (id: number) => {
        const updatedPersons = persons.filter(person => person.id !== id);
        setPerson(updatedPersons);
    };

    const selectProduct = (product: ProductsInvoice) => {
        if (selectedPerson) {
            const updatedPeople = persons.map(person => {
                if (person.id === selectedPerson.id) {
                    const productPersonIndex = person.products.findIndex(p => p.id === product.id);
                    const productDataIndex = data.findIndex(p => p.id === product.id);

                    if (productPersonIndex !== -1) {
                        person.products[productPersonIndex].quantity += 1;
                        data[productDataIndex].quantity -= 1;
                    } else {
                        const updatedPerson = { ...person };
                        const newProduct = { ...product, quantity: 1 };
                        updatedPerson.products.push(newProduct);
                        data[productDataIndex].quantity -= 1;
                        return updatedPerson;
                    }
                }
                return person;
            });
            setPerson(updatedPeople);
        }
    }

    const decrementPersonProduct = (product: ProductsInvoice, personId: number) => {
        setPerson(prevPersons => {
            return prevPersons.map(person => {
                if (person.id === personId) {
                    const updatedPerson = { ...person };
                    const productIndex = updatedPerson.products.findIndex(p => p.id === product.id);

                    if (productIndex !== -1) {
                        if (updatedPerson.products[productIndex].quantity > 1) {
                            updatedPerson.products[productIndex].quantity -= 1;
                        } else {
                            updatedPerson.products.splice(productIndex, 1);
                        }
                        const dataProduct = data.find(p => p.id === product.id);

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

    const cancelDivision = () => {
        const updateData = data.map((item) => {
            const matchingItem = dataCopy!.find((copyItem) => copyItem.id === item.id);
            if (matchingItem) {
                return {
                    ...item,
                    quantity: matchingItem.quantity,
                };
            } else {
                return item;
            }
        });

        const updatePersons = persons.map((item) => {
            return {
                ...item,
                products: []
            }
        });

        setPerson(updatePersons)
        setData(updateData)
    }

    const amountPaid = (persons: Person[]) => {
        let totalSum = 0;

        persons.forEach(person => {
            person.products.forEach(product => {
                const parsePrice = parseFloat(product.price.replace('R$', '').replace(',', '.'));
                const partialSum = parsePrice * product.quantity;
                totalSum += partialSum;
            });
        });

        return totalSum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    const amountRemaining = (persons: Person[]) => {

        let totalSum = 0;

        const total = parseFloat(amount.replace('R$', '').replace(',', '.'))

        persons.forEach(person => {
            person.products.forEach(product => {
                const parsePrice = parseFloat(product.price.replace('R$', '').replace(',', '.'));
                const partialSum = parsePrice * product.quantity;
                totalSum += partialSum;
            });
        });

        return (total - totalSum).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    const amountOrderForPerson = (products: ProductsInvoice[]) => {
        let totalSum = 0

        products.forEach(product => {
            const parsePrice = parseFloat(product.price.replace('R$', '').replace(',', '.'))
            const partialSum = parsePrice * product.quantity;
            totalSum += partialSum;
        })

        return totalSum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    const divideEqually = () => {

        const totalValue = data.reduce((acc, product) => {
            let parsePrice = parseFloat(product.price.replace('R$', '').replace(',', '.'))
            return acc + product.quantity * parsePrice
        }, 0)

        const numPersons = persons.length;
        const shareValue = totalValue / numPersons;

        const updatedPersons = persons.map((person, index) => {
            const shareProducts: ProductsInvoice[] = [];

            shareProducts.push({
                id: '0',
                productName: 'Divisão igual',
                quantity: 1,
                price: shareValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
                category: 'Divisão'
            });

            return {
                ...person,
                products: [...person.products, ...shareProducts]
            };
        });

        const updateData = data.map((item) => {
            return {
                ...item,
                quantity: 0,
            };
        });
        setDataCopy(Invoicedata)
        setData(updateData)
        setPerson(updatedPersons);
    }

    return (
        <Dialog>
            <DialogTrigger className="text-black bg-primary flex flex-col rounded-br-xl gap-y-1 justify-center group items-center cursor-pointer">
                <Profile2User size="45" color="#555555" variant="Bulk" />
                <div className="text-xs font-normal text-primary-light">Dividir</div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-6xl p-0 rounded-xl select-none">
                <div className="flex">
                    <div className="flex flex-col h-full p-5 w-[70%]">
                        <div className="flex w-full justify-between items-center">
                            <div className="flex flex-col gap-y-2">
                                <div className="text-lg font-semibold leading-none tracking-tight">
                                    Dividir Igualmente
                                </div>
                                <div className="flex gap-x-2 text-primary-light font-medium text-sm">
                                    <div>
                                        Mesa - 005
                                    </div>
                                    <div>
                                        Pedido #00128
                                    </div>
                                    <div>
                                        -
                                    </div>
                                    <div>
                                        Nov 24, 2023 ás 18:30
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Button onClick={() => divideEqually()} variant={"default"} size={"default"} className="flex">
                                    Dividir Igualmente
                                </Button>
                            </div>
                        </div>
                        <div className="mt-3 w-full flex rounded-lg p-5 bg-white/10 items-center justify-between">
                            <div className="flex justify-center items-center gap-x-2 text-primary font-medium">
                                <div>
                                    TOTAL:
                                </div>
                                <div>
                                    {amount}
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-x-2 text-primary-light font-medium">
                                <div>
                                    PAGO:
                                </div>
                                <div>
                                    {amountPaid(persons)}
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-x-2 text-primary font-medium">
                                <div>
                                    RESTANTE:
                                </div>
                                <div>
                                    {amountRemaining(persons)}
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-4 select-none px-2 max-h-[570px] overflow-auto">
                            {data.map((item, index) => (
                                <>
                                    <Button disabled={item.quantity == 0} variant={"outline"} key={index} onClick={() => selectProduct(item)} className="flex cursor-pointer items-center justify-between hover:bg-white/10 rounded-lg border-0 bg-transparent py-7">
                                        <div className="flex gap-x-3 items-center">
                                            <div className="bg-primary w-8 h-8 flex justify-center items-center rounded-full">
                                                <div className="text-black text-lg font-semibold">
                                                    {item.quantity}
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-start justify-center">
                                                <div className="text-primary text-sm font-medium">
                                                    {item.productName}
                                                </div>
                                                <div className="text-primary-secundary text-xs font-light">
                                                    {item.category}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end justify-center">
                                            <div className="text-primary text-base font-semibold">{amountProduct(item.price, item.quantity.toString())}</div>
                                            <div className="text-primary-secundary text-xs font-light">{item.price}/Un</div>
                                        </div>
                                    </Button>
                                </>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col h-full w-[30%] p-3 bg-toast-background">
                        <div className="w-full flex bg-[#1e1e21] rounded-t-xl p-3 h-[400px] overflow-auto">
                            <Accordion type="single" collapsible className="w-full">
                                {persons.map((item, index) => (
                                    <AccordionItem key={index} onClick={() => setSelectedPerson(item)} value={item.id.toString()}>
                                        <AccordionTrigger className={"text-sm hover:no-underline flex justify-between w-full"}>
                                            <div className="flex flex-col items-start gap-y-1">
                                                <div>
                                                    {item.name}
                                                </div>
                                                <div className="text-xs font-light text-gray-400">
                                                    Total: {amountOrderForPerson(item.products)}
                                                </div>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="flex flex-col">
                                            {item.products.map((product, index) => (
                                                <div key={index} className="flex items-center justify-between">
                                                    <div className={`flex gap-x-2 ${index != 0 && "mt-3"}`}>
                                                        {
                                                            product.category != 'Divisão'
                                                                ?
                                                                <div onClick={() => decrementPersonProduct(product, item.id)} className="bg-primary group w-8 h-8 flex justify-center items-center group rounded-full">
                                                                    <div className="text-black text-lg group-hover:hidden font-semibold cursor-pointer">
                                                                        {product.quantity}
                                                                    </div>
                                                                    <div className="text-black text-lg group-hover:flex hidden font-semibold justify-center items-center">
                                                                        {
                                                                            product.quantity > 1
                                                                                ?
                                                                                <Minus size="20" color="#000" />
                                                                                :
                                                                                <X size="20" color="#000" />
                                                                        }
                                                                    </div>
                                                                </div>
                                                                :
                                                                <AlertDialog>
                                                                    <AlertDialogTrigger className="bg-primary group w-8 h-8 flex justify-center items-center group rounded-full">
                                                                        <div className="text-black text-lg group-hover:hidden font-semibold cursor-pointer">
                                                                            {product.quantity}
                                                                        </div>
                                                                        <div className="text-black text-lg group-hover:flex hidden font-semibold justify-center items-center">
                                                                            <X size="20" color="#000" />
                                                                        </div>
                                                                    </AlertDialogTrigger>
                                                                    <AlertDialogContent>
                                                                        <AlertDialogHeader>
                                                                            <AlertDialogTitle>Você tem certeza absoluta?</AlertDialogTitle>
                                                                            <AlertDialogDescription>
                                                                                Essa ação irá cancelar a divisão igualitaria dos itens retornando todos ao seu estado inicial.
                                                                            </AlertDialogDescription>
                                                                        </AlertDialogHeader>
                                                                        <AlertDialogFooter>
                                                                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                                                            <AlertDialogAction onClick={() => cancelDivision()}>Continuar</AlertDialogAction>
                                                                        </AlertDialogFooter>
                                                                    </AlertDialogContent>
                                                                </AlertDialog>
                                                        }
                                                        <div className="flex flex-col items-start justify-center">
                                                            <div className="text-primary text-sm font-medium whitespace-nowrap overflow-hidden truncate max-w-[160px]">
                                                                {product.productName}
                                                            </div>
                                                            <div className="text-primary-secundary text-xs font-light">
                                                                {product.category}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-primary text-base font-semibold mb-1">{amountProduct(product.price, product.quantity.toString())}</div>
                                                </div>
                                            ))}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        <div className="w-full flex bg-[#1e1e21] p-3 h-[65px] overflow-auto">
                            <div onClick={addNewPerson} className="w-full cursor-pointer border-dashed border-2 border-white/20 hover:border-white/50 group rounded-sm flex items-center justify-center">
                                <div className="font-medium text-sm group-hover:font-semibold select-none">
                                    Adicionar Pessoa
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#1e1e21]">
                            <div className="border-t-2 border-primary/10" />
                        </div>
                        <div className="w-full flex bg-[#1e1e21] h-[180px] flex-col justify-end p-5">
                            <div className="gap-y-1 flex flex-col">
                                <div className="w-full flex justify-between">
                                    <div>
                                        Taxas
                                    </div>
                                    <div className="text-sm font-light text-primary-secundary">
                                        R$ 00,00
                                    </div>
                                </div>
                                <div className="w-full flex justify-between">
                                    <div>
                                        Desconto
                                    </div>
                                    <div className="text-sm font-light text-primary-secundary">
                                        R$ 00,00
                                    </div>
                                </div>
                                <div className="w-full flex justify-between items-center">
                                    <div>
                                        Subtotal
                                    </div>
                                    <div className="text-sm font-light text-primary-secundary">
                                        {amount}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex flex-1 justify-between items-end">
                                <div className="text-xl font-bold">
                                    TOTAL
                                </div>
                                <div className="text-xl font-normal">
                                    {amount}
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 bg-primary rounded-b-xl p-3 h-[110px]">
                            <div className="text-black bg-primary flex flex-col gap-y-1 rounded-bl-xl justify-center group items-center cursor-pointer">
                                <Moneys size="45" color="#555555" variant="Bulk" />
                                <div className="text-xs font-normal text-primary-light">Dinheiro</div>
                            </div>
                            <div className="text-black bg-primary flex flex-col gap-y-1 group justify-center items-center cursor-pointer">
                                <Card size="45" color="#555555" variant="Bulk" />
                                <div className="text-xs font-normal text-primary-light">Cartão</div>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog >
    )
}

export default DialogSplit