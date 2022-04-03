import { Sidebar } from "../../components/Sidebar/Sidebar"
import { Cards } from "../../components/Card/Card-Vertical/Card-Vertical"
import { Link } from 'react-router-dom'


function Product() {
return (
<main className="main-product">
  <Sidebar />
  <div className="section-card">
    <div className="container-card-head">
      <Link className="path" to="/Homepage">Home</Link>
      <Link className="path" to="/Product">Dog Treats</Link>
      <h2>Dog Treats</h2>
    </div>
    <Cards />
  </div>

</main>
)
}

export {Product}

// import { Link } from 'react-router-dom'
// import { Cards, Sidebar } from "../../components/component";
// import { useSortedProduct } from "../../hooks/Filters/filter";
// export const Product = () => {
//     const { sortPriceHighLow } = useSortedProduct()

//     return (sortPriceHighLow.length === 0) ? <div className="shopping-section error-product-list">Errr... No products found. Try changing the filters</div> : <main className="main-product">
//       <Sidebar />
//       <div className="section-card">
//        <div className="container-card-head">
//          <Link className="path" to="/Homepage">Home</Link>
//          <Link className="path" to="/Product">Dog Treats</Link>
//          <h2>Dog Treats</h2>
//        </div>
//        <Cards />
//      </div>
//     </main>


// } 