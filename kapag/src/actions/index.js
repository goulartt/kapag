export const addProduct = product => ({
    type: 'ADD_PRODUCT',
    product
})

export const getAllProducts = () => ({
    type: 'GET_PRODUCTS'
})


export const deleteProduct = barcode => ({
    type: 'DELETE_PRODUCT',
    barcode
})

