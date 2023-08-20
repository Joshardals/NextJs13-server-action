"use client";
import { addProductToDatabase } from "@/actions/serverActions";
import React, { useTransition } from "react";

const AddProductButton = () => {
  const [isPending, startTransition] = useTransition();
  const formData = new FormData();
  formData.append("product", "Hp Elitebook");
  formData.append("price", "499");
  return (
    <button
      className="fixed bottom-10 right-10 border bg-green-500 text-white p-2 rounded-md w-48"
      onClick={() => startTransition(() => addProductToDatabase(formData))}
    >
      {isPending ? "Adding..." : "Add Product"}
    </button>
  );
};

export default AddProductButton;
