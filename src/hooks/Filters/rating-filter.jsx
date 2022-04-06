export const ratingProducts = (SortedProducts, { rating1, rating2, rating3, rating4 }) => {

    if (rating1) {
        return SortedProducts.filter (items => {
            return (items.rating >= 1);
        })
    }
    if (rating2) {
        return SortedProducts.filter (items => {
            return (items.rating >= 2);
        })
    }
    if (rating3) {
        return SortedProducts.filter (items => {
            return (items.rating >= 3);
        })
    }
    if (rating4) {
        return SortedProducts.filter (({ rating }) => {
            return (rating >= 4);
        })
    }

    return SortedProducts
}