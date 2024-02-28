import { useContext } from "react";
import { FilterContext } from "../contexts/filterContext";
import { ProductContext } from "../contexts/productContext";

export function useFilters() {
  const { filters, setFilters } = useContext(FilterContext);
  const { products } = useContext(ProductContext);

  const filteredList =
    filters.price === 0 && filters.category === "all"
      ? products
      : products.filter(
          (product) =>
            product.price <= filters.price &&
            (filters.category === "all" ||
              product.category === filters.category)
        );

  return { filters, setFilters, filteredList };
}
