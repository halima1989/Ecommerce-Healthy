"use client";
import { actions, reducer } from "@/reducer/getOneProduct";
import { getOneProduct } from "@/services/getProducts";
import { useStoreCart } from "@/stores/storeCount";
import {
    actionType,
    stateType,
} from "@/utils/types";
import Image from "next/image";
import { useContext, useEffect, useReducer } from "react";

const ProductDetails = ({ id }: { id: number }) => {
    const { addItem } = useStoreCart((state) => state);
    const [state, dispatch] = useReducer<React.Reducer<stateType, actionType>>(
        reducer,
        {
            quantity: 1,
            product: null,
        }
    );

    useEffect(() => {
        const oneproduct = async () => {
            try {
                const response = await getOneProduct(id);
                dispatch({ type: actions.FETCH_SUCCESS, payload: response.data });
            } catch (error) {
                console.error("Error fetching product:", error);
                // handle error if necessary
            }
        };
        oneproduct();
    }, [id]);

    if (!state.product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-0 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2 ">
                <div className="img">
                    <div className="img-box h-full max-lg:mx-auto ">
                        <Image
                            src={state.product.image}
                            alt={state.product.name}
                            className="max-lg:mx-auto lg:ml-auto h-[80%]"
                            height={400}
                            width={400}
                        />
                    </div>
                </div>
                <div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
                    <div className="data w-full max-w-xl">
                        {/* <p className="text-lg font-medium leading-8 text-indigo-600 mb-4">
                            {state.product.categoryId}
                        </p> */}
                        <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">
                            {state.product.name}
                        </h2>
                        <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                            <h6 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                                $ {state.product.price}
                            </h6>

                        </div>
                        <ul className="grid gap-y-4 mb-8">
                            {/* <li className="flex items-center gap-3">
                                <svg
                                    width="26"
                                    height="26"
                                    viewBox="0 0 26 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect width="26" height="26" rx="13" fill="#4F46E5" />
                                    <path
                                        d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                                        stroke="white"
                                        stroke-width="1.6"
                                        stroke-linecap="round"
                                    />
                                </svg>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg
                                    width="26"
                                    height="26"
                                    viewBox="0 0 26 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect width="26" height="26" rx="13" fill="#4F46E5" />
                                    <path
                                        d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                                        stroke="white"
                                        stroke-width="1.6"
                                        stroke-linecap="round"
                                    />
                                </svg>
                            </li> */}
                        </ul>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-8">
                            <div className="flex sm:items-center sm:justify-center w-full">
                                <button
                                    className="group py-2 px-4 border border-gray-400 rounded-l-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300"
                                    title="button"
                                    onClick={() => {
                                        dispatch({
                                            type: actions.INC_QUANTITY,
                                            payload: "decrement",
                                        });
                                    }}
                                >
                                    <svg
                                        className="stroke-gray-900 group-hover:stroke-black"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M16.5 11H5.5"
                                            stroke=""
                                            stroke-width="1.6"
                                            stroke-linecap="round"
                                        />
                                    </svg>
                                </button>
                                <input
                                    type="text"
                                    placeholder="1"
                                    className="font-semibold text-gray-900 cursor-pointer text-lg py-2 px-4 w-full sm:max-w-[100px] outline-0 border-y border-gray-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50"
                                    value={state.quantity}
                                    readOnly
                                />
                                <button
                                    title="another button"
                                    className="group py-2 px-4 border border-gray-400 rounded-r-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300"
                                    onClick={() => {
                                        dispatch({
                                            type: actions.INC_QUANTITY,
                                            payload: "increment",
                                        });
                                    }}
                                >
                                    <svg
                                        className="stroke-gray-900 group-hover:stroke-black"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11 5.5V16.5M16.5 11H5.5"
                                            stroke="#9CA3AF"
                                            stroke-width="1.6"
                                            stroke-linecap="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <button
                                className="group py-2 px-4 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-lg w-full flex items-center justify-center gap-2 transition-all duration-500 hover:bg-indigo-100"
                                onClick={() => {
                                    addItem({ product: state.product, quantity: state.quantity });
                                }}
                            >
                                add to
                                <svg
                                    className="stroke-indigo-600"
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4221 15.5833 17.9314 15.1605C18.4406 14.7377 18.5745 14.0221 18.8422 12.5908L20.1685 5.5H4.1394ZM4.1394 5.5L3.19623 1.59082C3.10495 1.19786 3.05931 1.00138 2.96278 0.875737C2.87638 0.76445 2.75498 0.683257 2.61586 0.644315C2.45986 0.6 2.26132 0.6 1.86424 0.6H1M7.91083 17.875H13.568M13.568 17.875H7.91083"
                                        stroke="#4338CA"
                                        stroke-width="1.6"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="border-t border-b py-6">
                            <h4 className="font-manrope font-medium text-xl leading-8 text-gray-900 mb-4">
                                Description
                            </h4>
                            <p className="font-normal text-base leading-7 text-gray-500 max-w-lg">
                                {state.product.description}
                            </p>
                        </div>
                        <div className="my-8"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
