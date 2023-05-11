import { useState } from "react";
import { useCart } from "../../../context/cart";
import { ArrowDown, ArrowUp } from "../../common/ArrowUp";
import { usePayment } from "../../../context/payment";
import { useNavigate } from "react-router-dom";
import Modal from "../../common/Modal";

const Invoice = () => {
  const navigate = useNavigate()
  const { cart ,setcart} = useCart();
  const {setPayment, payment}=usePayment()
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [showModal, setShowModal] = useState(false);


  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const handleChecked = () => {
    setIsChecked(!isChecked);
  }

  const total = 
    cart?.items
      .map((e) => ({ ...e, subTotal: e.quantity * e.price }))
      ?.reduce((a, b) => a + b.subTotal, 0) || 0;

  const handlePlaceOrder = () => {
    if(!isChecked || !payment?.length )return;
    setPaymentProcessing(true);
    setShowModal(true);
    setTimeout(() => {
      setPaymentProcessing(false);
    }, 3000)

    setTimeout(() => {
      setShowModal(false);
      setPayment(localStorage.clear())
      setcart(localStorage.clear())
      navigate('/')
    }, 5000)
  }

  

  return (
    <>
    {showModal && <Modal paymentProcessing={paymentProcessing} />}
    <div className="mt-6 lg:mt-0">
      <div className="border border-slate-300 bg-white py-6 rounded-[3px]">
        <div className="py-2 rounded-[3px] p-2 px-4 flex flex-col gap-y-2">
          <div className="flex items-center justify-between text-xl font-semibold text-gray-700">
            {paymentProcessing && <div>Loading...</div>}
            <h3>Total</h3>
            <div className="flex items-center gap-x-1">
              <p>${total.toFixed(2)}</p>
              <button onClick={handleClick}>
                {isOpen ? <ArrowUp /> : <ArrowDown />}
              </button>
            </div>
          </div>
          {isOpen && (
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
          )}

          <div className="flex flex-col text-sm gap-y-3">
            <p>*All Sales Final - No Refunds or Exchanges</p>
            <div className="flex items-center gap-x-1">
              <input 
                type="checkbox" 
                checked={isChecked}
                onChange={handleChecked}
              />
              <label>
                I have read and agree to the current{" "}
                <span className="text-[#026CDF]">Terms of Use</span>.
              </label>
            </div>
            <button 
              onClick={handlePlaceOrder}
              className={`px-3.5 py-2  text-base text-white rounded-sm ${isChecked && payment?.length ? "bg-[#148016]":'bg-[#148016]/40 cursor-not-allowed'}`}
              disabled={!isChecked}
            >
              Place Order
            </button>
            <p className="text-[10px] font-semibold">
              *Exceptions may apply, see our Terms of Use.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Invoice;
