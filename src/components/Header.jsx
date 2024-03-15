import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const links = [
  { title: "homepage", pathname: "/" },
  { title: "about", pathname: "/about" },
  { title: "contact", pathname: "/contact" },
];

const Header = () => {
  const totalQ = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="flex items-center justify-between py-5 px-3 bg-red-100">
      <div className="flex items-center gap-x-6">
        <span className="text-lg font-bold">OnlineShop</span>
        <ul className="flex gap-3 text-lg">
          {links.map((link, index) => {
            return (
              <Link to={link.pathname} key={index}>
                {link.title}
              </Link>
            );
          })}
        </ul>
      </div>
      <Link to="/checkout">
        <div className="relative">
          <img src="../../src/assets/images/cart.png" />
          <span className="bg-white rounded-full px-2 absolute top-2 right-4 font-semibold">
            {totalQ ? totalQ : ""}
          </span>
        </div>
      </Link>
    </header>
  );
};

export default Header;
