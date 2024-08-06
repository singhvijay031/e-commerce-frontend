import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const CheckOut = () => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState();

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">CHECK OUT</h3>
      <div className="flex flex-col md:flex-row justify-between mt-8">
        <div className="md:w-2/3">
          <div className="border p-6 mb-6 rounded-lg shadow-md">
            <div
              className="flex items-center justify-between mb-4 cursor-pointer"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="text-lg font-semibold">Billing Information</h3>
              {billingToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter Phone Number"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="border p-6 mb-6 rounded-lg shadow-md">
            <div
              className="flex items-center justify-between mb-4 cursor-pointer"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="text-lg font-semibold">Shipping Information</h3>
              {shippingToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Address"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter City Name"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700">Zip Code</label>
                <input
                  type="text"
                  name="zip"
                  placeholder="Enter Zip Code"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="border p-6 mb-6 rounded-lg shadow-md">
            <div
              className="flex items-center justify-between mb-4 cursor-pointer"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="text-lg font-semibold">Payment Method</h3>
              {paymentToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="card"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                  className="mr-2"
                />
                <label htmlFor="card" className="text-gray-700">
                  Credit/Debit Card
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="cod"
                  name="paymentMethod"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                  className="mr-2"
                />
                <label htmlFor="cod" className="text-gray-700">
                  Cash On Delivery
                </label>
              </div>

              {paymentMethod === "card" && (
                <>
                  <div>
                    <label className="block text-gray-700">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Enter Card Number"
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      name="expirationDate"
                      placeholder="MM/YY"
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      placeholder="Enter CVV"
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Name on Card</label>
                    <input
                      type="text"
                      name="cardName"
                      placeholder="Enter Name on Card"
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="md:w-1/3 bg-white p-8 rounded-lg shadow-md border mt-6 md:mt-0 md:ml-10"></div>
      </div>
    </div>
  );
};

export default CheckOut;
