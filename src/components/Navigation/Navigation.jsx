import { Link } from 'react-router-dom'
import { useCartContext, useWishListContext} from "../../context/context";
import "./navigation.css"
import {
pawLogo,
} from '../../assets/images'

function Navigation() {
    const {state}=useCartContext()
    const {wishListState}=useWishListContext();
return (
<nav className="nav-header nav-bar">
    <div className="nav-section">
        <div className="nav-section-items">
            <Link to="/Homepage">
            <img className="nav-logo" loading="eager" src={pawLogo} alt="Logo" />
            </Link>
        </div>
        <ul className="nav-bar-links nav-section-items">
            <li className="list-inline-item">
                <a className="link" href="/dog">Dog</a>
            </li>
            <li className="list-inline-item">
                <a className="link" href="/cat">Cat</a>
            </li>
            <li className="list-inline-item">
                <a className="link" href="/grooming">Grooming</a>
            </li>
            <li className="list-inline-item">
                <a className="link" href="/small-animal">Small Pets</a>
            </li>
            <li className="list-inline-item">
                <a className="link" href="/brands">Brands</a>
            </li>
        </ul>
    </div>
    <div className="nav-section">
        <label className="search-bar">
            <span className="search-bar-btn" type="submit">
                <i className="fa fa-search"></i>
            </span>
            <input className="search-bar-input" type="text" placeholder="Type to search" name="search"></input>
        </label>
        <ul className="nav-icons">
            <li className="list-inline-icons">
                <Link className="nav-icon-link" to="/Signup">
                <span className="nav-icon">
                    <i className="fas fa-user-plus"></i>
                </span>
                <span className="nav-icon-text">
                    Sign Up
                </span>
                </Link>
            </li>
            <li className="list-inline-icons">
                <Link className="nav-icon-link" to="/">
                <span className="nav-icon">
                    <i className="fas fa-user"></i>
                </span>
                <span className="nav-icon-text">
                    Profile
                </span>
                </Link>
            </li>
            <li className="list-inline-icons">
                <Link className="nav-icon-link" to="/Wishlist">
                <span className="nav-icon">
                    <i className="fas fa-heart"></i>
                    <span className="badge-count bg-nav">{wishListState.wishCount}</span>
                </span>
                <span className="nav-icon-text">
                    Wishlist
                </span>
                </Link>
            </li>
            <li className="list-inline-icons">
                <Link className="nav-icon-link" to="/Cart">
                <span className="nav-icon">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge-count bg-nav">{state.cartCount}</span>
                </span>
                <span className="nav-icon-text">
                    Bag
                </span>
                </Link>
            </li>
        </ul>
    </div>
</nav>
)
}

export {Navigation}