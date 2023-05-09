import { useCart } from "../../../context/cart";
import { ArrowDown } from "../../common/ArrowUp";

const Invoice = () => {
  const { cart } = useCart();

  const total = cart?.items?.reduce((a, b) => a + b.price, 0) || 0;

  console.log(total)
  return (
    <div className="mt-6 lg:mt-0">
      <div className="border border-slate-300 bg-white py-6 rounded-[3px]">
        <div className="py-2 rounded-[3px] p-2 px-4 flex flex-col gap-y-2">
          <div className="text-gray-700 text-xl font-semibold flex justify-between items-center">
            <h3>Total</h3>
            <div className="flex gap-x-1 items-center">
              <p>${total}</p>
              <button>
                <ArrowDown />
              </button>
            </div>
          </div>
          <div>
            <div>
              <h4 className="mb-2 text-base font-semibold">Tickets</h4>
              <div className="flex justify-between text-sm">
                <p>Verified Resale Tickets: $190.00 x 4</p>
                <p>$760.00</p>
              </div>
            </div>
            <div>
              <h4 className="mb-2 text-base font-semibold">Fees</h4>
              <div className="flex justify-between text-sm">
                <p>Service Fee: $36.10 x 4</p>
                <p>$144.40</p>
              </div>
              <div className="flex justify-between text-sm">
                <p>Order Processing Fee</p>
                <p>$2.95</p>
              </div>
            </div>
            <a href="#" className="text-[#026CDF] text-sm font-semibold">
              Cancel Order
            </a>
          </div>
          <div className="text-sm flex flex-col gap-y-3">
            <p>*All Sales Final - No Refunds or Exchanges</p>
            <div className="flex items-center gap-x-1">
              <input type="checkbox" />
              <label>
                I have read and agree to the current{" "}
                <span className="text-[#026CDF]">Terms of Use</span>.
              </label>
            </div>
            <button className="px-3.5 py-2 bg-[#148016] text-base text-white rounded-sm">
              Place Order
            </button>
            <p className="text-[10px] font-semibold">
              *Exceptions may apply, see our Terms of Use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
