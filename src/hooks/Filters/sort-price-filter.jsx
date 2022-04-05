export function SortedProducts(product, sort) {
    if (sort === "low-2-high") {
        return product.sort((a, b) => {
            return (a.price - b.price);
        })
    }
    if (sort === "high-2-low") {
        return product.sort((a, b) => {
            return (b.price - a.price);
        })
    }
    return product
}