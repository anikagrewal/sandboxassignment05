import { useContext, useState } from "react";
import { InventoryContext } from "../data/InventoryContext";
import { nanoid } from "nanoid";

export default function ProductForm() {
  const {
    addProduct,
    setEditing,
    updateProduct,
    editing,
    products
  } = useContext(InventoryContext); // just retrieving addProduct from below

  let initialData = {
    name: "",
    inStock: false
  };

  if (editing !== "new") {
    initialData = products.find(function (p) {
      return p.id === editing;
    });
  }
  const [product, setProduct] = useState(initialData);

  function handleSubmit(e) {
    e.preventDefault();

    if (editing === "new") {
      addProduct({
        ...product,
        id: nanoid()
      });
    } else {
      updateProduct(product);
    }
  }

  function handleInput(e, field) {
    setProduct({ ...product, [field]: e.target.value });
  }
  return (
    <div className="add-form">
      <form onSubmit={handleSubmit}>
        <div className="adding-task">
          <label>Task:</label>
          <div className="input-box">
            <input
              type="text"
              value={product.name}
              onChange={(e) => handleInput(e, "name")}
            />
          </div>
        </div>

        <div className="form-btns">
          <div>
            <button className="save-btn">Save</button>
          </div>
          <div>
            <button className="cancel-btn" onClick={() => setEditing(null)}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
