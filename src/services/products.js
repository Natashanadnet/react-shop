const URL = "https://fakestoreapi.com/products";

export async function fetchProducts({ id = "all" } = {}) {
  try {
    const response = await fetch(`${URL}${id !== "all" ? "/" + id : ""}`);
    if (!response.ok) throw new Error("Couldn't load products");

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error(error);
  }
}
