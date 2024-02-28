import Header from "./components/Header";
import { Products } from "./components/Products";
import { useFilters } from "./hooks/useFilters";
import { ProductProvider } from "./contexts/productContext";

function App() {
  return (
    <>
      <ProductProvider>
        <Header></Header>
        <Products></Products>
      </ProductProvider>
    </>
  );
}

export default App;
