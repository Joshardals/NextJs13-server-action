"use server";

import { Products } from "@/typings";
import { revalidateTag } from "next/cache";

export const addProductToDatabase = async (e: FormData) => {
  let product = e.get("product")?.toString();
  let price = e.get("price")?.toString();

  if (!product || !price) return;
  const newProducts: Products = {
    product,
    price,
  };

  await fetch("https://64dfaa6c71c3335b2582f10f.mockapi.io/products", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(newProducts),
  });

  revalidateTag("products");
};
