function clearFilterHandler(dispatch) {
dispatch({ type: "clear" })
}

function discountHandler(e,dispatch) {
dispatch({ type: "discount", payload: e.target.value })
}

function rating4Handler(dispatch) {
dispatch({ type: "rating4", payload: "rating4" })
}
    
function rating3Handler(dispatch) {
dispatch({ type: "rating3", payload: "rating3" })
}
    
function rating2Handler(dispatch) {
dispatch({ type: "rating2", payload: "rating2" })
}
    
function rating1Handler(dispatch) {
dispatch({ type: "rating1", payload: "rating1" })
}

function sortByCategoryHandler(e, dispatch) {
dispatch({ type: "sort", payload: e.target.value })
}

function priceHighToLowHandler(dispatch) {
dispatch({ type: "price_sort", payload: "low-2-high" })
}

function priceLowToHighHandler(dispatch) {
dispatch({ type: "price_sort", payload: "high-2-low" })
}

export {
clearFilterHandler, discountHandler, priceHighToLowHandler, priceLowToHighHandler, sortByCategoryHandler,
 rating4Handler, rating3Handler, rating2Handler, rating1Handler
}