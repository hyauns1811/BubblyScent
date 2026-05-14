"use client";

import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  // Shipping Form State
  const [shippingInfo, setShippingInfo] = useState({
    email: "",
    fullName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (items.length === 0) {
    return (
      <div className="container" style={{ padding: '4rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
        <h1 className="text-gradient-gold" style={{ marginBottom: '2rem' }}>Checkout</h1>
        <div className="glass" style={{ padding: '4rem', borderRadius: '16px' }}>
          <p style={{ color: '#a1a1aa', marginBottom: '2rem', fontSize: '1.2rem' }}>Your cart is empty. Please add items to checkout.</p>
          <Link href="/#products" className="btn btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const initialOptions = {
    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "sb", // "sb" means sandbox
    currency: "USD",
    intent: "capture",
  };

  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '60vh' }}>
      <h1 className="text-gradient-gold" style={{ marginBottom: '2rem' }}>Checkout</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }} className="checkout-layout">
        <div className="order-summary glass" style={{ padding: '2rem', borderRadius: '16px', height: 'fit-content' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>Order Summary</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            {items.map((item) => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontWeight: '600' }}>{item.title}</span>
                  <span style={{ color: '#a1a1aa', fontSize: '0.9rem', marginLeft: '0.5rem' }}>x {item.quantity}</span>
                </div>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span style={{ color: '#a1a1aa' }}>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <span style={{ color: '#a1a1aa' }}>Shipping</span>
            <span>Free</span>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '1rem', fontWeight: 'bold', fontSize: '1.5rem' }}>
            <span>Total</span>
            <span style={{ color: 'var(--primary)' }}>${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <div className="payment-section" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="shipping-info glass" style={{ padding: '2rem', borderRadius: '16px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Shipping Information</h2>
            <p style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: '500' }}>Note: We currently only ship within the United States.</p>
            
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#a1a1aa' }}>Email Address</label>
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  value={shippingInfo.email}
                  onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'rgba(0,0,0,0.2)', color: '#fff' }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#a1a1aa' }}>Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  value={shippingInfo.fullName}
                  onChange={(e) => setShippingInfo({...shippingInfo, fullName: e.target.value})}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'rgba(0,0,0,0.2)', color: '#fff' }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#a1a1aa' }}>Street Address</label>
                <input 
                  type="text" 
                  placeholder="123 Main St"
                  value={shippingInfo.address}
                  onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'rgba(0,0,0,0.2)', color: '#fff' }}
                />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#a1a1aa' }}>City</label>
                  <input 
                    type="text" 
                    placeholder="City"
                    value={shippingInfo.city}
                    onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'rgba(0,0,0,0.2)', color: '#fff' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#a1a1aa' }}>State</label>
                  <input 
                    type="text" 
                    placeholder="State (e.g. CA, NY)"
                    value={shippingInfo.state}
                    onChange={(e) => setShippingInfo({...shippingInfo, state: e.target.value})}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'rgba(0,0,0,0.2)', color: '#fff' }}
                  />
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#a1a1aa' }}>ZIP Code</label>
                  <input 
                    type="text" 
                    placeholder="ZIP Code"
                    value={shippingInfo.zipCode}
                    onChange={(e) => setShippingInfo({...shippingInfo, zipCode: e.target.value})}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'rgba(0,0,0,0.2)', color: '#fff' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#a1a1aa' }}>Country</label>
                  <input 
                    type="text" 
                    value="United States"
                    disabled
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'rgba(0,0,0,0.4)', color: '#888', cursor: 'not-allowed' }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="payment-container">
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Payment</h2>
            <p style={{ color: '#a1a1aa', marginBottom: '2rem' }}>Complete your secure payment through PayPal.</p>
          
          <div className="glass" style={{ padding: '2rem', borderRadius: '16px', backgroundColor: '#fff' }}>
            <PayPalScriptProvider options={initialOptions}>
              <PayPalButtons
                style={{ layout: "vertical", shape: "rect" }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                      {
                        amount: {
                          currency_code: "USD",
                          value: totalPrice.toFixed(2),
                        },
                      },
                    ],
                  });
                }}
                onApprove={async (data, actions) => {
                  if (actions.order) {
                    const details = await actions.order.capture();
                    alert(`Transaction completed by ${details.payer?.name?.given_name}. Thank you for your purchase!`);
                    clearCart();
                    router.push("/");
                  }
                }}
                onError={(err) => {
                  console.error("PayPal Checkout Error:", err);
                  alert("An error occurred during payment processing. Please try again.");
                }}
              />
            </PayPalScriptProvider>
          </div>
        </div>
      </div>
      </div>
      <style>{`
        @media (max-width: 992px) {
          .checkout-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
