import { useContext, useEffect, useMemo } from "react";
import { fetchProducts } from "../services/products";
import { ProductContext } from "../contexts/productContext";

export function useProducts() {
  const { products, setProducts } = useContext(ProductContext);

  const categoriesAndMaxPrice = useMemo(() => {
    return products.length > 0
      ? products.reduce(
          (acc, product) => {
            //To do: optimize this function so that the changes don't mutate the original accomulator?

            // Calculate the maximum price of the product list
            acc.maxPrice = Math.max(acc.maxPrice, product.price);

            // Add and count categories
            const categoryIndex = acc.categories.findIndex(
              (category) => category.name === product.category
            );

            if (categoryIndex >= 0) {
              acc.categories[categoryIndex].quantity++;
            } else {
              acc.categories.push({ name: product.category, quantity: 1 });
            }
            return acc;
          },
          { categories: [], maxPrice: 0 }
        )
      : { categories: [], maxPrice: 0 };
  }, [products]);

  const getProducts = async ({ id = "all" } = {}) => {
    try {
      const responseData = await fetchProducts({ id });
      setProducts(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { getProducts, listOfProducts: products, categoriesAndMaxPrice };
}
