import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { Product } from "../components/Product";
import { MantineProvider } from "@mantine/core";
import { ProductProps } from "../interfaces/product_interfaces";

export const productTestData: ProductProps = {
    image: "https://plus.unsplash.com/premium_photo-1661964088064-dd92eaaa7dcf?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Test Product",
    description: "This is a test product description",
    price: 10,
}

describe("Product", () => {
    it("Product component renders", () => {
        render(
            <MantineProvider>
                <Product image={productTestData.image} title={productTestData.title} description={productTestData.description} price={productTestData.price} />
            </MantineProvider>
        );
    });
    it("Product component renders correctly", () => {
        const { getByTestId } = render(
            <MantineProvider>
                <Product image={productTestData.image} title={productTestData.title} description={productTestData.description} price={productTestData.price} />
            </MantineProvider>
        );
        expect(getByTestId("product-image")).toBeInTheDocument();
        expect(getByTestId("product-title")).toHaveTextContent('Test Product');
        expect(getByTestId("product-description")).toHaveTextContent('This is a test product description');
        expect(getByTestId("product-price")).toHaveTextContent("10");
        expect(getByTestId("product-add-to-basket-button")).toBeInTheDocument();
    });
});
