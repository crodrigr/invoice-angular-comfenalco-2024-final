import { Invoice } from "../models/invoice";

export const invoiceData: any = {

    id: 1,
    descripcion: 'Componentes de PC',
    client: {
        name: 'Andres',
        lastName: 'Doe',
        address: 'USA,Los Angeles,One Street'            
        },    
    items: [
        {
            id: 1,
            product: 'Cpu Intel i9',
            price: 599,
            quantity: 1
        },
        {
            id: 2,
            product: 'Corsair Teclado Mecanico',
            price: 399,
            quantity: 2
        },
        {
            id: 3,
            product: 'Monitor Asus',
            price: 899,
            quantity: 3
        },
    ]
}