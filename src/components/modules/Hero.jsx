import PageWrapper from "../layout/PageWrapper";
import someImage from '../../assets/show-1.jpeg';

const Hero = () => {
    return ( 
        <div className="bg-[#F7FAFC] py-10">
            <PageWrapper>
                <div className="grid md:grid-cols-2 md:gap-y-0 gap-y-8 grid-cols-1 gap-x-20 items-center">
                    <div>
                        <h1 className="font-bold text-3xl mb-4 text-gray-600">Buy ticket(s) to your favorite <br />
                            <div className="flex items-center">
                                <span className="text-[#5F6AF6]">shows</span>
                                <div className="h-2 w-2 ml-0.5 bg-[#5F6AF6] -mb-3"></div>
                            </div>
                        </h1>
                        <p>You can begin by selecting as many shows as you want from the following list of upcoming shows and with your basic information, we will take care of the rest.</p>
                    </div>
                    <div>
                        <img src={someImage} alt="Show" className="rounded-md" />
                    </div>
                </div>
            </PageWrapper>
        </div>
    );
}
 
export default Hero;