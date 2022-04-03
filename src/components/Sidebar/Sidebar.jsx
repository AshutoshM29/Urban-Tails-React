import './sidebar.css'
import { useState } from "react";
import { clearFilterHandler, discountHandler, priceHighToLowHandler, priceLowToHighHandler, priceSortHandler, sortByCategoryHandler, stars1Handler, stars2Handler, stars3Handler, stars4Handler, useSortedProduct } from "../../hooks/Filters/filter";

export const Sidebar = () => {
    const { state,dispatch } = useSortedProduct();
    return (<aside className="section-filter">

        <div className="flex">
            <h3 className="header-filter">Filter</h3>
            <label className="switch">
                <input onClick={()=>clearFilterHandler(dispatch)} type="checkbox" />
                <span className="slider round"></span>
            </label>
        </div>
        <br/>
        
                <h4 className="sub-header-filter">Price</h4>

                    <input
                        className="slider-custom"
                        step="50"
                        type="range"
                        min="99"
                        max="999"
                        list="tickmarks"
                        checked={state.discountValue}
                        onClick={(e)=>discountHandler(e,dispatch)}
                    />
                    <datalist id="tickmarks">
                        <option value="99">99</option>
                        <option value="499">499</option>
                        <option value="999">999</option>
                    </datalist>
                    <label className="price-range">
                        <span id="price-max">₹99</span>
                        <span id="price-min">₹499</span>
                        <span id="price-mid">₹999</span>
                    </label>
                    <br/>
                    <hr/>

                    <h4 className="sub-header-filter">Brand</h4>

                    <div className='checkbox'>
                        <input className="input-checkbox" type="checkbox"
                            checked={state.stars4}
                            onClick={()=>stars4Handler(dispatch)}
                        />
                        <label className="input-desc">Petmate</label>
                    </div>
                    <div className='checkbox'>
                        <input className="input-checkbox" type="checkbox"
                            checked={state.stars3}
                            onClick={()=>stars3Handler(dispatch)}
                        />
                        <label className="input-desc">Purina</label>
                    </div>
                    <div className='checkbox'>
                        <input className="input-checkbox" type="checkbox"
                            checked={state.stars2}
                            onClick={()=>stars2Handler(dispatch)}
                        />
                        <label className="input-desc">Kong</label>
                    </div>
                    <div className='checkbox'>
                        <input className="input-checkbox" type="checkbox"
                            checked={state.stars1}
                            onClick={()=>stars1Handler(dispatch)}
                        />
                        <label className="input-desc">Bayer</label>
                    </div>
                    <div className='checkbox'>
                        <input className="input-checkbox" type="checkbox"
                            checked={state.stars1}
                            onClick={()=>stars1Handler(dispatch)}
                        />
                        <label className="input-desc">Ruffwear</label>
                    </div>

                    <br/>
                    <hr/>

                    <h4 className="sub-header-filter">Ratings</h4>
                    <div className='checkbox'>
                        <input
                            className="input-checkbox"
                            type="checkbox"
                            checked={state.stars4}
                            onClick={()=>stars4Handler(dispatch)}
                        />
                        <label className="input-desc">4 Stars & above</label>
                    </div>
                    <div className='checkbox'>
                        <input
                            className="input-checkbox"
                            type="checkbox"
                            checked={state.stars3}
                            onClick={()=>stars3Handler(dispatch)}
                        />
                        <label className="input-desc">3 Stars & above</label>
                    </div>
                    <div className='checkbox'>
                        <input
                            className="input-checkbox"
                            type="checkbox"
                            checked={state.stars2}
                            onClick={()=>stars2Handler(dispatch)}
                        />
                        <label className="input-desc">2 Stars & above</label>
                    </div>
                    <div className='checkbox'>
                        <input
                            className="input-checkbox"
                            type="checkbox"
                            checked={state.stars1}
                            onClick={()=>stars1Handler(dispatch)}
                        />
                        <label className="input-desc">1 Stars & above</label>
                    </div>
                    <br/>
                    <hr/>

                    <h4 className="sub-header-filter">Life Stages</h4>
                    <div className="radio">
                        <input
                            type="radio" id="men"
                            name="category"
                            value="men-clothing"
                            checked={state.sortBy === "men-clothing"}
                            onClick={(e)=>sortByCategoryHandler(e,dispatch)}
                        />
                        <label className="input-desc" htmlFor="puppy">Puppy</label>
                    </div>
                    <div className="radio">
                        <input  
                            type="radio" id="footwear"
                            name="category"
                            value="footwear"
                            checked={state.sortBy === "footwear"}
                            onClick={(e)=>sortByCategoryHandler(e,dispatch)}
                        />
                        <label className="input-desc" htmlFor="adult">Adult</label>
                    </div>
                    <div className="radio">
                        <input 
                            type="radio"
                            id="bags"
                            name="category"
                            value="bagpack"
                            checked={state.sortBy === "bagpack"}
                            onClick={(e)=>sortByCategoryHandler(e,dispatch)}
                        />
                        <label className="input-desc" htmlFor="senior">Senior</label>
                    </div>
                    <br/>
                    <hr/>

                <h4 className="sub-header-filter">Sort Price</h4>
                    <div className="radio">
                        <input
                            type="radio"
                            id="price_sort"
                            name="price_sort"
                            value="price_sort"
                            checked={state.priceHighLow === "low_to_high"}
                            onClick={()=>priceHighToLowHandler(dispatch)}
                        />
                        <label className="input-desc" htmlFor="price_sort">Low to high</label>
                    </div>
                    <div className="radio">
                        <input
                            type="radio" id="price_sort"
                            name="price_sort"
                            value="price_sort"
                            checked={state.priceHighLow === "high_to_low"}
                            onClick={()=>priceLowToHighHandler(dispatch)}
                        />
                        <label className="input-desc" htmlFor="footwear">High to low</label>
                    </div>

                <br/>
    </aside>)
}
