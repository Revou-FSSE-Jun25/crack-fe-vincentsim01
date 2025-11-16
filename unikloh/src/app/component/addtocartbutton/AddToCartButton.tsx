"use client"

import React, {useState,useEffect} from 'react';
import {Link} from 'next/link';

const AddToCartButton = ({ title }: { title: string }) => {
    const [isAdding, setIsAdding] = useState(false);

    const handleAddToCart = (title:string) =>   { 
        setIsAdding(true);
        // Simulate an API call or some async operation
            const existingCart = JSON.parse(localStorage.getItem("title") || "[]");

            alert("Added to cart: " + title);

        setTimeout(() => {
            setIsAdding(false);
            // Here you would typically also update the cart state/context
        }, 1000);
    };

  return (
    <div>
        <button 
            className={`mt-2 p-2 bg-red-600 text-white rounded ${isAdding ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => handleAddToCart(title)}
            disabled={isAdding}
        >
            {isAdding ? 'Adding...' : 'Add to Cart'}
        </button>
    </div>
  )
}

export default AddToCartButton
