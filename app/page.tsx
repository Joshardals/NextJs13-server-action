import { addProductToDatabase } from "@/actions/serverActions";
import { Products } from "@/typings";
import React from "react";
import AddProductButton from "./components/AddProductButton";

const Home = async () => {
  const res = await fetch(
    "https://64dfaa6c71c3335b2582f10f.mockapi.io/products",
    {
      next: { tags: ["products"] },
      cache: "no-cache",
    }
  );

  const products: Products[] = await res.json();

  return (
    <main>
      <h1 className="text-3xl font-bold text-center">Products Warehouse</h1>

      <AddProductButton />

      <form
        action={addProductToDatabase}
        className="flex flex-col gap-5 max-w-xl mx-auto p-5"
      >
        <input
          name="product"
          placeholder="Enter Product Name..."
          className="border border-gray-300 p-2 rounded-md"
        />
        <input
          name="price"
          placeholder="Enter Price Name..."
          className="border border-gray-300 p-2 rounded-md"
        />
        <button className="border bg-blue-500 p-2 rounded-md text-white">
          Add Product
        </button>
      </form>

      <h2 className="font-bold p-5">List of Products</h2>

      <div className="flex gap-5 flex-wrap">
        {products.map((product) => (
          <div key={product.id} className="p-5 shadow">
            <p>{product.product}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
