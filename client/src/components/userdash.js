import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import './userdash.css'; // Import CSS file for custom styling
import { Link } from 'react-router-dom';


const Dashboard = () => {
    const [policies, setPolicies] = useState([]);
    const [username, setUsername] = useState('');
    const [claims, setClaims] = useState([]);
    

    useEffect(() => {
        const token = localStorage.getItem('token');
        const decodedUsername = decodeToken(token);
        setUsername(decodedUsername);
        fetchUserPolicies(decodedUsername);
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const decodedUsername = decodeToken(token);
        setUsername(decodedUsername);
        fetchUserClaims(decodedUsername);
    }, []);

    const decodeToken = (token) => {
        if (!token) return '';
        const tokenParts = token.split('.');
        if (tokenParts.length !== 3) return '';
        const payload = JSON.parse(atob(tokenParts[1]));
        return payload.username;
    };

    const fetchUserPolicies = async (username) => {
        try {
            const response = await fetch(`https://claim-settlement-mern-backend.vercel.app/login/get/userpol/${username}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setPolicies(data);
        } catch (error) {
            console.error('Error fetching policies:', error);
        }
    };

    const fetchUserClaims = async (username) => {
        try {
            const response = await fetch(`https://claim-settlement-mern-backend.vercel.app/login/get/userclaim/${username}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setClaims(data);
        } catch (error) {
            console.error('Error fetching claims:', error);
        }
    };


    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login'; 
    }

    return (
        <div>
            {/* Header */}
            <header className="py-3 bg-dark text-white text-center">
                <h1>Claim Settlement Portal</h1>
            </header>
        <Container fluid>
            <Row>
                {/* Sidebar */}
                <Col sm={3} className="sidebar-alt">
                    <div className="py-4 px-3">
                        <h3 className="text-dark">Dashboard</h3>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link to="/claimform" className="nav-link">Apply for Claim</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" onClick={handleLogout}>Logout</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </Col>

                {/* Main Content */}
                <Col sm={9} className="main-content">
                    <div className="py-4 px-3">
                        <h1>Welcome to the User Dashboard {username}</h1>
                        <p>Here you can view your policies and also  post a claim.</p>
                        {/* <p>Name: {userData.name}</p> */}
                    </div>
                </Col>
            </Row>

            {/* Policy Table */}
            <Row>
                <Col sm={12}>
                    <h2 className="mt-4">Your Policies</h2>
                    <Table striped bordered hover className="custom-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Policy Number</th>
                                <th>Coverage Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {policies.map((policy) => (
                                <tr key={policy._id}>
                                    <td>{policy.name}</td>
                                    <td>{policy.policy_number}</td>
                                    <td>{policy.coverage_amt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <Row>
                <Col sm={12}>
                    <h2 className="mt-4">Claims</h2>
                    
                    <Table striped bordered hover className="custom-table">
                    <thead>
                     <tr>
                    <th>Claimant Name</th>
                     <th>Hospital name</th>
                     <th>Claimant Age</th>
                    <th>Claimant Contact</th>
                    <th>Claimant diagnosis</th>
                    <th>Bill number</th>
                     <th>Bill amount</th>
                     <th>Date admitted</th>
                    <th>Date discharged</th>
                    <th>Treatment received</th>
                 <th>Status</th>
             </tr>
    </thead>
    <tbody>
        {claims.map((claim) => (
            <tr key={claim._id}>
                <td>{claim.name}</td>
                <td>{claim.hname}</td>
                <td>{claim.age}</td>
                <td>{claim.contact}</td>
                <td>{claim.diagnosis}</td>
                <td>{claim.bill_no}</td>
                <td>{claim.bill_amount}</td>
                <td>{claim.date_addmission}</td>
                <td>{claim.date_discharge}</td>
                <td>{claim.treatment_details}</td>
                <td>{claim.status}</td>
             </tr>
             ))}
            </tbody>
            </Table>

             </Col>
            </Row>

            {/* Footer */}
            <Row>
                <Col sm={12} className="footer">
                    <footer className="py-3 bg-dark text-white text-center">
                        <div className="container">
                            <span className="text-muted">aarushee krishna @lumiq bootcamp</span>
                        </div>
                    </footer>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Dashboard;
