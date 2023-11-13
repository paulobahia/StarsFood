import { ProductsInvoice } from "@/app/(main)/orders/paid-invoice/components/PaidInvoiceTable/columns";

export function formatarData(dataString: string) {
    const data = new Date(dataString);
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const horas = data.getHours().toString().padStart(2, '0');
    const minutos = data.getMinutes().toString().padStart(2, '0');

    return `${dia}/${mes} ${horas}:${minutos}`;
}

export function amountProduct(price: string, quantity: string) {
    const parsePrice = parseFloat(price.replace('R$', '').replace(',', '.'));
    const amount = parsePrice * parseFloat(quantity)
    return amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export function amountOrder(products: ProductsInvoice[]) {

    const total = products.reduce((accumulator, product) => {
        const price = parseFloat(product.price.replace('R$', '').replace(',', '.'));
        const subtotal = price * product.quantity;
        return accumulator + subtotal;
    }, 0);

    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
