import './sidebar.css'

function Sidebar() {
return (

<aside className="section-filter">
    <div className="flex">
        <h3 className="header-filter">Filter</h3>
        <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
        </label>
    </div>
    <br />
    <h4 className="sub-header-filter">Price</h4>
    <input className="slider-custom" type="range" />
    <small className="price-range">
        <span>₹99</span>
        <span>₹499</span>
        <span>₹999</span>
    </small>
    <br />
    <hr />
    <h4 className="sub-header-filter">Brand</h4>
    <div className="checkbox">
        <input className="input-checkbox" type="checkbox" id="category1" /><label className="input-desc"
            for="category1">Petmate</label>
    </div>
    <div className="checkbox">
        <input className="input-checkbox" type="checkbox" id="category2" /><label className="input-desc"
            for="category2">Purina</label>
    </div>
    <div className="checkbox">
        <input className="input-checkbox" type="checkbox" id="category3" /><label className="input-desc"
            for="category3">Kong</label>
    </div>
    <div className="checkbox">
        <input className="input-checkbox" type="checkbox" id="category4" /><label className="input-desc"
            for="category4">Bayer</label>
    </div>
    <div className="checkbox">
        <input className="input-checkbox" type="checkbox" id="category5" /><label className="input-desc"
            for="category5">Ruffwear</label>
    </div>
    <br />
    <hr />
    <h4 className="sub-header-filter">Ratings</h4>
    <div className="radio">
        <input type="radio" id="radio1" name="rating-filter" /><label className="input-desc" for="radio1">4 Stars &
            above</label>
    </div>
    <div className="radio">
        <input type="radio" id="radio2" name="rating-filter" /><label className="input-desc" for="radio2">3 Stars &
            above</label>
    </div>
    <div className="radio">
        <input type="radio" id="radio3" name="rating-filter" /><label className="input-desc" for="radio3">2 Stars &
            above</label>
    </div>
    <div className="radio">
        <input type="radio" id="radio4" name="rating-filter" /><label className="input-desc" for="radio4">1 Stars &
            above</label>
    </div>
    <br />
    <hr />
    <h4 className="sub-header-filter">Life Stages</h4>
    <div className="radio">
        <input type="radio" id="radio5" name="sort-by-price" /><label className="input-desc" for="radio5">Puppy</label>
    </div>
    <div className="radio">
        <input type="radio" id="radio6" name="sort-by-price" /><label className="input-desc" for="radio6">Adult</label>
    </div>
    <div className="radio">
        <input type="radio" id="radio6" name="sort-by-price" /><label className="input-desc" for="radio7">Senior</label>
    </div>
</aside>
)
}

export {Sidebar}