import PolicyLayout from '../../components/PolicyLayout';

const ShippingPolicyPage = () => {
  return (
    <PolicyLayout title="Shipping & Delivery Policy" lastUpdated="October 1, 2026">
      <h2>1. Processing Your Order</h2>
      <p>An email confirmation is sent to your e-mail address after placing your order. Please keep this e-mail as proof of your purchase. We are more than happy to help you over the phone or email to track your order.</p>
      
      <h2>2. Shipment Processing Time</h2>
      <p>Processing time refers to the time it takes for us to prepare your order for shipping. After your payment is authorized and verified, all orders are processed within 2-3 business days. We will contact you for some reason if there are any delays.</p>

      <h2>3. Delivery Timelines</h2>
      <ul>
        <li><strong>Metro Cities:</strong> 3-5 business days after processing.</li>
        <li><strong>Tier 2/3 Cities:</strong> 5-7 business days after processing.</li>
        <li><strong>Remote Locations:</strong> 7-10 business days after processing.</li>
        <li><strong>Custom Furniture:</strong> 2-3 weeks manufacturing + standard delivery time.</li>
      </ul>

      <h2>4. Shipping Rates</h2>
      <p>We provide <strong>FREE standard shipping</strong> on all orders over ₹15,000. For orders under ₹15,000, a flat shipping fee of ₹499 is applied at checkout.</p>

      <h2>5. Assembly Services</h2>
      <p>For products requiring assembly (like beds and dining tables), our delivery executives will assemble the product at your premises free of charge at the time of delivery.</p>

      <h2>6. Damaged or Missing Items</h2>
      <p>Please inspect your furniture at the time of delivery. If you notice any damage or missing parts, please report it to the delivery executive immediately and contact our support team within 24 hours at support@majinfurnitures.example.</p>
    </PolicyLayout>
  );
};

export default ShippingPolicyPage;
