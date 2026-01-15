
"use client";
import { useState } from "react";
import { useCart } from "@/app/context/cartContext";
import { useAuth } from '@/app/context/authContext'
import { useRouter } from "next/navigation";
import { useLoading } from '@/app/context/loadingContext';
import CheckoutPhotoShoot from "@/app/component/checkoutPhotoShoot/page";  

export default function CartPage() {
  const { user, logout, isLoading } = useAuth();
  const { cart, removeFromCart, getTotal, clearCart, addToCart, updateQuantity } = useCart();
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const router = useRouter();
    const [isPhotoShootAdded, setIsPhotoShootAdded] = useState<boolean>(false);

    function openPhotoShoot() {
      setIsPhotoShootAdded(true);
    }

    function closePhotoShoot() {
      setIsPhotoShootAdded(false);
    }


  const handleSelectItem = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleProceedToCheckout = () => {
    const selectedProducts = cart.filter((item) =>
      selectedItems.includes(item.id)
    );
    localStorage.setItem("checkoutItems", JSON.stringify(selectedProducts));
    console.log(selectedProducts)
    router.push("/Checkout");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4 py-4 border-b last:border-b-0"
            >
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleSelectItem(item.id)}
                  className="h-5 w-5 text-green-600"
                  aria-label={`Select ${item.title}`}
                />

                <img
                  src={item.image}
                  alt={item.title}
                  width={96}
                  height={96}
                  className="w-24 h-24 object-cover rounded-md shadow-sm"
                />

                <div className="min-w-0">
                  <div className="text-lg font-semibold truncate" style={{
                        background: "var(--background)",
                        color: "var(--forekground)",
                      }}>{item.title}</div>
                  <div className="text-sm mt-1"       style={{
                        background: "var(--background)",
                        color: "var(--forekground)",
                      }}>ID: {item.id}</div>

                  <div className="mt-3 flex items-center gap-3" style={{
                        background: "var(--background)",
                        color: "var(--forekground)",
                      }}>
                    <label className="text-sm text-gray-600">Qty</label>
                    <input
                      type="number"
                      min={1}
                      value={item.quantity ?? 1}
                      onChange={(e) =>
                        updateQuantity(item.id, Math.max(1, Number(e.target.value)))
                      }
                      style={{
                        background: "var(--background)",
                        color: "var(--forekground)",
                      }}
                      className="w-20 border border-gray-300 rounded px-2 py-1 text-center "
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end justify-between h-full">
                <div className="text-lg font-bold text-gray-900">${(item.price * (item.quantity ?? 1)).toFixed(2)}</div>
                <div className="mt-2 flex gap-2">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-red-600 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md transition"
                    aria-label={`Remove ${item.title}`}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

                    <br></br><br></br>

          <button 
            className='border border-black px-4 py-2 rounded cursor-pointer hover:scale-110 active:scale-90'
             onClick={openPhotoShoot}
            style={{
              border: "2px solid var(--foreground)",
              background: "var(--foreground)",
              color: "var(--background)",
            }}
          >
              Add On Extra Photoshoot Session
          </button>

          {isPhotoShootAdded ? (<><CheckoutPhotoShoot /> <button onClick={closePhotoShoot}>Close</button></>) : null}

          <h2 className="text-xl mt-4 font-semibold">
            Total: ${getTotal().toFixed(2)}
          </h2>

          <div className="mt-6 flex gap-4">
            <button
              onClick={clearCart}
              className="bg-gray-700 text-white px-4 py-2 rounded-md"
            >
              Clear Cart
            </button>

            <button
              onClick={handleProceedToCheckout}
              disabled={selectedItems.length === 0}
              className={`px-4 py-2 rounded-md ${
                selectedItems.length === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700 text-white"
              }`}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}