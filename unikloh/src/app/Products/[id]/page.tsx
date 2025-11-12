"use client";

import React from 'react'
import { useParams } from "next/navigation";

const page = () => {
    const params = useParams();
    const productId = params.id;
  return (
    <div>

        This is product page for product id: {productId}
      
    </div>
  )
}

export default page
