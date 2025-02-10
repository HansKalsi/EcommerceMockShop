import { describe, expect, it } from "vitest";
import { BASKET_CONTEXT } from "../global_contexts";
import { fireEvent, render } from "@testing-library/react";
import { Basket } from "../components/Basket";
import { Sidepanel } from "../components/Sidepanel";
import { MantineProvider } from "@mantine/core";
import { productTestData } from "./Product.test";
import { useState } from "react";

function BasketTestWrapper() {
    const [basket, updateBasketData] = useState([productTestData]);
    return (
        <MantineProvider>
            <BASKET_CONTEXT.Provider value={{ basket, updateBasketData }}>
                <Sidepanel open={true} />
            </BASKET_CONTEXT.Provider>
        </MantineProvider>
    );
}

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
    it("Basket item renders correctly", () => {
        const { getByText, queryByText } = render(<BasketTestWrapper />);
        expect(getByText("Total: £10")).toBeInTheDocument();
        expect(getByText("1 Test Product")).toBeInTheDocument();
        expect(queryByText("This is a test product description")).not.toBeInTheDocument();
    });
    it("Basket item can be incremented", () => {
        const { getByTestId, getByText } = render(<BasketTestWrapper />);
        fireEvent.click(getByTestId("plus_button"));
        expect(getByText("2 Test Product")).toBeInTheDocument();
        expect(getByText("Total: £20")).toBeInTheDocument();
    });
    it("Basket item can be removed", () => {
        const { getByTestId, getByText, queryByText } = render(<BasketTestWrapper />);
        expect(getByText("1 Test Product")).toBeInTheDocument();
        expect(getByText("Total: £10")).toBeInTheDocument();
        fireEvent.click(getByTestId("minus_button"));
        expect(queryByText("1 Test Product")).not.toBeInTheDocument();
        expect(getByText("Total: £0")).toBeInTheDocument();
    });
});
