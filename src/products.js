

const products = [
    {id: 1, name: 'Difusor de vidrio', price: '$1200', category: 'Aromas', img: '/assets/aroma1.jpeg' },
    {id: 2, name: 'Fanal Dorado', price: '$1100', category: 'Deco', img:'/assets/deco9.jpeg' },
    {id: 3, name: 'Espejo', price: '$1800', category: 'Espejos', img:'/assets/espejo2.jpeg' }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)

    })
}
