import { describe, expect, it } from "vitest";
import { BASKET_CONTEXT } from "../global_contexts";
import { render } from "@testing-library/react";
import { Basket } from "../components/Basket";
import { Sidepanel } from "../components/Sidepanel";
import { MantineProvider } from "@mantine/core";

describe("Basket", () => {
    it("Basket component renders", () => {
        render(
            <BASKET_CONTEXT.Provider value={{ basket: [], updateBasketData: () => {} }}>
                <Basket />
            </BASKET_CONTEXT.Provider>
        );
    });
    it("Basket component renders correctly", () => {
        const { getByText } = render(
            <MantineProvider>
                <BASKET_CONTEXT.Provider value={{ basket: [], updateBasketData: () => {} }}>
                    <Sidepanel open={true} />
                </BASKET_CONTEXT.Provider>
            </MantineProvider>
        );
        expect(getByText("Basket")).toBeInTheDocument
        expect(getByText("Total: £0")).toBeInTheDocument
        expect(getByText("Checkout")).toBeInTheDocument
    });
    it("Basket item can be incremented", () => {
        
    });
    it("Basket item can be removed", () => {
        
    });
    it("Basket item can have its quantity precisely set", () => {
        
    });
});
