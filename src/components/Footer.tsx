import Link from "next/link";
import Image from "next/image";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer border-t border-border mt-20">
      <div className="container footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" style={{ display: 'inline-block', marginBottom: '1rem' }}>
              <Image src="/Logo.png" alt="Bubbly Scent Logo" width={180} height={48} style={{ objectFit: 'contain' }} />
            </Link>
            <p className="text-sm opacity-80 mb-4">
              Elevating workspaces and comfort with premium standing desks, ergonomic chairs, and folding beds.
            </p>
            <p className="text-xs opacity-80 mb-4 font-semibold">
              BUBBLY SCENT Operated by DUCK WORLD LLC.
            </p>
            <div className="contact-info text-sm opacity-80">
              <p>7901 4TH ST N STE 300</p>
              <p>ST. PETERSBURG, FL 33702</p>
              <p>Email: cs@bubblyscent.com</p>
              <p>Phone: (646) 256-3687</p>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="mb-4">Shop</h4>
            <ul>
              <li><Link href="/products/desks">Standing Desks</Link></li>
              <li><Link href="/products/chairs">Ergonomic Chairs</Link></li>
              <li><Link href="/products/beds">Folding Beds</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="mb-4">Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="mb-4">Legal</h4>
            <ul>
              <li><Link href="/policies/terms">Terms of Service</Link></li>
              <li><Link href="/policies/privacy">Privacy Policy</Link></li>
              <li><Link href="/policies/shipping">Shipping Policy</Link></li>
              <li><Link href="/policies/returns">Return & Refund Policy</Link></li>
              <li><Link href="/policies/payment">Payment Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BUBBLY SCENT. Operated by DUCK WORLD LLC. All rights reserved.</p>
          <div className="payment-methods">
            <Image 
              src="/paypal-icon.png" 
              alt="PayPal Secure Checkout" 
              width={120} 
              height={32} 
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
