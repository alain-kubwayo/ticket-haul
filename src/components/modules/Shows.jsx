import { useEffect, useState } from "react";
import PageWrapper from "../layout/PageWrapper";
import { useCart } from "../../context/cart";
import shows from "../../mock/shows";

const Shows = () => {
  const [upcomingShows, setUpcomingShows] = useState([]);

  useEffect(() => {
    setUpcomingShows(shows);
  }, []);

  const { setcart, cart } = useCart();

  console.log(cart);
  return (
    <div className="py-20">
      <PageWrapper>
        <h2 className="mb-10 text-2xl font-bold tracking-wide text-center text-gray-500 uppercase">
          Upcoming shows
        </h2>
        <div className="grid grid-cols-1 gap-5 md:gap-20 md:grid-cols-2 lg:grid-cols-3">
          {upcomingShows.map(upcomingShow => (
            <div
              key={upcomingShow.id}
              className="border border-slate-200 bg-white p-[6px] rounded-[3px]"
            >
              <div className="h-[160px] md:h-[130px] block">
                <img
                  src={upcomingShow.url}
                  alt=""
                  className="object-cover h-full w-full rounded-[3px]"
                />
              </div>
              <div className="py-2 rounded-[3px] p-2 px-[6px] flex flex-col gap-y-2">
                <h1 className="text-lg font-semibold text-gray-700 capitalize">
                  {upcomingShow.title}
                </h1>
                <p className="text-[#6F7287] text-sm">{upcomingShow.city} • {upcomingShow.country}</p>
                <p className="text-[#6F7287] text-sm">${upcomingShow.price.toFixed(2)}</p>
                <div className="flex justify-between">
                  <div className="flex items-center gap-x-2">
                    <p>Quantity</p>
                    <select
                      value={
                        cart?.items?.find((e) => e.id === upcomingShow.id)
                          ?.quantity || 1
                      }
                      // disabled={!cart?.items?.find((e) => e.id === upcomingShow.id)}
                      onChange={(event) => {
                        if (cart?.items?.find((e) => e.id === upcomingShow.id)) {
                          setcart((e) => {
                            return {
                              ...e,
                              items: e?.items?.map((e) =>
                                e.id === upcomingShow.id
                                  ? { ...e, quantity: parseInt(event.target.value) }
                                  : e
                              ),
                            };
                          });
                        }else{
                          setcart((e) => {
                            return {
                              ...e,
                              items: e?.items
                                ? [...e.items, { ...upcomingShow, quantity:  parseInt(event.target.value) }]
                                : [{ ...upcomingShow, quantity: parseInt(event.target.value) }],
                            };
                          });
                        }
                       
                      }}
                      className="my-1 active:scale-95 bg-opacity-95 hover:bg-opacity-100 text-gray-700 outline-none border border-gray-300 px-3 py-[6px]  leading-4 font-medium  text-[12px] bg-gray-200 rounded-[2px]"
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                    </select>
                  </div>
                  <button
                    onClick={() => {
                      if (cart?.items?.find((e) => e.id === upcomingShow.id)) {
                        setcart((e) => {
                          return {
                            ...e,
                            items: e?.items?.filter(
                              (e) => e.id !== upcomingShow.id
                            ),
                          };
                        });
                      } else {
                        setcart((e) => {
                          return {
                            ...e,
                            items: e?.items
                              ? [...e.items, { ...upcomingShow, quantity: 1 }]
                              : [{ ...upcomingShow, quantity: 1 }],
                          };
                        });
                      }
                    }}
                    className="my-1 active:scale-95 bg-opacity-95 hover:bg-opacity-100 text-white px-3 py-[6px]  leading-4 font-medium  text-[12px] bg-[#5F6AF6] rounded-[2px]"
                  >
                    {cart?.items?.find((e) => e.id === upcomingShow.id)
                      ? "Remove from cart"
                      : "add to cart"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PageWrapper>
    </div>
  );
};

export default Shows;
