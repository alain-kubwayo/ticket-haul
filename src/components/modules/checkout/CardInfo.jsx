import { useState } from "react";
import { ReactComponent as Checkmark } from "../../../assets/svgs/checkmark.svg";
import { ReactComponent as Card } from "../../../assets/svgs/card.svg";
import { usePayment } from "../../../context/payment";

const CardInfo = () => {
  const [isCorrectCvc, setCorrectCvc] = useState(false);
  const { payment } = usePayment();

  
  return (
    <>
      {payment?.map((p) => (
        <div
          key={p?.cardName}
          className="border mb-2 border-slate-300 p-4 rounded-[3px] bg-sky-100"
        >
          <div className="flex items-start gap-x-4">
            <input type="radio" checked />
            <div>
              <div className="flex gap-x-4">
                <p>VISA</p>
                <div>
                  <h3 className="text-lg font-semibold">
                    Visa -{" "}
                    {
                      p?.cardNumber?.split(" ")[
                        p?.cardNumber?.split(" ").length - 1
                      ]
                    }
                  </h3>
                  <p>
                    {p?.cardName} | exp. {p?.expiryDate}{" "}
                  </p>
                  <div>
                    <button
                      //   onClick={()=>handleEdit(p?.id)}
                      className="pr-2 border-r border-black text-[#026CDF]"
                    >
                      Edit
                    </button>
                    <button className="pl-2 text-[#026CDF]">Delete</button>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <label className="flex flex-col w-1/3 gap-y-1">
                  <span>Security Code</span>
                  <div>
                    <div className="relative">
                      <input
                        type="password"
                        className="w-full py-2 pl-4 pr-8 border outline-none border-slate-300"
                        placeholder="CVV"
                        max={3}
                        onChange={(e) =>
                          e.target.value === p.cvc
                            ? setCorrectCvc(true)
                            : setCorrectCvc(false)
                        }
                      />
                      {isCorrectCvc && (
                        <Checkmark className="absolute w-5 h-auto right-5 inset-y-1/4" />
                      )}
                    </div>
                  </div>
                </label>
                <Card className="mt-8 ml-4" />
                <p className="mt-8 ml-4 text-xs">3-digits on back of card</p>
              </div>
              {!isCorrectCvc && (
                <p className="text-sm text-red-400">
                  Please enter your card security code
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardInfo;
