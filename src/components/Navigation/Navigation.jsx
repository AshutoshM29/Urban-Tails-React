import {
pawLogo,
} from '../../assets/images'

function Navigation() {
return (
<nav className="nav-header nav-bar">
    <div className="nav-section">
        <div className="nav-section-items">
            <a href="/index.html">
                <img className="nav-logo" loading="eager" src={pawLogo} alt="Logo" />
            </a>
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
                <a className="nav-icon-link" href="/Pages/signup.html">
                    <span className="nav-icon">
                        <i className="fas fa-user-plus"></i>
                    </span>
                    <span className="nav-icon-text">
                        Sign Up
                    </span>
                </a>
            </li>
            <li className="list-inline-icons">
                <a className="nav-icon-link">
                    <span className="nav-icon">
                        <i className="fas fa-user"></i>
                    </span>
                    <span className="nav-icon-text">
                        Profile
                    </span>
                </a>
            </li>
            <li className="list-inline-icons">
                <a className="nav-icon-link" href="/Pages/wishlist.html">
                    <span className="nav-icon">
                        <i className="fas fa-heart"></i>
                    </span>
                    <span className="nav-icon-text">
                        Wishlist
                    </span>
                </a>
            </li>
            <li className="list-inline-icons">
                <a className="nav-icon-link" href="/Pages/bag.html">
                    <span className="nav-icon">
                        <i className="fas fa-shopping-bag"></i>
                    </span>
                    <span className="nav-icon-text">
                        Bag
                    </span>
                </a>
            </li>
        </ul>
    </div>
</nav>
)
}

export {Navigation}