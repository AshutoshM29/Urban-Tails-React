import { Sidebar, VerticalCard, Footer, Navigation, } from "../../components";
import { useDataLayer } from "../../context";
import { Link } from 'react-router-dom'
import "./product.css";

const Product = () => {
  const { state } = useDataLayer();

  return (
    <>
      <Navigation />
      <main className="main-product">
        <Sidebar />
        <div>
        <div className="section-card">
          <div className="container-card-head">
            <Link className="path" to="/Homepage">Home</Link>
              <small> <i className="fas fa-angle-double-right"></i> </small>
            <Link className="path" to="/Product">Dog Treats</Link>
            <h2>Dog Treats</h2>
          </div>
        </div>
      <div className="container-card">
        {state.filteredData.map((product) => {
          return <VerticalCard product={product} key={product._id} />;
        })}
      </div>
      </div>
    </main>
    <Footer />
    </>
  );
};

export { Product };