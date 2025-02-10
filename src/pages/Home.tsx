import { Container } from "react-bootstrap";

function Home() {
    return (
        <main>
            <Container className="page">
                <h1>Welcome to the ecommerce mock shop!</h1>
                <p>Discover a world of quality and convenience at your fingertips. At the ecommerce mock shop, we believe that shopping should be an exciting and effortless experience. Whether you're hunting for the latest trends, everyday essentials, or unique finds, our curated collection has something special just for you.</p>
                <ul>
                    <li>Explore Our Range: Dive into a diverse selection of products that combine style, innovation, and functionality.</li>
                    <li>Seamless Shopping: Enjoy a user-friendly interface, secure checkout, and fast delivery, all designed with you in mind.</li>
                    <li>Unbeatable Deals: Stay tuned for exclusive offers, seasonal promotions, and new arrivals that keep your shopping experience fresh and affordable.</li>
                </ul>
                <h5>Let your journey begin with us—where quality meets convenience and every click opens up a new possibility!</h5>
            </Container>
        </main>
    );
}

export default Home;
