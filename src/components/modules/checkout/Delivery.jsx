import CheckMark from "../../common/CheckMark";

const Delivery = () => {
    return ( 
        <div className="border border-slate-300 bg-white p-4 rounded-[3px]">
            <div className="py-2 rounded-[3px] p-2 px-[6px] flex flex-col gap-y-2">
                <div className="text-gray-700 text-lg font-semibold flex gap-x-2 items-center">
                    <p className="text-xl">Delivery</p>
                    <CheckMark className="w-6 h-6" />
                </div>
                <div className="text-gray-600 text-sm pt-4">
                    <h3 className="text-base font-semibold">Mobile - Free</h3>
                    <p className="text-sm text-[#262626]/65 pt-2">Mobile: Your phone&apos;s your ticket. Locate your tickets in your account - or in your app. When you go mobile, your tickets will not be emailed to you or available for print.</p>
                </div>
            </div>
        </div>
    );
}
 
export default Delivery;