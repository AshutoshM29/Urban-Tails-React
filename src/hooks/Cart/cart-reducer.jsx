export function reducerFunction(state, action) {
    switch (action.type) {
        case "addItemHandler":
         
            let productPresent = false
            const { id, title, price, img, rating, initialPrice, discountedPrice } = action.payload;
            let updatedItems = state.cartItems.map((items) => {
            });
            if (!productPresent) {
                updatedItems = [...state.cartItems, { id, title, price, img, rating, initialPrice, discountedPrice, quantity: 1 }]

            }
            return {
                ...state, cartCount: state.cartCount + 1, cartItems: updatedItems, totalPrice: state.totalPrice + action.payload.price

            }

        case "increaseCountHandler":
            let increasedItems = state.cartItems.map((product) => {

                if (product.id === action.payload.id) {
                    return { ...product, quantity: action.payload.quantity + 1 }
                }
                return product
            })
            return {
                ...state, cartCount: state.cartCount + 1, cartItems: increasedItems, totalPrice: state.totalPrice + action.payload.price
            }
        case "decreaseCountHandler":
            let decreasedItems = state.cartItems.map((product) => {
                if (product.id === action.payload.id) {
                    return { ...product, quantity: action.payload.quantity - 1 }
                }
                return product
            })
            return {
                ...state, cartCount: state.cartCount - 1, cartItems: decreasedItems, totalPrice: state.totalPrice - action.payload.price
            }
        case "deleteItemHandler":

            const deletedItems = state.cartItems.filter((product) => {
                if (product.id === action.payload.id) {
                    return product !== action.payload
                }
                return product

            })
            return { ...state, cartCount: state.cartCount - action.payload.quantity, cartItems: deletedItems, totalPrice: state.totalPrice - (action.payload.quantity * action.payload.price) }



        default:
            return state;
    }
}