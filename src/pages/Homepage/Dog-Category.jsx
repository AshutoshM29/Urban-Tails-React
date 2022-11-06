import React from 'react';
import { useCategory } from "../../hooks/useCategory";
import { useNavigate } from "react-router-dom";
import { useDataLayer } from "../../context";
import { useEffect } from "react";
import "./Homepage.css"


const Categories=()=>{
const {categories}=useCategory();
const currentLocation = useNavigate();
    const { getListOfProducts } = useDataLayer();
  
    useEffect(() => {
      getListOfProducts();
    }, []);

return ( <div className="section-category">
    { categories.map((categories)=>{
    return (
    <button className="btn-product" onClick={() => currentLocation("/Product")}>
        <img className="img-category" src={`${categories.categoryImageDog}`} alt={`${categories.categoryName}`} />
        <p className="desc-category">{categories.titleDog}</p>
    </button>
    )
    })
    }
</div>
)
}
export {Categories}