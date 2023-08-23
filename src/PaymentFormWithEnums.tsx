import React, { useState } from "react";
import { PaymentMethod } from "./enum";

const PaymentFormWithEnums: React.FC = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethod>(PaymentMethod.CreditCard);

  const handlePaymentMethodChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedMethod = event.target.value as PaymentMethod;
    setSelectedPaymentMethod(selectedMethod);
  };

  return (
    <div>
      <h2>Payment Form (With Enums)</h2>
      <div>
        <label htmlFor="paymentMethod">Select Payment Method:</label>
        <select
          id="paymentMethod"
          value={selectedPaymentMethod}
          onChange={handlePaymentMethodChange}
        >
          {Object.values(PaymentMethod).map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
      </div>
      <p>Selected Payment Method: {selectedPaymentMethod}</p>
    </div>
  );
};

export default PaymentFormWithEnums;
