// reducer: an arrow fn that receives state and action
// should return a  NEW state

const cartReducer = (state = [], action) => {
    switch (action.type)    //"switch" is like an if, else if, etc
    {
        case 'ADD_PRODUCT': 
            var copy = [...state];

            /*

                PLZ I DONT GET THIS I WILL ASK NEXT CLASS

            * if this product id (action.payload.product.id) does not exist inside the cart
            *  then add id
            * but if it exist (there is a product on the cart with the same product id),
            * then, just increase the quantity of the product in the cart
            * 
            * FOR each item inside copy
            *       if(action.payload.product.id === item.product.id)
            *           increase item.quantity
            *       else
            *           push the product to copy
            */
            
            copy.push(action.payload);
            return copy;

        case 'REMOVE_PRODUCT': 
        //here
        break;

        default:
            return state;
    }
};   

export default cartReducer;