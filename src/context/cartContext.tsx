import { createContext } from "react";
import { ReducerCartType } from "../utils/types";

export const ContextCart = createContext<ReducerCartType>({
    cart: [],
    setcart: () => { },
});