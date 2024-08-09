import { useEffect, useState } from "react";
import { FaCarSide, FaQuestion } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const newProduct = products.find((product) => product.id === parseInt(id));
    setProduct(newProduct);
  }, [id, products]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto py-4 px-4 md:px-8 lg:px-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="md:w-1/2 h-72 flex justify-center items-center border rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full object-contain"
          />
        </div>

        {/* Product Information */}
        <div className="md:w-1/2 flex flex-col justify-between gap-y-2 p-4 border rounded-lg">
          <div>
            <h2 className="text-2xl font-semibold">{product.name}</h2>
            <p className="text-lg text-red-600 font-semibold mt-2">
              Rs. {product.price}
            </p>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <input
              id="quantity"
              type="number"
              className="border p-1 w-16"
              defaultValue="1"
            />
            <button className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-800">
              Add to Cart
            </button>
          </div>

          <div className="flex flex-col gap-y-4 mt-4">
            <p className="flex items-center text-gray-700">
              <FaCarSide className="mr-2" />
              Delivery & Return
            </p>
            <p className="flex items-center text-gray-700">
              <FaQuestion className="mr-2" />
              Ask a Question
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Product Description</h3>
        <p className="text-gray-600 mt-2">Product Description Goes Here...</p>
      </div>
    </div>
  );
};

export default ProductDetail;
