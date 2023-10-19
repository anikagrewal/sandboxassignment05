import { useContext } from "react";
import { InventoryContext } from "../data/InventoryContext";

export default function Product({ product }) {
  const { deleteProduct, setEditing, updateProduct } = useContext(
    InventoryContext
  );

  function handleCheckbox() {
    updateProduct({
      ...product,
      inStock: !product.inStock //makes it the opposite. if it was in stock, then it will say not in stock when clicked
    });
  }

  return (
    <div className="product">
      <div className="product-completion">
        <h3>{product.name}</h3>
        <label>
          {product.inStock ? "Task Completed" : "Task Not Completed"}
          <input
            type="checkbox"
            checked={product.inStock}
            onChange={handleCheckbox}
          />
        </label>
      </div>
      <div className="buttons">
        <div>
          <button className="edit-btn" onClick={() => setEditing(product.id)}>
            Edit
          </button>
        </div>
        <div>
          <button
            className="delete-btn"
            onClick={() => deleteProduct(product.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
