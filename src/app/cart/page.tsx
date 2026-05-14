"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus } from "lucide-react";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="container" style={{ padding: '4rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
        <h1 className="text-gradient-gold" style={{ marginBottom: '2rem' }}>Your Cart</h1>
        <div className="glass" style={{ padding: '4rem', borderRadius: '16px' }}>
          <p style={{ color: '#a1a1aa', marginBottom: '2rem', fontSize: '1.2rem' }}>Your cart is currently empty.</p>
          <Link href="/#products" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '60vh' }}>
      <h1 className="text-gradient-gold" style={{ marginBottom: '2rem' }}>Your Cart</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }} className="cart-layout">
        <div className="cart-items" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {items.map((item) => (
            <div key={item.id} className="glass" style={{ display: 'flex', padding: '1.5rem', borderRadius: '16px', gap: '1.5rem', alignItems: 'center' }}>
              <div style={{ position: 'relative', width: '120px', height: '120px', backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', flexShrink: 0 }}>
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  style={{ objectFit: 'contain', padding: '0.5rem' }} 
                  sizes="120px"
                />
              </div>
              
              <div style={{ flexGrow: 1 }}>
                <Link href={`/products/${item.id}`} style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem', display: 'block' }}>
                  {item.title}
                </Link>
                <div style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '1rem' }}>
                  ${item.price.toFixed(2)}
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={{ padding: '0.25rem 0.5rem', background: 'var(--secondary)', border: 'none', color: '#fff', cursor: 'pointer' }}
                    >
                      <Minus size={14} />
                    </button>
                    <span style={{ padding: '0 1rem', fontSize: '0.9rem' }}>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{ padding: '0.25rem 0.5rem', background: 'var(--secondary)', border: 'none', color: '#fff', cursor: 'pointer' }}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.9rem' }}
                  >
                    <Trash2 size={16} /> Remove
                  </button>
                </div>
              </div>
              <div style={{ fontWeight: 'bold', fontSize: '1.2rem', textAlign: 'right' }}>
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        
        <div className="cart-summary glass" style={{ padding: '2rem', borderRadius: '16px', height: 'fit-content' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>Order Summary</h2>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span style={{ color: '#a1a1aa' }}>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <span style={{ color: '#a1a1aa' }}>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', borderTop: '1px solid var(--border)', paddingTop: '1rem', fontWeight: 'bold', fontSize: '1.2rem' }}>
            <span>Total</span>
            <span style={{ color: 'var(--primary)' }}>${totalPrice.toFixed(2)}</span>
          </div>
          
          <Link href="/checkout" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
            Proceed to Checkout
          </Link>
        </div>
      </div>
      <style>{`
        @media (max-width: 992px) {
          .cart-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
