import { Container } from "react-bootstrap";

function About() {
    return (
        <main>
            <Container className="page">
                <h1>Our Story</h1>
                <p>At the ecommerce mock shop, we’re driven by a passion for excellence and a commitment to creating an outstanding online shopping experience. Founded in 2025, our e-commerce project started as a small idea with a big vision: to bring together quality products and exceptional service under one digital roof.</p>
                <h4>What We Stand For:</h4>
                <ul>
                    <li>Customer-Centric Approach: Every decision we make is focused on providing value, trust, and satisfaction to our customers.</li>
                    <li>Innovation and Quality: We continuously refine our product offerings and digital platform, ensuring that you always have access to the latest trends and the best deals.</li>
                    <li>Community and Connection: More than just a store, we’re a community of innovators, enthusiasts, and everyday shoppers. Your feedback helps shape our journey, and your satisfaction inspires us to keep growing.</li>
                </ul>
                <h5>Thank you for being a part of our story. We’re excited to continue evolving and to serve you today and in the future!</h5>
            </Container>
        </main>
    );
}

export default About;
