import "./styles.css";
import { useState } from "react";
import Product from "./components/Product";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import { InventoryContext } from "./data/InventoryContext";

export default function App() {
  const [products, setProducts] = useState(initialProducts);
  const [editing, setEditing] = useState(null);

  function addProduct(product) {
    setProducts([...products, product]);
    setEditing(null);
  }

  function updateProduct(product) {
    setProducts(
      products.map(function (p) {
        if (p.id === product.id) {
          return product;
        } else {
          return p;
        }
      })
    );
    setEditing(null);
  }

  function deleteProduct(id) {
    setProducts(
      products.filter(function (p) {
        return p.id !== id;
      })
    );
  }

  return (
    <div className="App">
      <InventoryContext.Provider
        value={{
          products,
          addProduct,
          deleteProduct,
          updateProduct,
          setEditing,
          editing
        }}
      >
        <h2>Task Management App</h2>
        {!editing ? (
          <>
            <ProductList />
            <button
              className="save-btn add-btn"
              onClick={() => setEditing("new")}
            >
              Add Task
            </button>
          </>
        ) : (
          <ProductForm />
        )}
      </InventoryContext.Provider>
    </div>
  );
}

const initialProducts = [
  {
    id: 1,
    name: "Finish Homework",
    inStock: false
  },
  {
    id: 2,
    name: "Finish Studying",
    inStock: false
  }
];
