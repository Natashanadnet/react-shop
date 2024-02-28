import { useFilters } from "../hooks/useFilters";
import "./Products.css";
import Filters from "./Filters";

export function ProductList({ title, price, image }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <span>{price} $</span>
    </li>
  );
}

export function Products() {
  const { filteredList } = useFilters();

  return (
    <>
      <Filters />
      <div className="products">
        <ul>
          {filteredList &&
            filteredList.map((product) => (
              <ProductList key={product.id} {...product} />
            ))}
        </ul>
      </div>
    </>
  );
}
