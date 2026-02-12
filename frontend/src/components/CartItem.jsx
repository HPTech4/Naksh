import React from "react";

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        border: "1px solid #ddd",
        padding: 12,
        marginBottom: 10,
        borderRadius: 6,
      }}
    >
      <img src={item.image} alt={item.name} width={80} height={80} />
      <div style={{ flex: 1 }}>
        <h4 style={{ margin: "0 0 6px" }}>{item.name}</h4>
        <div style={{ color: "#444" }}>
          ${item.price} x {item.quantity} = ${item.price * item.quantity}
        </div>
      </div>
      <input
        type="number"
        min="1"
        value={item.quantity}
        onChange={(e) => onQuantityChange(Number(e.target.value))}
        style={{ width: 70 }}
      />
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
