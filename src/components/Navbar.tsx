"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="navbar glass">
      <div className="container nav-container">
        <Link href="/" className="logo">
          <Image src="/Logo.png" alt="Bubbly Scent Logo" width={150} height={40} style={{ objectFit: 'contain' }} />
        </Link>

        <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <Link href="/products/desks" onClick={() => setIsMenuOpen(false)}>Standing Desks</Link>
          <Link href="/products/chairs" onClick={() => setIsMenuOpen(false)}>Ergonomic Chairs</Link>
          <Link href="/products/beds" onClick={() => setIsMenuOpen(false)}>Folding Beds</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
        </nav>

        <div className="nav-actions">
          <Link href="/cart" className="cart-btn" aria-label="Cart">
            <ShoppingCart size={20} />
            {mounted && totalItems > 0 && (
              <span className="cart-badge">{totalItems}</span>
            )}
          </Link>
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
