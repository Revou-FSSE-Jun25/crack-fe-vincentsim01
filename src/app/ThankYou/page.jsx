
"use client";
import React from 'react'
import { useState } from "react";
import { useCart } from "@/app/context/cartContext";
import { useAuth } from '@/app/context/authContext'
import { useRouter } from "next/navigation";
import { useLoading } from '@/app/context/loadingContext';
import CheckoutPhotoShoot from "@/app/component/checkoutPhotoShoot/page";  
const ThankYou = () => {
    const { user, logout, isLoading } = useAuth();
    const { cart, removeFromCart, getTotal, clearCart, addToCart } = useCart();
    const router = useRouter();

    // const [isPhotoShootAdded, setIsPhotoShootAdded] = useState<boolean>(false);

    // function openPhotoShoot() {
    //   setIsPhotoShootAdded(true);
    // }

    // function closePhotoShoot() {
    //   setIsPhotoShootAdded(false);
    // }



  return (
<div className="text-center py-10">
  <h1 className="text-2xl font-semibold mb-2">
    Thank You for Your Purchase!
  </h1>
  <p className="text-gray-600">
    Your order has been successfully placed.
  </p>
</div>
  )
}

export default ThankYou;
