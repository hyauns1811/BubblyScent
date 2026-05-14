import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getProductById, getProductsByCategory, products as allProducts } from "@/lib/products";
import AddToCartButton from "@/components/AddToCartButton";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const product = getProductById(id);
  
  if (product) {
    return {
      title: `${product.title} | Bubbly Scent`,
      description: product.description,
    };
  }

  const title = id.charAt(0).toUpperCase() + id.slice(1);
  return {
    title: `${title} | Bubbly Scent`,
    description: `Shop our premium collection of ${id} at Bubbly Scent.`,
  };
}

export default async function ProductOrCategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const product = getProductById(id);
  
  // If it's a specific product, render product details
  if (product) {
    return (
      <div className="container" style={{ padding: '4rem 2rem' }}>
        <Link href="/" style={{ color: 'var(--primary)', marginBottom: '2rem', display: 'inline-block' }}>
          &larr; Back to Shop
        </Link>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '1rem' }} className="product-details-grid">
          <div className="glass" style={{ position: 'relative', height: '500px', borderRadius: '16px', overflow: 'hidden', padding: '2rem', backgroundColor: '#fff' }}>
            <Image 
              src={product.image} 
              alt={product.title} 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1 className="text-gradient-gold" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{product.title}</h1>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1.5rem' }}>
              ${product.price.toFixed(2)}
            </p>
            <p style={{ color: '#a1a1aa', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
              {product.description}
            </p>
            <div style={{ padding: '2rem', backgroundColor: 'var(--secondary)', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: '#fff', display: 'block', marginBottom: '0.5rem' }}>Free Standard Shipping</strong>
                <span style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Delivery within 3-5 business days.</span>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: '#fff', display: 'block', marginBottom: '0.5rem' }}>30-Day Returns</strong>
                <span style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Shop with confidence.</span>
              </div>
              <AddToCartButton product={product} />
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 992px) {
            .product-details-grid {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
          }
        `}</style>
      </div>
    );
  }

  // If it's a category
  const categoryProducts = getProductsByCategory(id);
  
  if (categoryProducts.length === 0) {
    notFound();
  }

  const categoryTitles: Record<string, string> = {
    desks: "Standing Desks",
    chairs: "Ergonomic Chairs",
    beds: "Folding Beds",
  };

  const title = categoryTitles[id] || "Products";

  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '60vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="text-gradient-gold" style={{ marginBottom: '1rem' }}>{title}</h1>
        <p style={{ color: '#a1a1aa' }}>Explore our collection of premium {title.toLowerCase()}.</p>
      </div>

      <div className="category-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {categoryProducts.map((p) => (
          <div key={p.id} className="glass" style={{ display: 'flex', flexDirection: 'column', borderRadius: '16px', overflow: 'hidden' }}>
            <Link href={`/products/${p.id}`} style={{ display: 'block', flexGrow: 1 }}>
              <div style={{ position: 'relative', width: '100%', height: '250px', backgroundColor: '#fff', padding: '1rem' }}>
                <Image 
                  src={p.image} 
                  alt={p.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{p.title}</h3>
                <p style={{ color: '#a1a1aa', fontSize: '0.9rem', marginBottom: '1rem', flexGrow: 1 }}>{p.description}</p>
                <div style={{ fontWeight: '600', color: 'var(--primary)', fontSize: '1.2rem' }}>
                  ${p.price.toFixed(2)}
                </div>
              </div>
            </Link>
            <div style={{ padding: '0 1.5rem 1.5rem 1.5rem' }}>
              <AddToCartButton product={p} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
