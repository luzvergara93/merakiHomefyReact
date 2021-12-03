const products = [
    {id: 1, name: 'Difusor Erika', price: '$1200', category: 'Aromas', img: '/assets/aroma1.jpeg', description: 'Difusor de vidrio con tapa de madera' },
    {id: 2, name: 'Fanal Candela', price: '$1100', category: 'Deco', img:'/assets/deco9.jpeg', description: 'Fanal dorado con vela interna aroma vainilla' },
    {id: 3, name: 'Espejo Lucila', price: '$1800', category: 'Espejos', img:'/assets/espejo2.jpeg', description: 'Espejo con bordes plateados en hierro'}
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
