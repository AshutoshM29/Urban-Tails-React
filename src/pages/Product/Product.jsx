import { Filter } from "../../components/Filter/Filter"
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
  <Filter />
  <div class="section-card">
    <div class="container-card-head">
      <Link class="path" to="/Homepage">Home > </Link>
      <Link class="path" to="/Product">Dog Treats</Link>
      <h2>Dog Treats</h2>
    </div>
    <div class="container-card">
      <div class="card card-vertical">
        <div class="img-content">
          <p class="text-badge">Trending</p>
          <button class="btn-wishlist">
            <i class="fas fa-heart"></i>
          </button>
          <img class="card-vertical-img" src={boneChew} alt="t-shirt jpg" />
        </div>
        <h1 class="card-head">Dogsee Chew</h1>
        <p class="card-text">
          The perfect long-lasting dog chew sticks for puppies and small breed fluffies!
        </p>
        <div class="section-review">
          <small class="rating-oa">4.0 <i class="fas fa-star"></i></small>
          <p class="body-cp-xsm">8.6K reviews</p>
        </div>
        <div class="section-price">
          <span class="price">₹450</span>
          <span class="initial-price">₹2500</span>
          <span class="discount">(82%)</span>
        </div>

        <button class="btn btn-primary-outline">
          <i class="fas fa-shopping-bag"></i> Add to Bag
        </button>
        <button class="btn btn-primary-solid">
          <i class="fas fa-bolt"></i> Buy Now
        </button>
      </div>

      <div class="card card-vertical">
        <div class="img-content">
          <p class="text-badge">Best Seller</p>
          <button class="btn-wishlist">
            <i class="fas fa-heart"></i>
          </button>
          <img class="card-vertical-img" src={yummy} alt="t-shirt jpg" />
        </div>
        <h1 class="card-head">Apple & Banana Biscuits</h1>
        <p class="card-text">Made with real Apples & Bananas, free of Gluten & Artificial Flavours. Suitable
          for all Dogs
        </p>
        <div class="section-review">
          <small class="rating-oa">4.2 <i class="fas fa-star"></i></small>
          <p class="body-cp-xsm">6.2K reviews</p>
        </div>
        <div class="price-section">
          <span class="price">₹450</span>
          <span class="initial-price">₹2500</span>
          <span class="discount">(82%)</span>
        </div>
        <button class="btn btn-primary-outline">
          <i class="fas fa-shopping-bag"></i> Add to Bag
        </button>
        <button class="btn btn-primary-solid">
          <i class="fas fa-bolt"></i> Buy Now
        </button>
      </div>

      <div class="card card-vertical">
        <div class="img-content">
          <p class="text-badge">Few Left</p>
          <button class="btn-wishlist">
            <i class="fas fa-heart"></i>
          </button>
          <img class="card-vertical-img" src={dentastix} alt="t-shirt jpg" />
        </div>
        <h1 class="card-head">Duo Stick</h1>
        <p class="card-text">
          T-shirts for men feature three main neck styles: the round neck, the V-neck and the polo neck.
        </p>
        <div class="section-review">
          <small class="rating-oa">4.6 <i class="fas fa-star"></i></small>
          <p class="body-cp-xsm">12.3K reviews</p>
        </div>
        <div class="price-section">
          <span class="price">₹450</span>
          <span class="initial-price">₹2500</span>
          <span class="discount">(82%)</span>
        </div>
        <button class="btn btn-primary-outline">
          <i class="fas fa-shopping-bag"></i> Add to Bag
        </button>
        <button class="btn btn-primary-solid">
          <i class="fas fa-bolt"></i> Buy Now
        </button>
      </div>

      <div class="card card-vertical">
        <div class="img-content">
          <p class="text-badge">Trending</p>
          <button class="btn-wishlist">
            <i class="fas fa-heart"></i>
          </button>
          <img class="card-vertical-img" src={mini} alt="t-shirt jpg" />
        </div>
        <h1 class="card-head">T-Shirt Combo</h1>
        <p class="card-text">
          T-shirts for men feature three main neck styles: the round neck, the V-neck and the polo neck.
        </p>
        <div class="section-review">
          <small class="rating-oa">4.0 <i class="fas fa-star"></i></small>
          <p class="body-cp-xsm">8.6K reviews</p>
        </div>
        <div class="price-section">
          <span class="price">₹450</span>
          <span class="initial-price">₹2500</span>
          <span class="discount">(82%)</span>
        </div>
        <button class="btn btn-primary-outline">
          <i class="fas fa-shopping-bag"></i> Add to Bag
        </button>
        <button class="btn btn-primary-solid">
          <i class="fas fa-bolt"></i> Buy Now
        </button>
      </div>

      <div class="card card-vertical">
        <div class="img-content">
          <p class="text-badge">Trending</p>
          <button class="btn-wishlist">
            <i class="fas fa-heart"></i>
          </button>
          <img class="card-vertical-img" src={sara} alt="t-shirt jpg" />
        </div>
        <h1 class="card-head">T-Shirt Combo</h1>
        <p class="card-text">
          T-shirts for men feature three main neck styles: the round neck, the V-neck and the polo neck.
        </p>
        <div class="section-review">
          <small class="rating-oa">4.0 <i class="fas fa-star"></i></small>
          <p class="body-cp-xsm">8.6K reviews</p>
        </div>
        <div class="price-section">
          <span class="price">₹450</span>
          <span class="initial-price">₹2500</span>
          <span class="discount">(82%)</span>
        </div>
        <button class="btn btn-primary-outline">
          <i class="fas fa-shopping-bag"></i> Add to Bag
        </button>
        <button class="btn btn-primary-solid">
          <i class="fas fa-bolt"></i> Buy Now
        </button>
      </div>

      <div class="card card-vertical">
        <div class="img-content">
          <p class="text-badge">Trending</p>
          <button class="btn-wishlist">
            <i class="fas fa-heart"></i>
          </button>
          <img class="card-vertical-img" src={duoStick} alt="t-shirt jpg" />
        </div>
        <h1 class="card-head">T-Shirt Combo</h1>
        <p class="card-text">
          T-shirts for men feature three main neck styles: the round neck, the V-neck and the polo neck.
        </p>
        <div class="section-review">
          <small class="rating-oa">4.0 <i class="fas fa-star"></i></small>
          <p class="body-cp-xsm">8.6K reviews</p>
        </div>
        <div class="price-section">
          <span class="price">₹450</span>
          <span class="initial-price">₹2500</span>
          <span class="discount">(82%)</span>
        </div>
        <button class="btn btn-primary-outline">
          <i class="fas fa-shopping-bag"></i> Add to Bag
        </button>
        <button class="btn btn-primary-solid">
          <i class="fas fa-bolt"></i> Buy Now
        </button>
      </div>
    </div>
  </div>

</main>
)
}

export {Product}