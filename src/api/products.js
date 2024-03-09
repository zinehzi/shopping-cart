const URL = "https://fakestoreapi.com";

async function getProducts() {
  const response = await fetch(`${URL}/products`);
  const data = await response.json();
  return data;
}

async function getProduct(id) {
  const response = await fetch(`${URL}/products/${id}`);
  const data = await response.json();
  return data;
}

export { getProducts, getProduct };
