import { getProducts } from "../api/products";
import { useQuery } from "@tanstack/react-query";
import ProductItem from "./ProductItem";

const Products = () => {
  const query = useQuery({ queryKey: ["products"], queryFn: getProducts });

  return (
    <main className="flex flex-wrap justify-center gap-6 py-8 w-3/4">
      {query.data?.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </main>
  );
};

export default Products;
