import React, { useState } from "react"

const ProductCalculator = () => {
  const [product, setProduct] = useState({
    productName: "",
    price: "",
    quantity: "",
  })

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    })
  };

  const total = Number(product.price) * Number(product.quantity)

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <h1 className="text-2xl font-bold">Product Price Calculator</h1>

      <input
        type="text"
        name="productName"
        placeholder="Product Name"
        value={product.productName}
        onChange={handleChange}
        className="border p-2 rounded w-80"
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={product.price}
        onChange={handleChange}
        className="border p-2 rounded w-80"
      />

      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={product.quantity}
        onChange={handleChange}
        className="border p-2 rounded w-80"
      />

      <div className="text-xl font-semibold">
        Total Amount: ₹{total}
      </div>

      {total > 5000 && (
        <p className="text-green-600 font-bold">
          Discount Eligible 
        </p>
      )}
    </div>
  );
};

export default ProductCalculator;