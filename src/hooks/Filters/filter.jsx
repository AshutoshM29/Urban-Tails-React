export { reducerFunction } from "./reducer-function"
export { filterProducts } from "./category-filter"
export { starredProducts } from "./rating-filter"
export { pricedProducts } from "./price-filter"
export { discountedItems } from "./discount-price-filter"
export { SortedProducts } from "./sort-price-filter"
export { useSortedProduct } from "../../context/product-context"
export {
    clearFilterHandler,
    discountHandler,
    priceHighToLowHandler,
    priceLowToHighHandler,
    sortByCategoryHandler,
    rating4Handler,
    rating3Handler,
    rating2Handler,
    rating1Handler
} from "./filter-complete"