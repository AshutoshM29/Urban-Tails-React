import { Sidebar } from "../../components/Sidebar/Sidebar"
import { Cards } from "../../components/Card/Card-Vertical/Card-Vertical"
import { Link } from 'react-router-dom'


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
    <Cards />
  </div>

</main>
)
}

export {Product}