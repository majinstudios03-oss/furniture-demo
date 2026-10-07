import PolicyLayout from '../../components/PolicyLayout';

const PrivacyPolicyPage = () => {
  return (
    <PolicyLayout title="Privacy Policy" lastUpdated="October 1, 2026">
      <h2>1. Introduction</h2>
      <p>At MAJIN FURNITURES, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you use our website and services.</p>
      
      <h2>2. Information We Collect</h2>
      <p>We collect information that you provide directly to us when you create an account, place an order, subscribe to our newsletter, or contact customer support. This may include:</p>
      <ul>
        <li>Name and contact information (email address, phone number)</li>
        <li>Billing and shipping address</li>
        <li>Payment information (processed securely by our payment partners)</li>
        <li>Order history and preferences</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use the collected information for the following purposes:</p>
      <ul>
        <li>To process and fulfill your orders</li>
        <li>To communicate with you regarding your orders and inquiries</li>
        <li>To send promotional emails and newsletters (if you have opted in)</li>
        <li>To improve our website, products, and services</li>
        <li>To prevent fraudulent transactions and ensure security</li>
      </ul>

      <h2>4. Data Sharing and Security</h2>
      <p>We do not sell, trade, or rent your personal information to third parties. We may share necessary data with trusted service providers (such as logistics partners and payment gateways) solely for the purpose of fulfilling your orders. We implement industry-standard security measures to protect your data.</p>

      <h2>5. Your Rights</h2>
      <p>You have the right to access, update, or delete your personal information. You can manage your account settings or contact us at privacy@majinfurnitures.example for assistance.</p>
    </PolicyLayout>
  );
};

export default PrivacyPolicyPage;
