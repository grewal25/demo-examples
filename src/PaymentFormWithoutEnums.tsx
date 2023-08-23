import React, { useState } from "react";

const PaymentFormWithoutEnums: React.FC = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("CreditCard");

  const handlePaymentMethodChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedMethod = event.target.value;
    setSelectedPaymentMethod(selectedMethod);
  };

  return (
    <div>
      <h2>Payment Form (Without Enums)</h2>
      <div>
        <label htmlFor="paymentMethod">Select Payment Method:</label>
        <select
          id="paymentMethod"
          value={selectedPaymentMethod}
          onChange={handlePaymentMethodChange}
        >
          <option value="CreditCard">Credit Card</option>
          <option value="PayPal">PayPal</option>
          <option value="BankTransfer">Bank Transfer</option>
        </select>
      </div>
      <p>Selected Payment Method: {selectedPaymentMethod}</p>
    </div>
  );
};

export default PaymentFormWithoutEnums;
