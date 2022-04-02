import { Link } from "react-router-dom";
import { useCategory } from "../../hooks/useCategory";
import "./homepage.css"
const Categories=()=>{
const {categories}=useCategory();

return ( <div className="section-category">
    { categories.map((categories)=>{
    return (
    <Link to="/Product">
    <img className="img-category" src={`${categories.categoryImage}`} alt={`${categories.categoryName}`} />
    <p className="desc-category">{categories.categoryName}</p>
    </Link>
    )
    })
    }
</div>
)
}
export {Categories}