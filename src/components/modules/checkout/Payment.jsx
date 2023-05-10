import Add from "../../common/Add";
import ArrowLeft from "../../common/ArrowLeft";
import { ReactComponent as PayPalSlogan } from "../../../assets/svgs/paypal-slogan.svg";
import CardInfo from "./CardInfo";
import PaymentForm from "./PaymentForm";
import CheckMark from "../../common/CheckMark";
import { ReactComponent as PayPal } from "../../../assets/svgs/paypal.svg";
import { ReactComponent as Klarna } from "../../../assets/svgs/klarna.svg";
import { useState } from "react";

const Payment = () => {
  const [isOpenPaymentForm, setIsOpenPaymentForm] = useState(false);
  const [formData, setFormData] = useState(null)

  const handleClick = () => {
    setIsOpenPaymentForm(true);
  };

  console.log(formData);


  return (
    <div className="border border-slate-300 bg-white p-4 rounded-[3px]">
      <div className="py-2 rounded-[3px] p-2 px-[6px] flex flex-col gap-y-2">
        <div className="flex flex-col items-center mb-4 text-lg font-semibold text-gray-700 md:flex-row md:justify-between md:mb-0">
          <div className="flex items-center text-lg font-semibold text-gray-700 gap-x-2">
            <p className="text-xl">Payment</p>
            <CheckMark className="w-6 h-6" />
          </div>
          <PayPalSlogan />
        </div>
        <h2 className="px-4 pt-0 pb-4 text-base font-semibold">
          Use Credit / Debit Card
        </h2>
        <div className="lg:px-4">
          <a href="#" className="flex items-center mb-4 md:mb-0" onClick={()=>setIsOpenPaymentForm(false)}>
            <ArrowLeft />
            <p className="text-[#026CDF] ml-1">Back to Stored Cards</p>
          </a>
          {isOpenPaymentForm && <PaymentForm setFormData={setFormData} formData={formData} setIsOpenPaymentForm={setIsOpenPaymentForm} />}
        </div>
        <div>
          <CardInfo formData={formData} setIsOpenPaymentForm={setIsOpenPaymentForm} />
          {!isOpenPaymentForm && (
            <div className="flex items-center pb-6 border-b border-slate-200">
              <Add />
              <div
                className="text-base text-[#026CDF] font-semibold ml-4 cursor-pointer"
                onClick={handleClick}
              >
                Add New Card
              </div>
            </div>
          )}
        </div>
        {!isOpenPaymentForm && (
          <div className="px-4 pt-6 text-sm">
            <h2 className="pt-0 pb-4 text-base font-semibold">Or Pay With</h2>
            <div className="flex gap-x-4">
              <button className="bg-[#ffc439] flex items-center justify-center px-10 py-2 rounded-md">
                <PayPal className="w-12 h-auto" />
              </button>
              <button className="bg-[#FFB3C7] flex items-center justify-center px-4 py-1 rounded-md">
                <Klarna className="w-24 h-auto" />
              </button>
            </div>
            <p className="pt-6 font-semibold">
              Pay in full or split up your payments with buy now, pay later
              options from PayPal or Klarna.
            </p>
            <p>
              By using a digital wallet and continuing past this page, you have
              read and are accepting the{" "}
              <span className="text-[#026CDF]">Terms of Use</span>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
