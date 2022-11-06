export function wishReducerFunction(state, action) {

    switch (action.type) {
        case "wishlist":
            let productInWishList = false;
            let updatedWishList = state.wishItems.map((items) => {
                if (action.payload.id === items.id) {
                    productInWishList = true;
                    return items;
                }
                return items;
            })
            const { id, title, rating, initialPrice, img, price, discountedPrice } = action.payload
            if (!productInWishList) {
                updatedWishList = [...state.wishItems, action.payload]
                return { ...state, wishCount: state.wishCount + 1, wishItems: updatedWishList, inWishlist: true }
            }

            return { ...state }
        case "remove":

            const removedItems = state.wishItems.filter((items) => {
                if (items.id === action.payload.id) {
                    return action.payload !== items
                }
                return items
            })
            return { ...state, wishItems: removedItems, wishCount: state.wishCount - 1, addToWishListMessage: false, inWishlist: false }
        default:
            return { ...state }
    }
}

export function wishListHandler(product, wishListState, wishDispatch) {
    let addToWishListMessage = false;
    wishListState.wishItems.some((items) => {
        if (items.id === product.id) {
            addToWishListMessage = true;
            wishDispatch({ type: "remove", payload: items })
        }

    })
    if (!addToWishListMessage) {
        wishDispatch({ type: "wishlist", payload: product })
    }
}