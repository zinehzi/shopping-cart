import { getProduct } from "../api/products";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
  });


  return (
    <div>
      <div className="flex flex-col items-center gap-3 p-4">
        <img src={data?.image} alt={data?.title} className="w-24 h-24"></img>
        <span>{data?.title}</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="font-bold">${data?.price}</span>
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
