import { ReactComponent as Checkmark } from '../../assets/svgs/checkmark.svg';
import { Link } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

const Modal = ({ paymentProcessing }) => {
    return ( 
        <div className="fixed top-0 left-0 w-full h-full bg-black/50">
            <div className="px-6 py-2 from-[#F0BDDA] to-[#C8F4F1] bg-gradient-to-b w-11/12 lg:max-w-[600px] mt-[40%] md:mt-[30%] lg:mt-[20%] mx-auto bg-white rounded-xl">
                <h1 className="text-2xl font-semibold text-center text-gray-600 uppercase">{paymentProcessing ? 'Payment Processing...' : 'Paymen Processed!'}</h1>
                
                <p className="flex justify-center">
                {paymentProcessing ? (
                    <Oval
                        height={72}
                        width={72}
                        color="#4fa94d"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor="#4fa94d"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                    /> ): (
                    <Checkmark className="w-20 h-20" />)
                }
                </p>
                <div className="flex items-center justify-center">
                    <Link to="/" className="">View Upcoming Shows</Link>
                </div>
            </div>

        </div>
    );
}
 
export default Modal;