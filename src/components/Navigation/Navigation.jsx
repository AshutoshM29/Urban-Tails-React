import React from 'react';
import { Link } from "react-router-dom";
import { useAuth, useDataLayer } from "../../context";
import "./navigation.css";
import "../../pages/Homepage/homepage.css"
import { pawLogo, } from '../../assets/images'

const Navigation = () => {
  const { isAuthorized } = useAuth();
  const { setSearchTerm, searchTerm, state } = useDataLayer();

 return (
<nav className="nav-header nav-bar">
    <div className="nav-section">
        <div className="nav-section-items">
            <Link to="/">
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
            <Link to="/Product">
            <input
                className="search-bar-input"
                type="text"
                id="search-bar"
                placeholder="Type to search"
                name="search"
                onChange={(event) => setSearchTerm(event.target.value)}
                value={searchTerm}
            />
            </Link>
        </label>
        <ul className="nav-icons">
        {isAuthorized ? (
            <li className="list-inline-icons">
                <Link className="nav-icon-link" to="/profile">
                <span className="nav-icon">
                    <i className="fas fa-user"></i>
                </span>
                <span className="nav-icon-text">
                    Profile
                </span>
                </Link>
            </li>
        ) : (
            <li className="list-inline-icons">
                <Link className="nav-icon-link" to="/signup">
                <span className="nav-icon">
                    <i className="fas fa-user-plus"></i>
                </span>
                <span className="nav-icon-text">
                    Sign Up
                </span>
                </Link>
            </li>
            )}
            
            <li className="list-inline-icons">
                <Link className="nav-icon-link" to="/Wishlist">
                <span className="nav-icon">
                    <i className="fas fa-heart"></i>
                    {state.wishlistData && state.wishlistData.length > 0 ? (
                    <span className="badge-count bg-nav">
                      {state.wishlistData.length}
                    </span>
                  ) : (
                    ""
                  )}
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
                    {state.cartData && state.cartData.length > 0 ? (
                    <span className="badge-count bg-nav">
                      {state.cartData.length}
                    </span>
                  ) : (
                    ""
                  )}
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
};

export { Navigation };