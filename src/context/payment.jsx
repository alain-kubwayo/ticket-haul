import { createContext, useCallback, useContext, useState } from "react";
const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const [isOpenPaymentForm, setIsOpenPaymentForm] = useState(false);
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvc: "",
  });

  const [country, setCountry] = useState("");
  const [payment, setPayment] = useState(
    () => JSON.parse(localStorage.getItem("payment")) || []
  );

  const handlePayementFormInput = useCallback((event) => {
    setCardInfo((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleNoPayementFormInputs = useCallback((event) => {
    setCountry(event.target.value);
  }, []);

  const onSubmitPayement = (data) => {
    // update the existing payement in the local storage
    const existingPayements =
      JSON.parse(localStorage.getItem("payement")) || [];
    const updatedPayements = JSON.stringify([
      ...existingPayements,
      { ...data, ...cardInfo },
    ]);
    localStorage.setItem("payement", updatedPayements);

    // update the existing payement in the app state
    console.log("submit", [{ ...data, ...cardInfo }]);
    setPayment((prev) => {
      if (prev) return [...prev, { ...data, ...cardInfo }];
      return [{ ...data, ...cardInfo }];
    });
  };

  return (
    <PaymentContext.Provider
      value={{
        cardInfo,
        payment,
        setPayment,
        handlePayementFormInput,
        handleNoPayementFormInputs,
        onSubmitPayement,
        country,
        isOpenPaymentForm,
        setIsOpenPaymentForm,
        setCardInfo
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => useContext(PaymentContext);
