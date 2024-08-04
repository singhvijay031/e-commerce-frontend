/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h3>{product.name}</h3>
      <p>Rs. {product.price}</p>
      <div>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <div>
        <span>+</span>
        <span>Add to cart</span>
      </div>
    </div>
  );
};

export default ProductCard;
