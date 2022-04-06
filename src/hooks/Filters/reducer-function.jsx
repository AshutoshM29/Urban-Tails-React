export function reducerFunction(state, action) {
    switch (action.type) {
        case "sort":
            return { ...state, sortBy: action.payload }
        case "rating1":

            return { ...state, rating1: !state.rating1 }
        case "rating2":

            return { ...state, rating2: !state.rating2 }
        case "rating3":

            return { ...state, rating3: !state.rating3 }
        case "rating4":

            return { ...state, rating4: !state.rating4 }
        case "price":

            return { ...state, priceSelector: action.payload }
        case "discount":
       
            return { ...state, discountValue: action.payload }
        case "clear":
            return {
                ...state,
                sortBy: null,
                discountValue: 0,
                priceHighLow: null,
                rating1: false,
                rating2: false,
                rating3: false,
                rating4: false,
                
            }
        case "price_sort":
            return { ...state, priceHighLow: action.payload }

        default:
            return state
    }
}