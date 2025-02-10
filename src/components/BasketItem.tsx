import { Button, Image } from "@mantine/core";
import { ProductProps } from "../interfaces/product_interfaces";
import { useContext } from "react";
import { BASKET_CONTEXT } from "../global_contexts";

export function BasketItem(props: ProductProps) {
    const { basket, updateBasketData } = useContext(BASKET_CONTEXT);

    function removeItem() {
        // only remove one item of type from the basket
        let found = false;
        const newBasket = basket.filter((item) => {
            if (item.title === props.title && !found) {
                found = true;
                return false;
            }
            return true;
        });
        updateBasketData(newBasket);
    }

    function addItem() {
        const newItem = { ...props, quantity: 1 };
        const newBasket = [...basket, newItem];
        updateBasketData(newBasket);
    }

    return (
        <div className="basket-item">
            <Button className="basket-item__minus" onClick={() => removeItem()} variant="light" color="red">-</Button>
            <Image className="basket-item__image" src={props.image} alt={`${props.title} Image`} />
            <h4 className="basket-item__title">{props.quantity} {props.title}</h4>
            <Button className="basket-item__plus" onClick={() => addItem()} variant="light" color="green">+</Button>
        </div>
    )
}
