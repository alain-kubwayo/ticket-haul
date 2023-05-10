import { useForm } from 'react-hook-form';
import { ReactComponent as Diners } from '../../../assets/svgs/diners.svg';
import { ReactComponent as Maestro } from '../../../assets/svgs/maestro.svg';
import { ReactComponent as MasterCard } from '../../../assets/svgs/mastercard.svg';
import { ReactComponent as Discover } from '../../../assets/svgs/discover.svg';
import { ReactComponent as Visa } from '../../../assets/svgs/visa.svg';
import { ReactComponent as AmericanExpress } from '../../../assets/svgs/american-express.svg';
import { ReactComponent as AtmCard } from '../../../assets/svgs/card.svg';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import { useState } from 'react';



const PaymentForm = ({ setFormData, setIsOpenPaymentForm, formData }) => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const { meta, getCardNumberProps, getCardImageProps, getExpiryDateProps, getCVCProps, wrapperProps } = usePaymentInputs();
    const [country, setCountry] = useState(formData.country);
    const [cardInfo, setCardInfo] = useState({
        cardNumber: formData.cardNumber,
        expiryDate: formData.expiryDate,
        cvc: formData.cvc
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setCardInfo({
            ...cardInfo,
            [name]: value
        })
    }

    const handlePaymentFormSubmit = (data) => {
        if(meta.error !== undefined) return;
        setFormData({...data, ...cardInfo})
        setIsOpenPaymentForm(false);
    }

    const handleSelectCountry = e => setCountry(e.target.value);

    console.log('paymentform:', formData);
    

    return ( 
        <form onSubmit={handleSubmit(handlePaymentFormSubmit)}>
            <div className="flex mt-2 mb-4">
                <AmericanExpress className="w-8 h-6 mt-1 mr-2" />
                <Visa className="w-8 h-6 mt-1 mr-2" />
                <MasterCard className="w-8 h-6 mt-1 mr-2" />
                <Discover className="w-8 h-6 mt-1 mr-2" />
                <Diners className="w-8 h-6 mt-1 mr-2" />
                <Maestro className="w-8 h-6 mt-1 mr-2" />
            </div>
            <label className="flex flex-col gap-y-1">
                <span>Name on Card</span>
                <input 
                    type="text" 
                    name="cardName" 
                    defaultValue={formData.cardName}
                    className="py-2 pl-4 pr-8 border outline-none border-slate-300"
                    {...register('cardName', { required: "Card name is required" })} 
                />
                {errors.cardName && 
                    <p className="text-red-400">{errors.cardName.message}</p>
                }
            </label>
            <label className="flex flex-col gap-y-1">
                <span>Card Number</span>
                <PaymentInputsWrapper {...wrapperProps}> 
                    
                    <svg {...getCardImageProps({images}) } />
                    <input 
                        type="text" 
                        className="py-2 pl-4 pr-8 border outline-none border-slate-300" 
                        name="cardNumber"
                        value={cardInfo.cardNumber}
                        defaultValue={formData.cardNumber}
                        {...getCardNumberProps({ onChange: handleChange })}
                    />
                </PaymentInputsWrapper>
            </label>
            <div className="flex items-end gap-x-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-2">
                    <label className="flex flex-col w-1/3 gap-y-1">
                        <span>Expiration Date</span>
                        <input 
                            type="text" 
                            placeholder="MM/YY" 
                            className="py-2 pl-4 pr-8 border outline-none border-slate-300"
                            name="expiryDate"
                            value={cardInfo.expiryDate}
                            defaultValue={formData.expiryDate}
                            {...getExpiryDateProps({ onChange: handleChange })}
                        />
                       
                    </label>
                    <label className="flex flex-col w-1/2 gap-y-1">
                        <span>Security Code</span>
                        <input 
                            type="text" 
                            placeholder="CVV" 
                            name="cvc"
                            value={cardInfo.cvc}
                            defaultValue={formData.cvc}
                            className="py-2 pl-4 pr-8 border outline-none border-slate-300"
                            {...getCVCProps({ onChange: handleChange })}
                        />
                    </label>
                </div>
                <div className="flex items-center text-xs bg-sky-700">
                    <AtmCard />
                    <p>3-digits on back of card</p>
                </div>
            </div>
            <label className="flex flex-col gap-y-1">
                <span>Country</span>
                <select 
                    className="py-2 pl-4 pr-8 border outline-none border-slate-300"
                    name="country"
                    value={country}
                    defaultValue={formData.country}
                    {...register('country', { validate: () => Boolean(country) || 'Country is required'})}
                    onChange={handleSelectCountry}
                >
                    <option value=""></option>
                    <option value="US">US</option>
                    <option value="RW">Rwanda</option>
                    <option value="IN">India</option>
                    <option value="BU">Burundi</option>
                </select>
                {errors.country && !country && 
                    <p className="text-red-400">{errors.country.message}</p>
                }
            </label>
            <div>
                <label className="flex flex-col gap-y-1">
                    <span>Address</span>
                    <div className="flex flex-col lg:flex-row lg:items-center">
                        <input 
                            type="text" 
                            name="address"
                            defaultValue={formData.address}
                            className="py-2 pl-4 pr-8 border outline-none border-slate-300"
                            {...register('address', { required: "Please your billing address" })}
                        />
                         {errors.address && 
                            <p className="text-red-400">{errors.address.message}</p>
                        }
                        <div className="text-sm text-[#026CDF] cursor-pointer">+ Add Unit # / Address Line 2</div>
                        {/* <label className="flex flex-col gap-y-1">
                            <span>Address 2 (Optional)</span>
                            <input type="text" className="py-2 pl-4 pr-8 border outline-none border-slate-300" />
                        </label> */}
                    </div>
                </label>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-x-1">
                    <label className="flex flex-col w-full gap-y-1">
                        <span>City</span>
                        <input 
                            type="text" 
                            name="city"
                            defaultValue={formData.city}
                            className="py-2 pl-4 pr-8 border outline-none border-slate-300" 
                            {...register('city', { required: "Please add your city" })}
                        />
                    </label>
                    {errors.city && 
                        <p className="text-red-400">{errors.city.message}</p>
                    }
                    <label className="flex flex-col w-full gap-y-1">
                        <span>Postal Code</span>
                        <input 
                            type="text" 
                            name="postalCode"
                            defaultValue={formData.postalCode}
                            className="py-2 pl-4 pr-8 border outline-none border-slate-300"
                            {...register('postalCode', { required: "Please add postal code" })}
                        />
                        {errors.postalCode && 
                            <p className="text-red-400">{errors.postalCode.message}</p>
                        } 
                    </label>
                </div>
                <label className="flex flex-col gap-y-1">
                    <span>Phone Number</span>
                    <input 
                        type="text" 
                        name="phoneNumber"
                        defaultValue={formData.phoneNumber}
                        className="py-2 pl-4 pr-8 border outline-none border-slate-300"
                        {...register('phoneNumber', { required: "Please add your phone number" })}
                    />
                    {errors.phoneNumber && 
                        <p className="text-red-400">{errors.phoneNumber.message}</p>
                    } 
                </label>
            </div>
            <label className="flex items-center gap-x-2">
                <input type="checkbox" />
                <span>Save this card for future purchases</span>
            </label>
            <p className="mb-4 text-xs">Set as a primary card for:</p>
            <label className="flex items-center gap-x-2">
                <input type="checkbox" />
                <span>Payment</span>
            </label>
            <p className="pl-8 mb-2 text-xs">Set as a primary card for:</p>
            <div className="flex justify-center lg:justify-end gap-x-4">
                <button>Cancel</button>
                <button className="hover:bg-[#026CDF]/50 bg-[#026CDF] py-2 px-4 text-white rounded-sm text-base">Add New Card</button>
            </div>
        </form>
    );
}
 
export default PaymentForm;