import "../policy.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy | Bubbly Scent",
  description: "Shipping policy and delivery information for Bubbly Scent.",
};

export default function ShippingPolicy() {
  return (
    <div className="policy-container animate-fade-in">
      <div className="policy-header">
        <h1 className="text-gradient-gold">Shipping Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
      </div>
      
      <div className="policy-content glass">
        <h2>Order Processing</h2>
        <p>
          All orders are processed within 1 to 2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.
        </p>

        <h2>Domestic Shipping Rates and Estimates</h2>
        <p>
          We offer flat-rate shipping for all our furniture items within the contiguous United States. Shipping charges for your order will be calculated and displayed at checkout.
        </p>
        <ul>
          <li><strong>Standard Shipping:</strong> 3-5 business days</li>
          <li><strong>Expedited Shipping:</strong> 1-2 business days (available for select items)</li>
        </ul>

        <h2>International Shipping</h2>
        <p>
          At this time, we do not offer international shipping. We ship exclusively within the United States.
        </p>

        <h2>How do I check the status of my order?</h2>
        <p>
          When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 48 hours for the tracking information to become available.
        </p>
        <p>
          If you haven’t received your order within 7 days of receiving your shipping confirmation email, please contact us at cs@bubblyscent.com with your name and order number, and we will look into it for you.
        </p>

        <h2>Contact Us</h2>
        <p>If you have any further questions, please don't hesitate to contact us at:</p>
        <p>
          <strong>BUBBLY SCENT</strong><br />
          Operated by DUCK WORLD LLC.<br />
          7901 4TH ST N STE 300<br />
          ST. PETERSBURG, FL 33702<br />
          Phone: (646) 256-3687<br />
          Email: cs@bubblyscent.com
        </p>
      </div>
    </div>
  );
}
