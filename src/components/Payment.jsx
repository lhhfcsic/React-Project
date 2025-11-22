import React, { useState } from "react";

const Payment = () => {
  const [form, setForm] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment submitted! (This is a demo.)");
    // Integrate with payment gateway here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Payment Details</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Card Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Card Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-gray-700">Name on Card</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={form.cardNumber}
                  onChange={handleChange}
                  required
                  maxLength={16}
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700">Expiry Date</label>
                <input
                  type="text"
                  name="expiry"
                  value={form.expiry}
                  onChange={handleChange}
                  required
                  maxLength={5}
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700">CVC/CVV</label>
                <input
                  type="password"
                  name="cvc"
                  value={form.cvc}
                  onChange={handleChange}
                  required
                  maxLength={4}
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="123"
                />
              </div>
            </div>
          </div>
          {/* Billing Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Billing Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="123 Main St"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="City"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700">State</label>
                <input
                  type="text"
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="State"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700">ZIP/Postal Code</label>
                <input
                  type="text"
                  name="zip"
                  value={form.zip}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="ZIP"
                />
              </div>
            </div>
          </div>
          {/* Order Summary */}
          <div className="bg-gray-50 border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
            <div className="flex justify-between items-center mb-1">
              <span>Product Name</span>
              <span>$49.99</span>
            </div>
            <div className="flex justify-between items-center mb-1">
              <span>Shipping</span>
              <span>$4.99</span>
            </div>
            <div className="border-t my-2"></div>
            <div className="flex justify-between items-center font-bold">
              <span>Total</span>
              <span>$54.98</span>
            </div>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;