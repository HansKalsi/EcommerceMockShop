import { useContext } from "react";
import { BASKET_CONTEXT } from "../global_contexts";
import { Button, Image } from "@mantine/core";
import { ProductProps } from "../interfaces/product_interfaces";

export function Product(props: ProductProps) {
    const { basket, updateBasketData } = useContext(BASKET_CONTEXT);

    return (
        <div className="product">
            <Image className="product__image" src={props.image} alt={`${props.title} Image`} data-testid="product-image" />
            <div className="product__info">
                <h3 className="product__info_title" data-testid="product-title">{props.title}</h3>
                <h3 className="product__info_price" data-testid="product-price">£{props.price}</h3>
            </div>
            <p className="product__description" data-testid="product-description">{props.description}</p>
            <Button className="product__button" data-testid="product-add-to-basket-button" onClick={() => updateBasketData([...basket, props])}>Add to Basket</Button>
        </div>
    )
}
