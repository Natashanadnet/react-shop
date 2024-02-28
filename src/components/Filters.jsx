import { useProducts } from "../hooks/useProducts";
import { useFilters } from "../hooks/useFilters";
import { useId } from "react";
import { titleCase } from "../helpers/stringFunctions";

function Filters() {
  const { categoriesAndMaxPrice } = useProducts();
  const { categories, maxPrice } = categoriesAndMaxPrice;
  const { filters, setFilters, filteredList } = useFilters();

  const priceFilter = useId();
  const categoryFilter = useId();

  function handlePriceChange(e) {
    setFilters((prevState) => ({
      ...prevState,
      price: parseInt(e.target.value),
    }));
  }

  function handleCategoryChange(e) {
    setFilters((prevState) => ({ ...prevState, category: e.target.value }));
  }
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 3,
        }}
      >
        <label htmlFor={priceFilter}>Max Price: </label>
        <input
          type="range"
          min={0}
          max={maxPrice + 1}
          onChange={handlePriceChange}
          value={filters.price}
        />
        <span>{filters.price} $</span>
      </div>

      <div>Total Products: {filteredList.length}</div>

      <div>
        <label htmlFor={categoryFilter}>Category: </label>
        <select onChange={handleCategoryChange}>
          <option value={"all"}>All</option>
          {categories &&
            categories.map((category) => (
              <option key={category.name} value={category.name}>
                {titleCase(category.name)}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default Filters;
