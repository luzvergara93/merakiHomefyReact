const products = [
    {id: 1, name: 'Difusor Erika', price: '$1200', category: 'Aromas', img: '/assets/aromas/aroma1.jpeg', description: 'Difusor de vidrio con tapa de madera', stock: 14 },
    {id: 2, name: 'Perfumina Tilo', price: '$800', category: 'Aromas', img: '/assets/aromas/aroma3.jpeg', description: 'Perfumina aroma Tilo, sin alcohol ', stock: 12 },
    {id: 3, name: 'Fanal Candela', price: '$1100', category: 'Deco', img:'/assets/deco/deco9.jpeg', description: 'Fanal dorado con vela interna aroma vainilla', stock: 30 },
    {id: 4, name: 'Espejo Lucila', price: '$1800', category: 'Espejos', img:'/assets/espejos/espejo2.jpeg', description: 'Espejo con bordes plateados en hierro', stock: 9},
    {id: 5, name: 'Espejo Flor', price: '$1200', category: 'Espejos', img:'/assets/espejos/espejo1.jpeg', description: 'Espejo con diseño de mimbre en forma de flor', stock: 10},
    {id: 6, name: 'Repuesto Organic', price: '$600', category: 'Aromas', img: '/assets/aromas/aroma5.jpeg', description: 'Respuesto para difusor en varios aromas' , stock: 40},
    {id: 7, name: 'Vela Mary', price: '$400', category: 'Aromas', img: '/assets/aromas/aroma10.jpeg', description: 'Vela aromatica de vainilla' , stock: 24},
    {id: 8, name: 'Portacubiertos Sally', price: '$800', category: 'Deco', img:'/assets/deco/deco2.jpeg', description: 'Portacubiertos simil marmol' , stock: 18},
    {id: 9, name: 'Portarretratos Dora', price: '$1100', category: 'Deco', img:'/assets/deco/deco9.jpeg', description: 'Portarretratos metalico de 20 x 40cm ' , stock: 12},
    {id: 10, name: 'Caja de Te Isabel', price: '$1200', category: 'Deco', img:'/assets/deco/deco7.jpeg', description: 'Caja de te con 3 compartimientos y tapa de vidrio' , stock: 14},
    {id: 11, name: 'Bandeja Rocio', price: '$800', category: 'Deco', img:'/assets/deco/deco3.jpeg', description: 'Bandeja simil marmol de 30 x 20 cm', stock: 17 },
    {id: 12, name: 'Espejo Sonia', price: '$2100', category: 'Espejos', img:'/assets/espejos/espejo3.jpeg', description: 'Espejo redondo con borde blanco', stock: 12},
    {id: 13, name: 'Set Espejos Sol', price: '$2800', category: 'Espejos', img:'/assets/espejos/espejo4.jpeg', description: 'Set X2 espejos con detalles en mimbre', stock: 8},
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)

    })
}

export const getItem = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products[1])
        }, 3000)

    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        const product = products.find(prod => parseInt(prod.id) === parseInt(id))
        setTimeout(() => resolve(product), 1000)
    })
}

export const getProductByCategory = (category) => {
    return new Promise((resolve, reject) => {
        const product = products.filter(prod => prod.category === category)
        setTimeout(() => resolve(product), 2000)
    })
}