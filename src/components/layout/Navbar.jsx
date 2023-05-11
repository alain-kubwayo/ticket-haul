import { Link } from "react-router-dom";
import PageWrapper from "./PageWrapper";
import { useCart } from "../../context/cart";
import { ReactComponent as Cart } from "../../assets/svgs/cart.svg";

const Navbar = () => {
  const { cart } = useCart();
  return (
    <nav>
      <PageWrapper>
        <div className="flex items-center justify-between">
          <Link to="/">
            <h1 className="relative text-[#5F6AF6] font-extrabold text-2xl py-4 pr-0 pl-2 before:content-[''] before:absolute before:left-[40%] before:bottom-[16px] before:-z-10 before:w-[100px] before:h-[10px] before:bg-indigo-300/50 before:transform before:-skew-x-12 before:-translate-x-1/2">
              Ticket Haul
            </h1>
          </Link>
          <Link to={cart?.items?.length ? "/checkout" : "#"}>
            <div className="flex gap-x-2" onClick={() => {
              if(!cart?.items?.length) alert('please add something to cart!')
            }}>
              <div className="w-12 h-12 p-2 bg-gray-200 rounded-full">
                <Cart className="w-full h-full" />
              </div>
              <div>
                <h3 className="font-bold text-gray-700">My Cart</h3>
                <p className="text-gray-500">{cart?.items?.reduce((a, b) => a + b.quantity, 0)} items</p>
              </div>
            </div>
          </Link>
        </div>
      </PageWrapper>
    </nav>
  );
};

export default Navbar;
