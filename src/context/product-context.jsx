import { createContext, useReducer, useContext } from "react";
import { useProducts } from "../hooks/hooks";
import { filterProducts } from "../hooks/Filters/category-filter";
import { discountedItems } from "../hooks/Filters/discount-price-filter";
import { pricedProducts } from "../hooks/Filters/price-filter";
import { reducerFunction } from "../hooks/Filters/reducer-function";
import { SortedProducts } from "../hooks/Filters/sort-price-filter";
import { starredProducts } from "../hooks/Filters/rating-filter";

const reducerValues = {
    sortBy: null,
    priceSelector: null,
    discountValue: 0,
    priceHighLow: null,
    stars1: false,
    stars2: false,
    stars3: false,
    stars4: false
}
const ProudctContext = createContext();
export const useSortedProduct = () => useContext(ProudctContext)
export function ProductProvider({ children }) {
    const [state, dispatch] = useReducer(reducerFunction, reducerValues)
    const { products } = useProducts()
    const filteredProducts = filterProducts(products, state.sortBy)
    const starProducts = starredProducts(filteredProducts, state)
    const priceProducts = pricedProducts(starProducts, state.priceSelector)
    const discountItems = discountedItems(priceProducts, state.discountValue)
    const sortPriceHighLow = SortedProducts(discountItems, state.priceHighLow)

    return <ProudctContext.Provider value={{ state, dispatch, sortPriceHighLow }}>
        {children}
    </ProudctContext.Provider>
}