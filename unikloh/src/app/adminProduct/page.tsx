"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import {Product, ProductFormData, updateProduct} from '@/types/product';


const AdminProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);

  let updateInitialProduct: updateProduct = {
    title: "Shirt To Update",
    price: 7373,
  }
  const [updateProducts, setUpdateProducts] = useState<updateProduct | null>(updateInitialProduct);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10", {
      method: "GET",
      headers: {}})
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

    let initialAddProduct: ProductFormData = {
    title: "Shirt A",
    price: 100,
    description: "A shirt that is made for A",
    categoryId: 1,
   
  }

  const [formData, setFormData] = useState<ProductFormData>(initialAddProduct);


  function handleAddProduct(e:any) {
    e.preventDefault();
    alert("Adding Product: " + JSON.stringify(formData));
    // Logic to add a new product
    fetch("https://api.escuelajs.co/api/v1/products", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
          },
      body: JSON.stringify({
      // Add product data here
          title: formData.title,
          price: formData.price,
          description: formData.description,
          categoryId: formData.categoryId,
          images: ["https://placehold.co/600x400"]
      })
  }) .then(res => res.json())
  .then(data => {
    console.log("Product created:", data);
  })
}

function openAddProductModal() {
  const modal = document.getElementById('addProductModal');
  
    modal?.classList.toggle('hidden');
  
}

function openUpdateProductModal() {
  const modal = document.getElementById('updateProductModal');
  modal?.classList.toggle('hidden');
}

function handleDeleteProduct(productId: number) {
  fetch(`https://api.escuelajs.co/api/v1/products/${productId}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to delete");

      // Remove product from state → triggers re-render
      setProducts((prev) => prev.filter((p) => p.id !== productId));

      console.log(`Product ${productId} deleted`);
    })
    .catch((err) => console.error(err));
}

function handleEditProduct(productId: number) {
  // Logic to edit a product

  console.log(updateProducts)
  fetch(`https://api.escuelajs.co/api/v1/products/${productId}`, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(
      {
        // id: productId, 
        ...updateProducts

      })
  })
    .then(res => res.json())
    .then(data => {
      console.log("Product updated:", data);
    });
  alert("Editing Product ID: " + productId);
}

  return (
    <div>
      Product Admin
        <button className='border p-2 rounded bg-blue-500 text-white z-50' onClick={openAddProductModal}>Add New Product</button>

          <div className='hidden absolute top-30 left-0 w-full h-full bg-gray-300 bg-opacity-50 flex items-center justify-center' id='addProductModal'>
          <h2>Add New Product</h2>
          <button onClick={() => openAddProductModal()}>Close</button>
            <form onSubmit={(e) => {  handleAddProduct(e); }}>
              <label htmlFor='title'>Title:</label>
              <input
                type='text'
                id='title'
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
              <br />
              <label htmlFor='price'>Price:</label>
              <input
                type='number'
                id='price'
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
              />

              <br />
              <label htmlFor='description'>Description:</label>
              <textarea
                id='description'
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
              <br />
              <label htmlFor='categoryId'>Category ID:</label>
              <input
                type='number'
                id='categoryId'
                value={formData.categoryId}
                onChange={(e) => setFormData({ ...formData, categoryId: Number(e.target.value) })}
              />
              <br />

              <button onClick={handleAddProduct} type="submit">Submit</button>
            </form>
        </div>





        {products.map(product => (
          <div key={product.id} className='border p-4 m-4'>
            <h2>{product.title}</h2>
            <img className='w-[40px] h-[40px] object-cover' src={product.images[0]} alt={product.title} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <br></br>
            <button className='border p-2 rounded bg-yellow-500 text-white' onClick={() => openUpdateProductModal()}>Edit</button>
            <button className='border p-2 rounded bg-red-500 text-white' onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          
          <div className='hidden absolute top-30 left-0 w-full h-full bg-gray-300 bg-opacity-50 flex items-center justify-center' id='updateProductModal'>
          <h2>Update Product</h2>
          <button onClick={() => openUpdateProductModal()}>Close</button>
            <form onSubmit={(e) => { e.preventDefault(); handleEditProduct(product.id); }}>
              <label htmlFor='title'>Title:</label>
              <input
                type='text'
                id='title'
                value={updateProducts?.title ?? product.title}
                onChange={(e) => setUpdateProducts({ ...updateProducts, title: e.target.value })}
              />
              <br />
              <label htmlFor='price'>Price:</label>
              <input
                type='number'
                id='price'
                value={updateProducts?.price ?? product.price}
                onChange={(e) => setUpdateProducts({ ...updateProducts, price: Number(e.target.value) })}
              />

              {/* <br />
              <label htmlFor='description'>Description:</label>
              <textarea
                id='description'
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
              <br /> */}
              {/* <label htmlFor='categoryId'>Category ID:</label>
              <input
                type='number'
                id='categoryId'
                value={formData.categoryId}
                onChange={(e) => setFormData({ ...formData, categoryId: Number(e.target.value) })}
              />
              <br /> */}

              <button onClick={() =>handleEditProduct(Number(product.id))} type="submit">Submit</button>
            </form>
        </div>
          
          </div>
        ))}

      
      
    </div>
  )
}

export default AdminProduct
