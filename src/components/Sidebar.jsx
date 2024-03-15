import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="flex flex-col w-2/6 border border-l pt-4 h-full">
      <ul className="p-4">
        <li>product1</li>
        <li>product2</li>
      </ul>
      <div className="p-4 font-semibold">
        <span>Total Price :</span>
        <span> 200$</span>
      </div>
      <Link to="/checkout">
        <button
          type="button"
          className="flex items-center justify-center gap-2 py-2 bg-gray-300 w-full"
        >
          <img src="../../src/assets/images/cart.png" className="w-6 h-6" />
          <span className="font-semibold">Ready For Checkout</span>
        </button>
      </Link>
    </aside>
  );
};

export default Sidebar;
