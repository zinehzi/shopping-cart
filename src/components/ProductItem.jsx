import { Link } from "react-router-dom";

const ProductDetail = ({product}) => {
  return (
    <div className="flex flex-col justify-between w-5/12 shadow-md rounded-md overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <div className="flex flex-col items-center gap-3 p-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-24 h-24"
          ></img>
          <span>{product.title}</span>
        </div>
      </Link>
      <div className="flex flex-col items-center gap-2">
        <span className="font-bold">${product.price}</span>
        <button
          type="button"
          className="flex items-center justify-center gap-2 py-2 bg-gray-300 w-full"
        >
          <img src="../../src/assets/images/cart.png" className="w-4 h-4" />
          <span>Add To Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
