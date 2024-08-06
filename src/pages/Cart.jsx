import { useSelector } from "react-redux";
import EmptyCart from "../assets/images/emptycart1.png";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Modal from "../components/Modal";
import ChangeAddress from "../components/ChangeAddress";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("kathmandu-32");
  const [isModelOpen, setIsModelOpen] = useState(false);

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                <p>PRODUCT</p>
                <div className=" flex space-x-8">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>
              <div>
                {cart.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-3 border-b"
                  >
                    <div className="flex items-center space-x-4 w-2/5">
                      <img
                        src={product.image}
                        alt={product.image}
                        className="w-16 h-16 object-contain rounded"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    <div className="flex w-3/5 justify-between items-center">
                      <p className="w-1/4">Rs. {product.price}</p>
                      <div className="flex items-center justify-center border w-1/4">
                        <button className="text-xl font-bold px-1.5 border-r">
                          -
                        </button>
                        <p className="text-xl px-2">{product.quantity}</p>
                        <button className="text-xl px-1 border-l">+</button>
                      </div>
                      <p className="w-1/4">
                        Rs. {(product.quantity * product.price).toFixed(2)}
                      </p>
                      <button className="text-red-500 hover:text-red-700">
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/3 bg-white p-8 rounded-lg shadow-md border mt-6 md:mt-0 md:ml-10">
              <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">Total Items:</span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className="mb-4 border-b pb-2">
                <p>Shipping:</p>
                <div>
                  <span>Shipping to:</span>
                  <span className="text-xs font-bold">{address}</span>
                  <button
                    className="text-blue-500 hover:underline mt-1 ml-2"
                    onClick={() => setIsModelOpen(true)}
                  >
                    Change Address
                  </button>
                </div>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total Price:</span>
                <span>Rs. {cart.totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-red-600 text-white py-2 hover:bg-red-800">
                Proceed To Checkout
              </button>
            </div>
          </div>
          <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
            <ChangeAddress
              setAddress={setAddress}
              setIsModelOpen={setIsModelOpen}
            />
          </Modal>
        </div>
      ) : (
        <div className="flex justify-center">
          <img src={EmptyCart} alt="empty-cart" className="h-96" />
        </div>
      )}
    </div>
  );
};

export default Cart;
