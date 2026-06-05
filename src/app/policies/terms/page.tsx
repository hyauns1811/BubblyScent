import "../policy.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Bubbly Scent",
  description: "Terms of service for Bubbly Scent.",
};

export default function TermsOfService() {
  return (
    <div className="policy-container animate-fade-in">
      <div className="policy-header">
        <h1 className="text-gradient-gold">Terms of Service</h1>
        <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
      </div>
      
      <div className="policy-content glass">
        <h2>Overview</h2>
        <p>
          This website is operated by BUBBLY SCENT, operated by DUCK WORLD LLC. Throughout the site, the terms “we”, “us” and “our” refer to BUBBLY SCENT. BUBBLY SCENT offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
        </p>

        <h2>Online Store Terms</h2>
        <p>
          By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
        </p>
        <p>
          You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction.
        </p>

        <h2>Products or Services</h2>
        <p>
          Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.
        </p>
        <p>
          We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.
        </p>

        <h2>Accuracy of Billing and Account Information</h2>
        <p>
          We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order.
        </p>

        <h2>Contact Information</h2>
        <p>Questions about the Terms of Service should be sent to us at:</p>
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
