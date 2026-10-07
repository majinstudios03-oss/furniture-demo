import PolicyLayout from '../../components/PolicyLayout';

const ReturnsPolicyPage = () => {
  return (
    <PolicyLayout title="Returns & Refunds" lastUpdated="October 1, 2026">
      <h2>1. Our 7-Day Easy Return Policy</h2>
      <p>We want you to love your MAJIN furniture. If you are not completely satisfied with your purchase, you can return it within 7 days of delivery for a full refund or exchange, subject to the conditions below.</p>
      
      <h2>2. Conditions for Return</h2>
      <ul>
        <li>The item must be in its original condition, unassembled, and in its original packaging.</li>
        <li>Items that have been assembled, used, altered, or damaged by the customer are not eligible for return.</li>
        <li>Custom-made or personalized items cannot be returned unless they arrive damaged or defective.</li>
        <li>Clearance or sale items marked as "Final Sale" cannot be returned.</li>
      </ul>

      <h2>3. How to Initiate a Return</h2>
      <p>To start a return, please contact our support team at support@majinfurnitures.example with your order number and the reason for return. If your return is approved, we will arrange for a pickup from your delivery address.</p>

      <h2>4. Return Shipping Costs</h2>
      <p>If the return is due to a defect or error on our part, we will cover the return shipping costs. If you are returning an item due to a change of mind, a reverse pickup fee of ₹999 will be deducted from your refund.</p>

      <h2>5. Refunds</h2>
      <p>Once we receive and inspect the returned item, we will notify you of the approval or rejection of your refund. Approved refunds will be processed within 5-7 business days to your original method of payment.</p>

      <h2>6. Exchanges</h2>
      <p>If you wish to exchange an item for a different color or model, please follow the return process for the original item and place a new order for the desired item.</p>
    </PolicyLayout>
  );
};

export default ReturnsPolicyPage;
