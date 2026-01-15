"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Product = {
  id: number;
  title: string;
  price: number;
  quantity?: number;
};

interface CheckoutItem {
  transactionId: number;
  productId: number;
  price: number; // or number if you convert it
  quantity?: number;
}

export default function PaymentPage() {
  const [checkoutItems, setCheckoutItems] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<string>("credit_card");
  const [transactionId, setTransactionId] = useState<number | null>(null);

      const getCookie = (name: string): string | null => {
  if (typeof document === 'undefined') return null;
  return document.cookie
    .split('; ')
    .find(row => row.startsWith(`${name}=`))
    ?.split('=')[1] || null;
};

    const router = useRouter();
    const userId = getCookie('user-id');
    console.log("the user id is "+ userId)
    const authToken = getCookie('auth-token');

  useEffect(() => {
    const storedItems = localStorage.getItem("checkoutItems");
    if (storedItems) {
      const items = JSON.parse(storedItems);
      setCheckoutItems(items);
      const totalPrice = parseFloat(items.reduce(
        (sum: number, item: Product) => sum + item.price * (item.quantity || 1),
        0
      ).toFixed(2));
      setTotal(totalPrice);
    }
  }, []);



  const handlePayment = async() => {
    alert(`Payment successful using ${paymentMethod}! Total: $${total}`);
    console.log('All cookies:', document.cookie);
    console.log("User ID:", userId);
    console.log("Type of User ID:", typeof userId);
    console.log("type of userid number "+ typeof Number(userId))
    console.log("Auth Token:", authToken);
    console.log("the total is"+ total)
    console.log("Type of total"+typeof total)
    console.log("type of total parsefloat decimal "+ parseFloat(total.toFixed(2)))
    try{
          const res =await fetch('https://revoubackend6-production.up.railway.app/transactions', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json',
                "Authorization": `Bearer ${authToken}`,
              },
              body: JSON.stringify({
                userId: Number(userId),
                total:parseFloat(total.toFixed(2))
              })
            })
              const data = await res.json();
              console.log("transactionid are "+data.id);
              setTransactionId(data.id); 
              localStorage.setItem("transId", data.id.toString());
              console.log(transactionId)
            }catch(error){
              console.error("Error creating transaction", error);
            }

            console.log("transaction id setelah fetch "+ transactionId )



      const storedItems2 = localStorage.getItem('checkoutItems');
    const storedItems2items: Product[] = storedItems2
      ? JSON.parse(storedItems2)
      : [];

    const transId = localStorage.getItem("transId");
    console.log("transId adalah "+transId)
    console.log("transId type "+typeof transId)

    await Promise.all(
      storedItems2items.map(async (item: Product) =>{

             console.log("stored2itemsid "+item.id)
            console.log("type of itemsid "+typeof item.id)
            console.log("stored2itemstitle "+item.title)
            console.log("stored2itemsqty "+item.quantity)
            console.log("stored2itemsqty typeof "+typeof item.quantity)
            console.log("stored2itemsprice "+item.price)
             console.log("type of "+typeof item.price)

        
        // Check if item is a booking (ID 10001, 10002, or 10003)
        const isBooking = [10001, 10002, 10003].includes(item.id);

        if(isBooking){
          // For booking items, first create a transaction-item
          const response = await fetch('https://revoubackend6-production.up.railway.app/transaction-items', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
          },
          body: JSON.stringify({              
            transactionId: Number(transId),
              productId: item.id,
              quantity: Number(item.quantity) || 1,
              price: parseFloat(item.price.toString()).toFixed(2)
            })
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => null);
          console.error("Failed to create transaction-item for booking:", errorData);
          console.error("Response status:", response.status);
          console.error("Attempted to create with body:", {
            transactionId: Number(transId),
            productId: item.id,
            quantity: Number(item.quantity) || 1,
            price: parseFloat(item.price.toString()).toFixed(2)
          });
          throw new Error(`Failed to create transaction-item for booking ${item.id}`);
        }

        const responseData = await response.json();
        const transitid = responseData.id;
        console.log("Transaction-item created with ID:", transitid);

          // Then create the booking with the transaction-item ID
          const response2 = await fetch('https://revoubackend6-production.up.railway.app/booking', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
          },
          body: JSON.stringify({              
              transactionId: Number(transId),
              packageId: item.id,
              userId: Number(userId),
              bookingDate: new Date().toISOString(),
              transactionitemId: Number(transitid)
            })
        });
        
        if (!response2.ok) {
          const errorData = await response2.json().catch(() => null);
          console.error("Failed to create booking:", errorData);
          console.error("Validation errors:", errorData?.message);
          console.error("Request body was:", {
            transactionId: Number(transId),
            packageId: item.id,
            userId: Number(userId),
            bookingDate: new Date().toISOString(),
            transactionitemId: Number(transitid)
          });
          throw new Error(`Failed to create booking for package ${item.id}: ${JSON.stringify(errorData?.message)}`);
        }
        
        return response2.json();
        } else{
           // For regular products, only create transaction-item
           const response = await fetch('https://revoubackend6-production.up.railway.app/transaction-items', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
          },
          body: JSON.stringify({              
            transactionId: Number(transId),
              productId: item.id,
              quantity: Number(item.quantity) || 1,
              price: parseFloat(item.price.toString()).toFixed(2)
            })
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => null);
          console.error("Failed to create transaction-item:", errorData);
          throw new Error(`Failed to create transaction-item for product ${item.id}`);
        }

        return response.json();
        }
      })
    );
    

    // console.log("transactionId is "+ transactionId)
    // console.log("transactionId is type "+ typeof transactionId)

        await fetch('https://revoubackend6-production.up.railway.app/payments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json',
        "Authorization": `Bearer ${authToken}`, },
          body: JSON.stringify({
            provider: paymentMethod,
            amount: parseFloat(total.toFixed(2)),
            status: "SUCCESS",
            transactionId: Number(transId)

          })
        })
        .then(response => response.json())


    
    localStorage.removeItem("checkoutItems");
    router.push("/ThankYou");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Payment</h1>

      {checkoutItems.length === 0 ? (
        <p>No items to pay for.</p>
      ) : (
        <>
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

            {checkoutItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between border-b py-2 text-gray-700"
              >
                <span>
                  {item.title} × {item.quantity || 1}
                </span>
                <span>${item.price * (item.quantity || 1)}</span>
              </div>
            ))}

            <div className="mt-4 text-right text-lg font-semibold">
              Total: ${total.toFixed(2)}
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Choose Payment Method</h2>

            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full mb-4"
              style={{
                background: "var(--background)",
                color: "var(--foreground)",
              }}
            >
              <option value="credit_card">💳 Credit Card</option>
              <option value="bank_transfer">🏦 Bank Transfer</option>
              <option value="cod">🚚 Cash on Delivery</option>
              <option value="crypto">🪙 Cryptocurrency</option>
              <option value="kidney">🧫 Kidney</option>
            </select>

            <button
              onClick={handlePayment}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md w-full"
            >
              Confirm Payment
            </button>
          </div>
        </>
      )}
    </div>
  );
}