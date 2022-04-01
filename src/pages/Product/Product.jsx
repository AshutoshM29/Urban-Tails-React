import { Sidebar } from "../../components/Sidebar/Sidebar"
import '../Product/product.css'
import { Link } from 'react-router-dom'
import {
  boneChew,
  dentastix,
  duoStick,
  mini,
  sara,
  yummy,
} from '../../assets/images'

function Product() {
return (
<main className="main-product">
  <Sidebar />
  <div className="section-card">
    <div className="container-card-head">
      <Link className="path" to="/Homepage">Home > </Link>
      <Link className="path" to="/Product">Dog Treats</Link>
      <h2>Dog Treats</h2>
    </div>
    <div className="container-card">
      <div className="card card-vertical">
        <div className="img-content">
          <p className="text-badge">Trending</p>
          <button className="btn-wishlist">
            <i className="fas fa-heart"></i>
          </button>
          <img className="card-vertical-img" src={boneChew} alt="t-shirt jpg" />
        </div>
        <h1 className="card-head">Dogsee Chew</h1>
        <p className="card-text">
          The perfect long-lasting dog chew sticks for puppies and small breed fluffies!
        </p>
        <div className="section-review">
          <small className="rating-oa">4.0 <i className="fas fa-star"></i></small>
          <p className="body-cp-xsm">8.6K reviews</p>
        </div>
        <div className="section-price">
          <span className="price">₹450</span>
          <span className="initial-price">₹2500</span>
          <span className="discount">(82%)</span>
        </div>

        <button className="btn btn-primary-outline">
          <i className="fas fa-shopping-bag"></i> Add to Bag
        </button>
        <button className="btn btn-primary-solid">
          <i className="fas fa-bolt"></i> Buy Now
        </button>
      </div>

      <div className="card card-vertical">
        <div className="img-content">
          <p className="text-badge">Best Seller</p>
          <button className="btn-wishlist">
            <i className="fas fa-heart"></i>
          </button>
          <img className="card-vertical-img" src={yummy} alt="t-shirt jpg" />
        </div>
        <h1 className="card-head">Apple & Banana Biscuits</h1>
        <p className="card-text">Made with real Apples & Bananas, free of Gluten & Artificial Flavours. Suitable
          for all Dogs
        </p>
        <div className="section-review">
          <small className="rating-oa">4.2 <i className="fas fa-star"></i></small>
          <p className="body-cp-xsm">6.2K reviews</p>
        </div>
        <div className="price-section">
          <span className="price">₹450</span>
          <span className="initial-price">₹2500</span>
          <span className="discount">(82%)</span>
        </div>
        <button className="btn btn-primary-outline">
          <i className="fas fa-shopping-bag"></i> Add to Bag
        </button>
        <button className="btn btn-primary-solid">
          <i className="fas fa-bolt"></i> Buy Now
        </button>
      </div>

      <div className="card card-vertical">
        <div className="img-content">
          <p className="text-badge">Few Left</p>
          <button className="btn-wishlist">
            <i className="fas fa-heart"></i>
          </button>
          <img className="card-vertical-img" src={dentastix} alt="t-shirt jpg" />
        </div>
        <h1 className="card-head">Duo Stick</h1>
        <p className="card-text">
          T-shirts for men feature three main neck styles: the round neck, the V-neck and the polo neck.
        </p>
        <div className="section-review">
          <small className="rating-oa">4.6 <i className="fas fa-star"></i></small>
          <p className="body-cp-xsm">12.3K reviews</p>
        </div>
        <div className="price-section">
          <span className="price">₹450</span>
          <span className="initial-price">₹2500</span>
          <span className="discount">(82%)</span>
        </div>
        <button className="btn btn-primary-outline">
          <i className="fas fa-shopping-bag"></i> Add to Bag
        </button>
        <button className="btn btn-primary-solid">
          <i className="fas fa-bolt"></i> Buy Now
        </button>
      </div>

      <div className="card card-vertical">
        <div className="img-content">
          <p className="text-badge">Trending</p>
          <button className="btn-wishlist">
            <i className="fas fa-heart"></i>
          </button>
          <img className="card-vertical-img" src={mini} alt="t-shirt jpg" />
        </div>
        <h1 className="card-head">T-Shirt Combo</h1>
        <p className="card-text">
          T-shirts for men feature three main neck styles: the round neck, the V-neck and the polo neck.
        </p>
        <div className="section-review">
          <small className="rating-oa">4.0 <i className="fas fa-star"></i></small>
          <p className="body-cp-xsm">8.6K reviews</p>
        </div>
        <div className="price-section">
          <span className="price">₹450</span>
          <span className="initial-price">₹2500</span>
          <span className="discount">(82%)</span>
        </div>
        <button className="btn btn-primary-outline">
          <i className="fas fa-shopping-bag"></i> Add to Bag
        </button>
        <button className="btn btn-primary-solid">
          <i className="fas fa-bolt"></i> Buy Now
        </button>
      </div>

      <div className="card card-vertical">
        <div className="img-content">
          <p className="text-badge">Trending</p>
          <button className="btn-wishlist">
            <i className="fas fa-heart"></i>
          </button>
          <img className="card-vertical-img" src={sara} alt="t-shirt jpg" />
        </div>
        <h1 className="card-head">T-Shirt Combo</h1>
        <p className="card-text">
          T-shirts for men feature three main neck styles: the round neck, the V-neck and the polo neck.
        </p>
        <div className="section-review">
          <small className="rating-oa">4.0 <i className="fas fa-star"></i></small>
          <p className="body-cp-xsm">8.6K reviews</p>
        </div>
        <div className="price-section">
          <span className="price">₹450</span>
          <span className="initial-price">₹2500</span>
          <span className="discount">(82%)</span>
        </div>
        <button className="btn btn-primary-outline">
          <i className="fas fa-shopping-bag"></i> Add to Bag
        </button>
        <button className="btn btn-primary-solid">
          <i className="fas fa-bolt"></i> Buy Now
        </button>
      </div>

      <div className="card card-vertical">
        <div className="img-content">
          <p className="text-badge">Trending</p>
          <button className="btn-wishlist">
            <i className="fas fa-heart"></i>
          </button>
          <img className="card-vertical-img" src={duoStick} alt="t-shirt jpg" />
        </div>
        <h1 className="card-head">T-Shirt Combo</h1>
        <p className="card-text">
          T-shirts for men feature three main neck styles: the round neck, the V-neck and the polo neck.
        </p>
        <div className="section-review">
          <small className="rating-oa">4.0 <i className="fas fa-star"></i></small>
          <p className="body-cp-xsm">8.6K reviews</p>
        </div>
        <div className="price-section">
          <span className="price">₹450</span>
          <span className="initial-price">₹2500</span>
          <span className="discount">(82%)</span>
        </div>
        <button className="btn btn-primary-outline">
          <i className="fas fa-shopping-bag"></i> Add to Bag
        </button>
        <button className="btn btn-primary-solid">
          <i className="fas fa-bolt"></i> Buy Now
        </button>
      </div>
    </div>
  </div>

</main>
)
}

export {Product}