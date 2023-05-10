import { Link } from "react-router-dom";
import PageWrapper from "./PageWrapper";
import { useCart } from "../../context/cart";

const Navbar = () => {
  const { cart } = useCart();
  return (
    <nav>
      <PageWrapper>
        <div className="flex justify-between items-center">
          <Link to="/">
            <h1 className="relative text-[#5F6AF6] font-extrabold text-2xl py-4 pr-0 pl-2 before:content-[''] before:absolute before:left-[40%] before:bottom-[16px] before:-z-10 before:w-[100px] before:h-[10px] before:bg-indigo-300/50 before:transform before:-skew-x-12 before:-translate-x-1/2">
              Ticket Haul
            </h1>
          </Link>
          <div>
            <Link
              to="/checkout"
              className="bg-[#5F6AF6] py-1 px-4 text-white rounded-md"
            >
              Cart
            </Link>
            <span>{cart?.items?.reduce((a, b) => a + b.quantity, 0)}</span>
          </div>
        </div>
      </PageWrapper>
    </nav>
  );
};

export default Navbar;
