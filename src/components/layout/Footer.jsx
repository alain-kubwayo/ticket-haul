import PageWrapper from "./PageWrapper";
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer className="bg-primary-50/50">
            <PageWrapper>
                <div className="flex">
                    <Link to="/" className="relative text-primary-100 font-extrabold text-2xl py-4 pr-0 before:content-[''] before:absolute before:left-[60%] before:bottom-4 before:-z-10 before:w-25 before:h-2.5 before:bg-indigo-300/70 before:transform before:-skew-x-12 before:-translate-x-1/2">
                        Ticket Haul
                    </Link>
                </div>
                <p className="text-sm text-gray-500">Experience the best shows with Ticket Hall.</p>
            </PageWrapper>
            <div className="py-4 my-2 mt-8 text-gray-500 border-t xl:text-center border-slate-200">
                <PageWrapper>   
                    <p>&copy; {new Date().getFullYear()} Ticket Hall. All rights reserved.</p>
                </PageWrapper>
            </div>
        </footer>
    );
}
 
export default Footer;