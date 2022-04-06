import { createContext, useReducer, useContext } from "react";
import { useProducts } from "../hooks/hooks";
import { filterProducts,
         discountedPrice,
         pricedProducts,
         reducerFunction,
         SortedProducts,
         starredProducts} from "../hooks/Filters/filter";

const reducerValues = {
    sortBy: null,
    discountValue: 0,
    priceHighLow: null,
    rating1: false,
    rating2: false,
    rating3: false,
    rating4: false
}
const ProudctContext = createContext();
export const useSortedProduct = () => useContext(ProudctContext)
export function ProductProvider({ children }) {
    const [state, dispatch] = useReducer(reducerFunction, reducerValues)
    const { products } = useProducts()
    const filteredProducts = filterProducts(products, state.sortBy)
    const starProducts = starredProducts(filteredProducts, state)
    const priceProducts = pricedProducts(starProducts, state.priceSelector)
    const discountItems = discountedPrice(priceProducts, state.discountValue)
    const sortPriceHighLow = SortedProducts(discountItems, state.priceHighLow)

    return <ProudctContext.Provider value={{ state, dispatch, sortPriceHighLow }}>
        {children}
    </ProudctContext.Provider>
}