import '../Filter/filter.css'

function Filter() {
    return (

<aside class="section-filter">
          <div class="flex">
              <h3 class="header-filter">Filter</h3>
              <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
              </label>
          </div>
          <br/>
          <h4 class="sub-header-filter">Price</h4>
          <input class="slider-custom" type="range" />
          <small class="price-range">
              <span>₹99</span>
              <span>₹499</span>
              <span>₹999</span>
          </small>
          <br/>
          <hr/>
          <h4 class="sub-header-filter">Brand</h4>
          <div class="checkbox">
              <input class="input-checkbox" type="checkbox" id="category1" /><label class="input-desc"
                  for="category1">Petmate</label>
          </div>
          <div class="checkbox">
              <input class="input-checkbox" type="checkbox" id="category2" /><label class="input-desc"
                  for="category2">Purina</label>
          </div>
          <div class="checkbox">
              <input class="input-checkbox" type="checkbox" id="category3" /><label class="input-desc"
                  for="category3">Kong</label>
          </div>
          <div class="checkbox">
              <input class="input-checkbox" type="checkbox" id="category4" /><label class="input-desc"
                  for="category4">Bayer</label>
          </div>
          <div class="checkbox">
              <input class="input-checkbox" type="checkbox" id="category5" /><label class="input-desc"
                  for="category5">Ruffwear</label>
          </div>
          <br/>
          <hr/>
          <h4 class="sub-header-filter">Ratings</h4>
          <div class="radio">
              <input type="radio" id="radio1" name="rating-filter" /><label class="input-desc" for="radio1">4 Stars &
                  above</label>
          </div>
          <div class="radio">
              <input type="radio" id="radio2" name="rating-filter" /><label class="input-desc" for="radio2">3 Stars &
                  above</label>
          </div>
          <div class="radio">
              <input type="radio" id="radio3" name="rating-filter" /><label class="input-desc" for="radio3">2 Stars &
                  above</label>
          </div>
          <div class="radio">
              <input type="radio" id="radio4" name="rating-filter" /><label class="input-desc" for="radio4">1 Stars &
                  above</label>
          </div>
          <br/>
          <hr/>
          <h4 class="sub-header-filter">Life Stages</h4>
          <div class="radio">
              <input type="radio" id="radio5" name="sort-by-price" /><label class="input-desc"
                  for="radio5">Puppy</label>
          </div>
          <div class="radio">
              <input type="radio" id="radio6" name="sort-by-price" /><label class="input-desc"
                  for="radio6">Adult</label>
          </div>
          <div class="radio">
              <input type="radio" id="radio6" name="sort-by-price" /><label class="input-desc"
                  for="radio7">Senior</label>
          </div>
      </aside>
      )
  }
  
  export {Filter}