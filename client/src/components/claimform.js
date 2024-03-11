import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './claimform.css';

const ClaimForm = () => {
  const [name, setName] = useState('');
  const [hname, setHName] = useState('');
  const [age, setAge] = useState('');
  const [contact, setContact] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [billNo, setBillNo] = useState('');
  const [billAmount, setBillAmount] = useState('');
  const [dateAdmission, setDateAdmission] = useState('');
  const [dateDischarge, setDateDischarge] = useState('');
  const [treatmentDetails, setTreatmentDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();        
        fetch("https://claim-settlement-mern-backend.vercel.app/user/post/claim", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
              name,
              hname,
              age,
              contact,
              diagnosis,
              bill_no: billNo,
              bill_amount: billAmount,
              date_admission: dateAdmission,
              date_discharge: dateDischarge,
              treatment_details: treatmentDetails
            }),
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then((data) => {
            console.log(data, "data submitted");
            alert("Claim form successfully submitted!");
            //window.localStorage.setItem("token",data.data);
            window.location.href='/dashboard';
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
            alert("Could not submit the claim form");
        });
    const formData = {
      name,
      hname,
      age,
      contact,
      diagnosis,
      bill_no: billNo,
      bill_amount: billAmount,
      date_admission: dateAdmission,
      date_discharge: dateDischarge,
      treatment_details: treatmentDetails
    };
    console.log('Form Data:', formData);
    
  };

  return (
    <Container className="mt-5 container">
      <h2>Claim Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formHName">
          <Form.Label>Hospital Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter hospital name"
            value={hname}
            onChange={(e) => setHName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formContact">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formDiagnosis">
          <Form.Label>Diagnosis</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter diagnosis"
            value={diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBillNo">
          <Form.Label>Bill Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter bill number"
            value={billNo}
            onChange={(e) => setBillNo(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBillAmount">
          <Form.Label>Bill Amount</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter bill amount"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formDateAdmission">
          <Form.Label>Date of Admission</Form.Label>
          <Form.Control
            type="date"
            value={dateAdmission}
            onChange={(e) => setDateAdmission(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formDateDischarge">
          <Form.Label>Date of Discharge</Form.Label>
          <Form.Control
            type="date"
            value={dateDischarge}
            onChange={(e) => setDateDischarge(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formTreatmentDetails">
          <Form.Label>Treatment Details</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={treatmentDetails}
            onChange={(e) => setTreatmentDetails(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ClaimForm;
