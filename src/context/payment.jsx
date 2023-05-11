import { createContext, useCallback, useContext, useState } from "react";
const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const [isOpenPaymentForm, setIsOpenPaymentForm] = useState(false);
  const [cardToEdit, setCardToEdit] = useState({});

  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvc: "",
  });

  const [country, setCountry] = useState("");
  const [payment, setPayment] = useState(
    () => JSON.parse(localStorage.getItem("payement")) || []
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

  const deletePayment = (pay) => {
    const filtered = payment.filter((e) => e.id !== pay.id);
    setPayment(filtered);
    localStorage.setItem("payement", JSON.stringify(filtered));
  };

  const updateCard = (data) => {
    console.log({ updatedData: { ...data, ...cardInfo } });
    const existingPayements =
      JSON.parse(localStorage.getItem("payement")) || [];
    const updatedPayments = existingPayements.map((payement) => {
      if (payement.id !== data.id) return payement;
      return {
        cardName: data.cardName || cardToEdit.name,
        cardNumber: cardInfo.cardNumber || cardToEdit.cardNumber,
        id: data.id || cardToEdit.id,
        expiryDate: cardInfo.expiryDate || cardToEdit.expiryDate,
        cvc: cardInfo.cvc || cardToEdit.cvc,
        country: data.country || cardToEdit.country,
        address: data.address || cardToEdit.address,
        city: data.city || cardToEdit.city,
        postalCode: data.postalCode || cardToEdit.postalCode,
        phoneNumber: data.phoneNumber || cardToEdit.phoneNumber,
      };
    });

    localStorage.setItem("payement", JSON.stringify(updatedPayments));
    setPayment(updatedPayments);
    setCardToEdit({});
  };

  const createCard = (data) => {
    // update the existing payement in the local storage
    const existingPayements =
      JSON.parse(localStorage.getItem("payement")) || [];
    const newPayementCard =   { ...data, ...cardInfo, id: payment?.length + 1 }

    const updatedPayements = JSON.stringify([
      ...existingPayements,
      newPayementCard,
    ]);
    localStorage.setItem("payement", updatedPayements);

    // update the existing payement in the app state
    console.log("submit", [{ ...data, ...cardInfo }]);
    setPayment((prev) => {
      if (prev) return [...prev, newPayementCard];
      return [newPayementCard];
    });
  };

  const onSubmitPayement = (data) => {
    if (data.id) updateCard(data);
    else createCard(data);
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
        setCardInfo,
        deletePayment,
        cardToEdit,
        setCardToEdit,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => useContext(PaymentContext);
