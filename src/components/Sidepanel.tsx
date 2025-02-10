import { useContext, useEffect, useState } from "react";
import { BASKET_CONTEXT } from "../global_contexts";
import { Basket } from "./Basket";
import { Button } from "@mantine/core";

export function Sidepanel(props: { open: boolean }) {
    const { basket } = useContext(BASKET_CONTEXT);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        console.log('basket', basket);
        if (basket.length > 0) {
            let newTotal = 0;
            basket.forEach(item => {
                if (!item.quantity) {
                    newTotal += item.price * 1;
                } else {
                    newTotal += item.price * item.quantity;
                }
            });
            setTotal(newTotal);
        } else {
            setTotal(0);
        }
    }, [basket]);

    return (
        <div role="sidepanel" className={`sidepanel ${props.open ? 'open' : ''}`}>
            <header>
                <h2>Basket</h2>
            </header>
            <main>
                <Basket />
            </main>
            <footer>
                <p>Total: £{total}</p>
                <Button onClick={() => console.log('click')}>Checkout</Button>
            </footer>
        </div>
    )
}
