const PaymentForm = () => {
    return ( 
        <form>
            <label className="flex flex-col gap-y-1">
                <span>Name on Card</span>
                <input type="text" className="py-2 pr-8 pl-4 border border-slate-300 outline-none" />
            </label>
            <label className="flex flex-col gap-y-1">
                <span>Card Number</span>
                <input type="text" className="py-2 pr-8 pl-4 border border-slate-300 outline-none" />
            </label>
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-2">
                <label className="flex flex-col gap-y-1">
                    <span>Expiration Date</span>
                    <input type="text" placeholder="MM/YY" className="py-2 pr-8 pl-4 border border-slate-300 outline-none" />
                </label>
                <label className="flex flex-col gap-y-1">
                    <span>Security Code</span>
                    <input type="text" placeholder="CVV" className="py-2 pr-8 pl-4 border border-slate-300 outline-none" />
                </label>
                <div className="text-xs">
                    3-digits on back of card
                </div>
            </div>
            <label className="flex flex-col gap-y-1">
                <span>Country</span>
                <select className="py-2 pr-8 pl-4 border border-slate-300 outline-none">
                    <option value=""></option>
                    <option value="">US</option>
                    <option value="">Rwanda</option>
                    <option value="">India</option>
                    <option value="">Burundi</option>
                </select>
            </label>
            <div>
                <label className="flex flex-col gap-y-1">
                    <span>Address</span>
                    <div className="flex flex-col lg:flex-row lg:items-center">
                        <input type="text" className="py-2 pr-8 pl-4 border border-slate-300 outline-none" />
                        <div className="text-sm text-[#026CDF] cursor-pointer">+ Add Unit # / Address Line 2</div>
                        {/* <label className="flex flex-col gap-y-1">
                            <span>Address 2 (Optional)</span>
                            <input type="text" className="py-2 pr-8 pl-4 border border-slate-300 outline-none" />
                        </label> */}
                    </div>
                </label>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-x-1">
                    <label className="flex flex-col gap-y-1 w-full">
                        <span>City</span>
                        <input type="text" className="py-2 pr-8 pl-4 border border-slate-300 outline-none" />
                    </label>
                    <label className="flex flex-col gap-y-1 w-full">
                        <span>Postal Code</span>
                        <input type="text" className="py-2 pr-8 pl-4 border border-slate-300 outline-none" />
                    </label>
                </div>
                <label className="flex flex-col gap-y-1">
                    <span>Phone Number</span>
                    <input type="text" className="py-2 pr-8 pl-4 border border-slate-300 outline-none" />
                </label>
            </div>
            <label className="flex items-center gap-x-2">
                <input type="checkbox" />
                <span>Save this card for future purchases</span>
            </label>
            <p className="text-xs mb-4">Set as a primary card for:</p>
            <label className="flex items-center gap-x-2">
                <input type="checkbox" />
                <span>Payment</span>
            </label>
            <p className="text-xs pl-8 mb-2">Set as a primary card for:</p>
            <div className="flex justify-center lg:justify-end gap-x-4">
                <button>Cancel</button>
                <button className="hover:bg-[#026CDF]/50 bg-[#026CDF] py-2 px-4 text-white rounded-sm text-base">Add New Card</button>
            </div>
        </form>
    );
}
 
export default PaymentForm;