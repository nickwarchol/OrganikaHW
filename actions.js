export const addProductToCart = (product) => {
    return {
        type: "ADD_PRODUCT",
        payload: product,
    };
};