import Link from "next/link";
import "./home.css";
import { ArrowRight, ShieldCheck, Truck, Clock } from "lucide-react";
import Image from "next/image";
import { products } from "@/lib/products";
import AddToCartButton from "@/components/AddToCartButton";

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h1 className="animate-fade-in">
            Elevate Your <br />
            <span className="text-gradient-gold">Workspace & Rest</span>
          </h1>
          <p className="hero-subtitle animate-fade-in delay-100">
            Premium standing desks, ergonomic chairs, and folding beds designed for modern professionals.
          </p>
          <div className="hero-actions animate-fade-in delay-200">
            <Link href="#products" className="btn btn-primary">
              Shop Now <ArrowRight size={18} />
            </Link>
            <Link href="/about" className="btn btn-outline">
              Our Story
            </Link>
          </div>
        </div>
        <div className="hero-bg"></div>
      </section>

      {/* Features */}
      <section className="features container glass animate-fade-in delay-300">
        <div className="feature">
          <Truck className="feature-icon" size={32} />
          <h3>Fast Shipping</h3>
          <p>Dispatched securely to your door.</p>
        </div>
        <div className="feature">
          <ShieldCheck className="feature-icon" size={32} />
          <h3>Premium Quality</h3>
          <p>Built with top-grade materials.</p>
        </div>
        <div className="feature">
          <Clock className="feature-icon" size={32} />
          <h3>24/7 Support</h3>
          <p>We are here when you need us.</p>
        </div>
      </section>

      {/* Products */}
      <section className="categories container" id="products">
        <h2 className="text-center mb-12">Our Premium Collection</h2>
        <div className="category-grid">
          {products.map((product) => (
            <div key={product.id} className="category-card">
              <Link href={`/products/${product.id}`} style={{ display: 'block', flexGrow: 1 }}>
                <div className="category-img-wrapper">
                  <Image 
                    src={product.image} 
                    alt={product.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
                    className="category-img"
                  />
                </div>
                <div className="category-info">
                  <h3>{product.title}</h3>
                  <p style={{ marginBottom: '1rem', flexGrow: 1 }}>{product.description}</p>
                  <div style={{ fontWeight: '600', color: 'var(--primary)', fontSize: '1.2rem' }}>
                    ${product.price.toFixed(2)}
                  </div>
                </div>
              </Link>
              <div style={{ padding: '0 1.5rem 1.5rem 1.5rem' }}>
                <AddToCartButton product={product} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <div className="container trust-container glass">
          <div className="trust-content">
            <h2>Committed to Excellence</h2>
            <p>
              At Bubbly Scent, we believe that your environment shapes your success. 
              Whether you're working hard or resting well, our meticulously crafted 
              furniture is designed to support your lifestyle.
            </p>
            <Link href="/about" className="btn btn-primary mt-6">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
