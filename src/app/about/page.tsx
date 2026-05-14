import "../policies/policy.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Bubbly Scent",
  description: "Learn more about Bubbly Scent, our mission, and our premium furniture collection.",
};

export default function AboutUs() {
  return (
    <div className="policy-container animate-fade-in">
      <div className="policy-header">
        <h1 className="text-gradient-gold">About Us</h1>
      </div>
      
      <div className="policy-content glass">
        <h2>Our Story</h2>
        <p>
          Founded in Wilkes-Barre, PA, Bubbly Scent was created with a singular vision: to transform everyday workspaces and living areas into environments of ultimate comfort and productivity. We believe that the right furniture is not just functional—it's an investment in your well-being.
        </p>

        <h2>Our Products</h2>
        <p>
          We specialize in premium, thoughtfully designed furniture:
        </p>
        <ul>
          <li><strong>Standing Desks:</strong> Engineered for stability and smooth transitions, encouraging movement throughout your workday.</li>
          <li><strong>Ergonomic Chairs:</strong> Crafted to support your natural posture, providing unparalleled comfort for long hours of focus.</li>
          <li><strong>Folding Beds:</strong> The perfect blend of convenience and restorative sleep, designed for modern, versatile spaces.</li>
        </ul>

        <h2>Our Commitment</h2>
        <p>
          At Bubbly Scent, quality is our cornerstone. We source the finest materials and employ rigorous testing to ensure every piece we sell meets the highest standards of durability and aesthetics. Your satisfaction is our priority, which is why we offer dedicated support to help you create your ideal space.
        </p>

        <h2>Get in Touch</h2>
        <p>
          We love hearing from our customers. Whether you need help selecting the perfect desk or have a question about your order, our team is here for you.
        </p>
        <p>
          <strong>Bubbly Scent</strong><br />
          24 SOUTH RIVER STREET<br />
          WILKES-BARRE, PA 18702<br />
          Phone: (646) 256-3687<br />
          Email: cs@bubblyscent.com
        </p>
      </div>
    </div>
  );
}
