import { ReducerCartType, productType } from "@/utils/types";
import { createContext } from "react";

export const ContextCart = createContext<ReducerCartType>({
    cart: [],
    setcart: () => { },
});