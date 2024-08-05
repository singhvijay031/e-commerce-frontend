import { useSelector } from "react-redux";
import EmptyCart from "../assets/images/emptycart1.png";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      {cart.products.length > 0 ? (
        <div>
          <h3>SHOPPING CART</h3>
          <div>
            <div>
              <div>
                <p>PRODUCTS</p>
                <div>
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>
              <div>
                {cart.products.map((product, index) => (
                  <div key={index}>
                    <div>
                      <img src={product.image} alt="" />
                      <div>
                        <h3>{product.name}</h3>
                      </div>
                    </div>
                    <div>
                      <p>Rs.{product.price}</p>
                      <div className=" flex">
                        <button>-</button>
                        <p>{product.quantity}</p>
                        <button>+</button>
                      </div>
                      <p>Rs.{(product.quantity * product.price).toFixed(2)}</p>
                      <button>
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex justify-center">
          <img src={EmptyCart} alt="empty-cart" className=" h-96" />
        </div>
      )}
    </div>
  );
};

export default Cart;
