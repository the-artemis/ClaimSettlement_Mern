import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import './admindash.css'; // Import CSS file for custom styling
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    const [policies, setPolicies] = useState([]);
    const [claims, setClaims] = useState([]);

    const handleApproval = async (claimId) => {
        try {
            const response = await fetch(`http://localhost:5000/user/update/claimstatus/${claimId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    status: 'approved' // Set the status to 'approved'
                })
            })
            .then((data) => {
                console.log(data, "data submitted");
                alert("Claim successfully approved!");
                //window.localStorage.zsetItem("token",data.data);
                window.location.href='/tpadashboard';
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
        } catch (error) {
            console.error('Error approving claim:', error);
        }
    };
    
    const handleRejection = async (claimId) => {
        try {
            const response = await fetch(`http://localhost:5000/user/update/claimstatus/${claimId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    status: 'rejected' // Set the status to 'approved'
                })
            })
            .then((data) => {
                console.log(data, "data submitted");
                alert("Claim Rejected! Please review the claim!");
                //window.localStorage.setItem("token",data.data);
                window.location.href='/admindashboard';
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
        } catch (error) {
            console.error('Error rejecting claim:', error);
        }
    };

    useEffect(() => {
        fetchPolicies();
    }, []);

    useEffect(() => {
        fetchClaims();
    }, []);

    const fetchPolicies = async () => {
        try {
            const response = await fetch('http://localhost:5000/policy/get');
            const data = await response.json();
            setPolicies(data);
        } catch (error) {
            console.error('Error fetching policies:', error);
        }
    };

    const fetchClaims = async () => {
        try {
            const response = await fetch('http://localhost:5000/user/get/claim');
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
                        <h1>Welcome to the Admin Dashboard</h1>
                        <p>Please Approve/Reject the pending claims.</p>
                    </div>
                </Col>
            </Row>

            {/* Policy Table */}
            <Row>
                <Col sm={12}>
                    <h2 className="mt-4">All Policies</h2>
                    <Table striped bordered hover className="custom-table">
                        <thead>
                            <tr>
                                <th>Policy id</th>
                                <th>Name</th>
                                <th>Policy Number</th>
                                <th>Coverage Amount</th>
                                <th>Claimed Amount</th>
                                <th>Policy description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {policies.map((policy) => (
                                <tr key={policy._id}>
                                    <td>{policy.pol_id}</td>
                                    <td>{policy.name}</td>
                                    <td>{policy.policy_number}</td>
                                    <td>{policy.coverage_amt}</td>
                                    <td>{policy.claimed_amt}</td>
                                    <td>{policy.description}</td>
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
            <th>Admin Status</th>
            <th>Tpa status</th>
            <th>Admin Approval</th>
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
                <td>{claim.tpastatus}</td>
                <td>
                    {claim.status === 'pending' ? (
                    <div>
                    <button onClick={() => handleApproval(claim._id)}>Approve</button>
                    <button onClick={() => handleRejection(claim._id)}>Reject</button>
                    </div>
                    ) : (
                    <div>
                    {claim.status === 'approved' ? (
                    <span>Approved</span>
                    ) : (
                    <span>Rejected</span>
                     )}
            </div>
            )}
                </td>
            </tr>
        ))}
    </tbody>
</Table>

                </Col>
            </Row>
            {/* <Row>
                <Col sm={12} className="footer">
                    <footer className="py-3 bg-dark text-white text-center">
                        <div className="container">
                            <span className="text-muted">aarushee krishna @lumiq bootcamp</span>
                        </div>
                    </footer>
                </Col>
            </Row> */}
            <footer className="footer">
        <p>AarusheeKrishna@claimsettlement@bootcamp</p>
      </footer>
        </Container>
        </div>
    );
};

export default AdminDashboard;