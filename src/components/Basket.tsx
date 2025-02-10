import { useContext, useEffect, useState } from "react"
import { BASKET_CONTEXT } from "../global_contexts"
import { BasketItem } from "./BasketItem";
import { ProductProps } from "../interfaces/product_interfaces";

export function Basket() {
    const { basket } = useContext(BASKET_CONTEXT);
    const [renderedBasket, setRenderedBasket] = useState<ProductProps[]>([]);

    useEffect(() => {
        if (basket.length > 0) {
            let temp_renderedBasket: ProductProps[] = [];
            // Track products that have been compiled into the temp_renderedBasket to avoid duplicates and increment the quantity of the product
            // The index in the pseudoBasket array will correspond to the index in the temp_renderedBasket array
            let temp_pseudoBasket: string[] = [];
            for (let i = 0; i < basket.length; i++) {
                const product = basket[i];
                const index = temp_pseudoBasket.indexOf(product.image);
                if (index > -1) {
                    // Then we've already added this product to the temp_renderedBasket
                    if (temp_renderedBasket[index].quantity) {
                        temp_renderedBasket[index].quantity++;
                        continue;
                    }
                }
                // Otherwise, add the product to the temp_renderedBasket and image for reference in the temp_pseudoBasket
                const newItem = { ...product, quantity: product.quantity || 1 };
                temp_renderedBasket.push(newItem);
                temp_pseudoBasket.push(product.image);
            }

            // Ensure same order of final products so they stay consistent in the basket
            renderedBasket?.forEach((product, index) => {
                const foundIndex = temp_renderedBasket.findIndex((temp_product) => temp_product.image === product.image);
                if (index === foundIndex) {
                    return;
                }
                temp_renderedBasket.splice(index, 0, temp_renderedBasket.splice(foundIndex, 1)[0]);
            });
            
            setRenderedBasket(temp_renderedBasket);
        } else {
            setRenderedBasket([]);
        }
    }, [basket]);

    return (
        <div className="basket">
            {renderedBasket?.map((product, index) => (
                <BasketItem
                    key={index}
                    image={product.image || ""}
                    title={product.title || ""}
                    description={product.description || ""}
                    price={product.price || 0}
                    quantity={product.quantity || 0}
                />
            ))}
        </div>
    )
}
