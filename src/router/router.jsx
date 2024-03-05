import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import App from "../App";
import Layout from "../components/Layout";
import Checkout from "../components/Checkout";
import ProductSinglePage from "../components/ProductSinglePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: ":id",
        element: <ProductSinglePage />,
      },
    ],
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);

export default router;
