import { ReactComponent as Diners } from "../../../assets/svgs/diners.svg";
import { ReactComponent as Maestro } from "../../../assets/svgs/maestro.svg";
import { ReactComponent as MasterCard } from "../../../assets/svgs/mastercard.svg";
import { ReactComponent as Discover } from "../../../assets/svgs/discover.svg";
import { ReactComponent as Visa } from "../../../assets/svgs/visa.svg";
import { ReactComponent as AmericanExpress } from "../../../assets/svgs/american-express.svg";
import { ReactComponent as AtmCard } from "../../../assets/svgs/card.svg";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";
import { usePayment } from "../../../context/payment";
import { useForm } from "react-hook-form";

const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const {
    getCardNumberProps,
    getCardImageProps,
    getExpiryDateProps,
    getCVCProps,
    wrapperProps,
    meta
  } = usePaymentInputs();

  const {
    onSubmitPayement,
    handlePayementFormInput,
    // cardInfo,
    country,
    handleNoPayementFormInputs,
    setIsOpenPaymentForm,
    setCardInfo,
    cardToEdit,
  } = usePayment();

  // console.log(meta.erroredInputs.cardNumber);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        if (meta.error !== undefined) return;
        setIsOpenPaymentForm(false);
        console.log({cardToEdit})
        onSubmitPayement({ ...data, id: cardToEdit.id });
        // setCardInfo({
        //   cardNumber: "",
        //   expiryDate: "",
        //   cvc: "",
        // });
      })}
    >
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
          // defaultValue={cardToEdit?.cardName || ""}
          className="py-2 pl-4 pr-8 border outline-none border-slate-300"
          {...register("cardName", {
            value: cardToEdit?.cardName || "",
            required: "Card name is required",
          })}
        />
        {errors.cardName && (
          <p className="text-red-400">{errors.cardName.message}</p>
        )}
      </label>
      <label className="flex flex-col gap-y-1">
        <span>Card Number</span>
        <PaymentInputsWrapper {...wrapperProps}>
          <svg {...getCardImageProps({ images })} />
          <input
            type="text"
            className="py-2 pl-4 pr-8 border outline-none border-slate-300"
            name="cardNumber"
            defaultValue={cardToEdit.cardNumber}
            {...getCardNumberProps({
              onChange: handlePayementFormInput,
            })}
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
              defaultValue={cardToEdit.expiryDate || ""}
              {...getExpiryDateProps({
                onChange: handlePayementFormInput,
              })}
            />
          </label>
          
          <label className="flex flex-col w-1/2 gap-y-1">
            <span>Security Code</span>
            <input
              type="text"
              placeholder="CVV"
              name="cvc"
              defaultValue={cardToEdit.cvc}
              className="py-2 pl-4 pr-8 border outline-none border-slate-300"
              {...getCVCProps({
                onChange: handlePayementFormInput,
              })}
            />
          </label>
        </div>
        <div className="flex items-center text-xs bg-sky-700">
          <AtmCard />
          <p>3-digits on back of card</p>
        </div>
      </div>
      <ul className="ml-3 list-disc">
        {meta.erroredInputs.cardNumber && (
          <li className="text-red-400">
            {meta.erroredInputs.cardNumber}
          </li>
        )}
        {meta.erroredInputs.expiryDate && (
          <li className="text-red-400">
            {meta.erroredInputs.expiryDate}
          </li>
        )}
        {meta.erroredInputs.cvc && (
          <li className="text-red-400">
            {meta.erroredInputs.cvc}
          </li>
        )}
      </ul>
      <label className="flex flex-col gap-y-1">
        <span>Country</span>
        <select
          className="py-2 pl-4 pr-8 border outline-none border-slate-300"
          name="country"
          {...register("country", {
            value: cardToEdit.country || country,
            validate: () => Boolean(country) || "Country is required",
          })}
          onChange={handleNoPayementFormInputs}
        >
          <option value=""></option>
          <option value="US">US</option>
          <option value="RW">Rwanda</option>
          <option value="IN">India</option>
          <option value="BU">Burundi</option>
        </select>
        {errors.country && !country && (
          <p className="text-red-400">{errors.country.message}</p>
        )}
      </label>
      <div>
        <label className="flex flex-col gap-y-1">
          <span>Address</span>
          <div className="flex flex-col lg:flex-row lg:items-center">
            <input
              type="text"
              name="address"
              className="py-2 pl-4 pr-8 border outline-none border-slate-300"
              {...register("address", {
                value: cardToEdit?.address || "",
                required: "Please your billing address",
              })}
            />
            {errors.address && (
              <p className="text-red-400">{errors.address.message}</p>
            )}
          </div>
        </label>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-x-1">
          <label className="flex flex-col w-full gap-y-1">
            <span>City</span>
            <input
              type="text"
              name="city"
              className="py-2 pl-4 pr-8 border outline-none border-slate-300"
              {...register("city", {
                value: cardToEdit?.city || "",
                required: "Please add your city",
              })}
            />
          </label>
          {errors.city && <p className="text-red-400">{errors.city.message}</p>}
          <label className="flex flex-col w-full gap-y-1">
            <span>Postal Code</span>
            <input
              type="text"
              name="postalCode"
              className="py-2 pl-4 pr-8 border outline-none border-slate-300"
              {...register("postalCode", {
                value: cardToEdit?.postalCode || "" ,
                required: "Please add postal code",
              })}
            />
            {errors.postalCode && (
              <p className="text-red-400">{errors.postalCode.message}</p>
            )}
          </label>
        </div>
        <label className="flex flex-col gap-y-1">
          <span>Phone Number</span>
          <input
            type="text"
            name="phoneNumber"
            className="py-2 pl-4 pr-8 border outline-none border-slate-300"
            {...register("phoneNumber", {
              value: cardToEdit?.phoneNumber || "",
              required: "Please add your phone number",
            })}
          />
          {errors.phoneNumber && (
            <p className="text-red-400">{errors.phoneNumber.message}</p>
          )}
        </label>
      </div>
      <div className="flex justify-center lg:justify-end gap-x-4">
        <button
        // onClick={() => {
        //   setPaymentToEdit(undefined);
        // }}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="hover:bg-[#026CDF]/50 bg-[#026CDF] py-2 px-4 text-white rounded-sm text-base"
        >
          {/* {!paymentToEdit ? "Add new card" : "Edit card"}  */}
          Add new card
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;
