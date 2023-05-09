import Add from '../../common/Add';
import ArrowLeft from '../../common/ArrowLeft';
import { ReactComponent as PayPalSlogan } from '../../../assets/svgs/paypal-slogan.svg';
import CardInfo from './CardInfo';
import PaymentForm from './PaymentForm';
import CheckMark from "../../common/CheckMark";
import { ReactComponent as PayPal } from '../../../assets/svgs/paypal.svg';
import { ReactComponent as Klarna } from '../../../assets/svgs/klarna.svg';




const Payment = () => {
    return ( 
        <div className="border border-slate-300 bg-white p-4 rounded-[3px]">
            <div className="py-2 rounded-[3px] p-2 px-[6px] flex flex-col gap-y-2">
                <div className="text-gray-700 text-lg font-semibold flex flex-col md:flex-row md:justify-between items-center mb-4 md:mb-0">
                <div className="text-gray-700 text-lg font-semibold flex gap-x-2 items-center">
                    <p className="text-xl">Payment</p>
                    <CheckMark className="w-6 h-6" />
                </div>
                    <PayPalSlogan />
                </div>
                <div className="lg:px-4">
                    <a href="#" className="flex items-center mb-4 md:mb-0">
                        <ArrowLeft />
                        <p className="text-[#026CDF] ml-1">Back to Stored Cards</p>
                    </a>
                    <PaymentForm />
                </div>
                <div>
                    <h2 className="text-base font-semibold pt-0 pb-4 px-4">Use Credit / Debit Card</h2>
                    <CardInfo />
                    <div className="flex items-center pb-6 border-b border-slate-200">
                        <Add />
                        <div className="text-base text-[#026CDF] font-semibold ml-4 cursor-pointer">Add New Card</div>
                    </div>
                </div>
                <div className="text-sm pt-6 px-4">
                    <h2 className="text-base font-semibold pt-0 pb-4">Or Pay With</h2>
                    <div className="flex gap-x-4">
                        <button className="bg-[#ffc439] flex items-center justify-center px-10 py-2 rounded-md">
                            <PayPal className="w-12 h-auto" />
                        </button>
                        <button className="bg-[#FFB3C7] flex items-center justify-center px-4 py-1 rounded-md">
                            <Klarna className="w-24 h-auto" />
                        </button>
                    </div>
                    <p className="font-semibold pt-6">Pay in full or split up your payments with buy now, pay later options from PayPal or Klarna.</p>
                    <p>By using a digital wallet and continuing past this page, you have read and are accepting the <span className="text-[#026CDF]">Terms of Use</span>.</p>
                </div>
            </div>
        </div>
    );
}
 
export default Payment;