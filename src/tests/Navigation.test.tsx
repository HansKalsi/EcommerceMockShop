import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { MantineProvider } from "@mantine/core";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";

describe("Navigation", () => {
    it("Navigation component renders correctly", () => {
        const { getByText } = render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        expect(getByText("Home")).toBeInTheDocument();
        expect(getByText("Products")).toBeInTheDocument();
        expect(getByText("About")).toBeInTheDocument();
    });
    it("Navigation component routes correctly for Home", () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        fireEvent.click(getByTestId("Home"));
        expect(window.location.pathname).toBe("/");
    });
    it("Navigation component routes correctly for Products", () => {
        const { getByTestId, getByText } = render(
            <MantineProvider>
                <MemoryRouter initialEntries={["/"]}>
                    <Routes>
                        <Route path="/" element={<Navigation/>}>
                            <Route index element={<Home />} />
                            <Route path='products' element={<Products />} />
                        </Route>
                    </Routes>
                </MemoryRouter>
            </MantineProvider>
        );
        fireEvent.click(getByTestId("Products"));
        expect(getByText("Products content")).toBeInTheDocument();
    });
    it("Navigation component routes correctly for About", () => {
        const { getByTestId, getByText } = render(
            <MantineProvider>
                <MemoryRouter initialEntries={["/"]}>
                    <Routes>
                        <Route path="/" element={<Navigation/>}>
                            <Route index element={<Home />} />
                            <Route path='about' element={<About />} />
                        </Route>
                    </Routes>
                </MemoryRouter>
            </MantineProvider>
        );
        fireEvent.click(getByTestId("About"));
        expect(getByText("About content")).toBeInTheDocument();
    });
});
