import "../policy.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Policy | Bubbly Scent",
  description: "Payment policy for Bubbly Scent.",
};

export default function PaymentPolicy() {
  return (
    <div className="policy-container animate-fade-in">
      <div className="policy-header">
        <h1 className="text-gradient-gold">Payment Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
      </div>
      
      <div className="policy-content glass">
        <h2>Accepted Payment Methods</h2>
        <p>
          At Bubbly Scent, we exclusively use <strong>PayPal</strong> as our secure payment gateway to process all transactions. PayPal is one of the safest, most widely accepted ways to pay for your purchases on the Internet.
        </p>
        <p>
          Through PayPal, you can pay using:
        </p>
        <ul>
          <li>Your PayPal account balance</li>
          <li>Credit Cards (Visa, MasterCard, Discover, and American Express)</li>
          <li>Debit Cards</li>
          <li>Bank account linked to PayPal</li>
        </ul>
        <p>
          <em>Note: You do not need a PayPal account to pay with a credit or debit card. You can simply choose the "Pay with Debit or Credit Card" option on the PayPal checkout page.</em>
        </p>

        <h2>Payment Processing</h2>
        <p>
          Your payment will be processed immediately upon placing your order. Once your payment is confirmed, we will begin preparing your premium furniture for shipment.
        </p>

        <h2>Security</h2>
        <p>
          We do not store or capture any of your credit card details on our servers. All transactions are processed on PayPal's highly secure and encrypted servers, ensuring your financial information remains private and protected against fraud.
        </p>

        <h2>Contact Us</h2>
        <p>If you encounter any issues during checkout or have questions about our payment policy, please contact us:</p>
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
