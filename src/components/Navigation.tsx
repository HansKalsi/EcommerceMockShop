import { Burger, Group, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link, Outlet } from "react-router-dom";
import ecommerceLogo from "/ecommerce-logo.svg";
import basketIcon from "/basket-icon.svg";
import { Container } from "react-bootstrap";
import { Sidepanel } from "./Sidepanel";

interface LinkInterface {
    link: string;
    label: string;
}

const links: LinkInterface[] = [
    { link: "/", label: "Home" },
    { link: "/products", label: "Products" },
    { link: "/about", label: "About" },
];

export function Navigation() {
    const [opened, { toggle }] = useDisclosure(false);
    const [basketOpened, { toggle: toggleBasket }] = useDisclosure(false);

    const items = links.map((link) => (
        <Link
            key={link.link}
            to={link.link}
            className="navigation__link"
            data-testid={link.label}
        >
            {link.label}
        </Link>
    ));

    return (
        <>
            <header className="header">
                <Container className="navigation">
                    <Image visibleFrom="xs" src={ecommerceLogo} alt="Website Logo" />
                    <Group className="navigation__links" align="center" justify="space-evenly" visibleFrom="xs">
                        {items}
                    </Group>

                    <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" aria-label="Burger Menu" />
                    <Image onClick={toggleBasket} className="white-svg" src={basketIcon} />
                </Container>
                <Sidepanel open={basketOpened} />
            </header>
            <Outlet />
        </>
    )
}
