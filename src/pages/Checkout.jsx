import PageWrapper from "../components/layout/PageWrapper";
import Delivery from "../components/modules/checkout/Delivery";
import Invoice from "../components/modules/checkout/Invoice";
import Payment from "../components/modules/checkout/Payment";

const Checkout = () => {
    return ( 
        <div>
            <PageWrapper>
                <Delivery />
                <Payment />
                <Invoice />
            </PageWrapper>
        </div>
    );
}
 
export default Checkout;