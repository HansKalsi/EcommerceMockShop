import { createContext } from "react";
import { ProductProps } from "./interfaces/product_interfaces";

export const BASKET_CONTEXT = createContext({
    basket: [] as ProductProps[],
    updateBasketData: (..._args: any[]) => {},
});
