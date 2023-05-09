import PageWrapper from "../components/layout/PageWrapper";
import Delivery from "../components/modules/checkout/Delivery";
import Invoice from "../components/modules/checkout/Invoice";

const Checkout = () => {
    return ( 
        <div>
            <PageWrapper>
                <Delivery />
                <Invoice />
            </PageWrapper>
        </div>
    );
}
 
export default Checkout;