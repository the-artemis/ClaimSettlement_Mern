// // ContactUsPage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './contact.css'; // Import CSS file for custom styling

const ContactUsPage = () => {
    return (
        <div className="contact-us-page">
            <Container>
                <Row className="justify-content-center align-items-center vh-100">
                    <Col md={6}>
                        <div className="developer-details">
                            <h2>Meet the Developer</h2>
                            <p>Aarushee Krishna</p>
                            <p>Email: aarushee.krishna@lumiq.ai</p>
                            <p>Phone: +91 9905677245</p>
                            <p>LinkedIn: <a href="https://www.linkedin.com/in/aarushee-krishna-471667216/">Aarushee Krishna</a></p>
                            <p>GitHub: <a href="https://github.com/the-artemis">Aarushee Krishna</a></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactUsPage;
