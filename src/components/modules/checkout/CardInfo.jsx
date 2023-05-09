const CardInfo = () => {
    return ( 
        <div className="border border-slate-300 p-4 rounded-[3px] bg-sky-100">
            <div className="flex items-start gap-x-4">
                <input type="radio" checked />
                <div>
                    <div className="flex gap-x-4">
                        <p>VISA</p>
                        <div>
                            <h3 className="font-semibold text-lg">Visa - 9999</h3>
                            <p>User Name | exp. 00/11</p>
                            <div>
                                <a href="#" className="pr-2 border-r border-black text-[#026CDF]">Edit</a> 
                                <a href="#" className="pl-2 text-[#026CDF]">Delete</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <label className="flex flex-col gap-y-1">
                            <span>Security Code</span>
                            <div>
                                <input type="text" className="py-2 pr-8 pl-4 border border-slate-300 outline-none" placeholder="..." />
                            </div>
                        </label>
                        <p className="text-xs">3-digits on back of card</p>
                    </div>
                </div>
            </div>
           
        </div>
    );
}
 
export default CardInfo;