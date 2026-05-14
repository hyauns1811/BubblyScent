"use client";

import { useCart } from "@/context/CartContext";
import { Product } from "@/lib/products";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating if this is inside a link
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button 
      className={`btn ${added ? 'btn-outline' : 'btn-primary'}`} 
      onClick={handleAdd}
      style={{ width: '100%', marginTop: '1rem' }}
    >
      <ShoppingCart size={18} />
      {added ? 'Added to Cart' : 'Add to Cart'}
    </button>
  );
}
