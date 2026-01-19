"use client";
import React, { useState, useEffect } from "react";
import { Product } from "@/types/product";
import Image from "next/image";
import AddToCartButton from "@/app/component/addtocartbutton/AddToCartButton";
import { useCart } from "@/app/context/cartContext";
import {FormUpdateProduct} from '@/app/component/formUpdateProduct/FormUpdateProduct';
import {MockProducts} from '@/app/data/Product';
import {ProductMock} from '@/types/product';
import { useAuth } from "@/app/context/authContext";
export default function ProductClient({ product, id }: { product: Product; id: number }) {
// export default function ProductClient({ product, id }: { product: ProductMock; id: number }) {
  const { addToCart } = useCart();
  const {userRole} = useAuth();
  const [showAct, setshowAct] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(id);

  useEffect(() => {
    setLoading(true);
    // Check user role from cookie
    const userRole = document.cookie
      .split("; ")
      .find((row) => row.startsWith("user-role="))
      ?.split("=")[1];

    if (!userRole || userRole === "null" || userRole === 'USER') {
      setshowAct(false);
    } else {
      setshowAct(true);
    }

    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const nextPage = () => {
    const newPage = currentPage + 1;
    window.location.href = `/Products/${newPage}`;
  };

  const prevPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      window.location.href = `/Products/${newPage}`;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-500 mr-2"></div>
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <a href="/" className="text-gray-400 hover:text-black transition-colors">
                Home
              </a>
            </li>
            <li className="text-gray-600">/</li>
            <li>
              <a href="/products" className="text-gray-400 hover:text-black transition-colors">
                Products
              </a>
            </li>
            <li className="text-gray-600">/</li>
            <li className="text-gray-800 truncate max-w-xs">Product {id}</li>
          </ol>
        </nav>

        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={prevPage}
            disabled={currentPage <= 1}
            className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Previous Item
          </button>
          <button
            onClick={nextPage}
            className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Next Item
          </button>
        </div>


<div className="max-w-5xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-lg">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {/* LEFT: IMAGE */}
    <div className="flex justify-center">
      <Image
        src={product?.image || "/placeholder.png"}
        alt={product?.title || "Product image"}
        width={400}
        height={400}
        unoptimized
        className="rounded-xl shadow transition-transform duration-300 hover:scale-105"
      />

        {/* <Image
            src={product?.images || "/placeholder.png"}
            alt={product?.title || "Product image"}
            width={400}
            height={400}
            unoptimized
            className="my-4 rounded-lg"
          /> */}
    </div>

    {/* RIGHT: DETAILS */}
    <div className="flex flex-col justify-center space-y-4">
      <h1 className="text-4xl font-bold">{product?.title}</h1>

      <p className="text-gray-600">{product?.description}</p>

      <p className="text-3xl font-semibold text-gray-900">${product?.price}</p>

      <div className="flex gap-4 mt-4">
        {product && <AddToCartButton product={product} />}
        {/* {showAct && (
          <button
            className="border border-gray-800 rounded-md px-4 py-2 text-sm shadow hover:scale-105 active:scale-95 transition-transform"
            onClick={() => (window.location.href = `/Products/${id}/edit`)}
          >
            Edit Product
          </button>
        )} */}
      </div>
    </div>
  </div>
</div>










{/* 
        <div className="m-2 p-5 border border-gray-200 shadow-lg rounded-lg flex flex-col items-center">
          <h1 className="text-4xl font-bold">{product?.title}</h1>




          <p className="text-gray-600 mt-2">{product?.description}</p>
          <p className="text-lg text-2xl">${product?.price}</p> */}

          {/* <Image
            src={product?.images || "/placeholder.png"}
            alt={product?.title || "Product image"}
            width={400}
            height={400}
            unoptimized
            className="my-4 rounded-lg"
          /> */}



          {/* <div className="flex justify-center items-center mt-4">
            {product && <AddToCartButton product={product} />}
            {showAct && (
              <button
                className="border border-black rounded-md m-2 text-sm p-2 shadow-xl cursor-pointer hover:scale-110 active:scale-90 transition-transform"
                onClick={() => (window.location.href = `/products/${id}/edit`)}
              >
                Edit Product
              </button>
            )}

          </div> */}
        <br></br><br></br>

        </div>

        <div className="text-center mt-6">

          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={prevPage}
              disabled={currentPage <= 1}
              className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Previous Item
            </button>
            <button
              onClick={nextPage}
              className="bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Next Item
            </button>
        </div>
          <a
            href="/Products"
            className="text-gray-400 hover:text-black transition-colors inline-flex items-center"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Products
          </a>
        </div>

        
      </div>
    // </div>
  );
}