import React, { useState } from "react";

const ProductSearch = () => {
  const [search, setSearch] = useState("")

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphone", price: 2000 },
    { id: 4, name: "Keyboard", price: 1500 },
    { id: 5, name: "Mouse", price: 800 },
    { id: 6, name: "Monitor", price: 12000 },
  ]

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Product Search System
      </h1>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search Product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-3 rounded w-80 text-lg"
        />
      </div>

      {filteredProducts.length === 0 ? (
        <h2 className="text-center text-red-500 text-2xl">
          No Products Found
        </h2>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 shadow">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border p-5 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-semibold">
                {product.name}
              </h2>

              <p className="text-lg mt-2">
                Price: ₹{product.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductSearch