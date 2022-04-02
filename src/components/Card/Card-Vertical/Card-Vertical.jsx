import { Link } from "react-router-dom";
import { useProducts } from "../../../hooks/useProducts";
import "../../../pages/Product/product.css"
const Cards=()=>{
const {products}=useProducts();

return ( <div className="container-card">
    { products.map((products)=>{
    return (
    <div className="card card-vertical">
        <div className="img-content">
            <p className="text-badge">{products.textBadge}</p>
            <button className="btn-wishlist">
                <i className="fas fa-heart"></i>
            </button>
            <img className="card-vertical-img" src={`${products.img}`} alt={`${products.categoryName}`} />
        </div>
        <h1 className="card-head">{products.title}</h1>
        <p className="card-text">
            {products.productDesc}
        </p>
        <div className="section-review">
            <small className="rating-oa">{products.rating}<i className="fas fa-star"></i></small>
            <p className="body-cp-xsm">{products.reviews}</p>
        </div>
        <div className="section-price">
            <span className="price">{products.price}</span>
            <span className="initial-price">{products.initialPrice}</span>
            <span className="discount">{products.discount}</span>
        </div>
        <button className="btn btn-primary-outline">
            <i className="fas fa-shopping-bag"></i> Add to Bag
        </button>
        <button className="btn btn-primary-solid">
            <i className="fas fa-bolt"></i> Buy Now
        </button>
    </div>
    )
    })
    }
</div>
)
}
export {Cards}