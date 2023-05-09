import PageWrapper from "./PageWrapper";

const Footer = () => {
    return ( 
        <footer className="bg-[#F7FAFC]/50">
            <PageWrapper>
                <div className="flex">
                    <h1 className="relative text-[#5F6AF6] font-extrabold text-2xl py-4 pr-0 before:content-[''] before:absolute before:left-[60%] before:bottom-[16px] before:-z-10 before:w-[100px] before:h-[10px] before:bg-indigo-300/70 before:transform before:-skew-x-12 before:-translate-x-1/2">
                        Ticket Haul
                    </h1>
                </div>
                <p className="text-gray-500 text-sm">Experience the best shows with Ticket Hall.</p>
            </PageWrapper>
            <div className="my-2 xl:text-center mt-8 border-t border-slate-200 py-4 text-gray-500">
                <PageWrapper>   
                    <p>&copy; {new Date().getFullYear()} Ticket Hall. All rights reserved.</p>
                </PageWrapper>
            </div>
        </footer>
    );
}
 
export default Footer;