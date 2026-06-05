import "../policy.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Bubbly Scent",
  description: "Privacy policy for Bubbly Scent.",
};

export default function PrivacyPolicy() {
  return (
    <div className="policy-container animate-fade-in">
      <div className="policy-header">
        <h1 className="text-gradient-gold">Privacy Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
      </div>
      
      <div className="policy-content glass">
        <h2>Introduction</h2>
        <p>
          BUBBLY SCENT ("we," "us," or "our"), operated by DUCK WORLD LLC, respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
        </p>

        <h2>Information We Collect</h2>
        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
        <ul>
          <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
          <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
          <li><strong>Financial Data</strong> includes payment card details (processed securely via PayPal).</li>
          <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of products you have purchased from us.</li>
        </ul>

        <h2>How We Use Your Data</h2>
        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
        <ul>
          <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
          <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          <li>Where we need to comply with a legal obligation.</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
        </p>

        <h2>Contact Details</h2>
        <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
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
