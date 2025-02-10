import { Container } from "react-bootstrap";
import { Product } from "../components/Product";
import { useEffect, useRef, useState } from "react";
import { MockShopResponse } from "../interfaces/product_interfaces";
import { Button, LoadingOverlay } from "@mantine/core";

function Products() {
    const productsFetched = useRef(0);
    const [products, setProducts] = useState<MockShopResponse>();
    const loadingMoreProducts = useRef(true);

    useEffect(() => {
        if (productsFetched.current === 0) {
            // Load initial products
            fetchProducts();
        }
    }, []);

    async function fetchProducts() {
        // Fetch 9 more products
        productsFetched.current += 9;
        // Fetch products from Mock Shop API
        const request = await fetch(`https://mock.shop/api?query={products(first:%20${productsFetched.current}){edges%20{node%20{title%20description%20images(first:%201){edges%20{node%20{url}}}%20variants(first:%201){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}`);
        const response = await request.json();
        setProducts(response);
        if (loadingMoreProducts.current) {
            toggleLoading(); // Stop loading overlay
        }
    }

    function toggleLoading() {
        loadingMoreProducts.current = !loadingMoreProducts.current;
    }

    return (
        <main className="page">
            <Container className="products">
                {products?.data.products.edges.map((product, index) => (
                    <Product
                        key={index}
                        image={product.node.images.edges[0].node.url || ""}
                        title={product.node.title || ""}
                        description={product.node.description || ""}
                        price={product.node.variants.edges[0].node.price.amount || 0}
                    />
                ))}
            </Container>
            <Container style={{ position: "relative", textAlign: "center" }}>
                <LoadingOverlay className="products__button--loading" visible={loadingMoreProducts.current} zIndex={1} />
                <Button className="products__button" onClick={() => { toggleLoading(); fetchProducts(); }}>Load More</Button>
            </Container>
        </main>
    );
}

export default Products;
