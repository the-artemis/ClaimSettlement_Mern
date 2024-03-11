import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './login.css';


// const LoginPage = () => {
//   const [username, setusername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
    
//     const handleLogin = (e) => {
//         e.preventDefault();
//         console.log(username, email, password);
        
//         fetch("http://localhost:5000/login/post/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json",
//             },
//             body: JSON.stringify({
//                 username,
//                 password,
//                 email
//             }),
//         })
//         .then((res) => {
//             if (!res.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return res.json();
//         })

//         .then((data) => {
//           console.log(data, "userlogin");
//           const { token } = data;
//           localStorage.setItem('token', token); // Store the token in localStorage
//           alert("login successful");
//           if (email==="admin@admin.com"){
//             window.location.href='/admindashboard';
//           }
//           else{
//           window.location.href='/dashboard';
//           }
//         })
//         .catch((error) => {
//             console.error('There was a problem with the fetch operation:', error);
//             alert("login error");
//         });
//     }

    

//   return (
//     <Container className="mt-5">
//       <Row className="justify-content-center">
//         <Col md={6}>
//           <h2 className="mb-4">Login Page</h2>
//           <Form onSubmit={handleLogin}>
//             <Form.Group controlId="formBasicusername">
//               <Form.Label>User ID</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter User ID"
//                 value={username}
//                 onChange={(e) => setusername(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </Form.Group>

//             <Button variant="primary" type="submit" className="mt-2">
//               Login
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default LoginPage;



const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(username, email, password);

    fetch("http://localhost:5000/login/post/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email
      }),
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then((data) => {
      console.log(data, "userlogin");
      const { token } = data;
      localStorage.setItem('token', token); // Store the token in localStorage
      alert("login successful");
      if (email === "admin@admin.com") {
        window.location.href='/admindashboard';
      }
      else if (email ==="tpa@tpa.com"){
        window.location.href='/tpadashboard';
      }
       else {
        window.location.href='/dashboard';
      }
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
      alert("login error");
    });
  }

  return (
    <div className="login-page">
      <header className="header">
        <h1>Welcome to Aarushee health insurance</h1>
      </header>
      <div className="bg-image"></div> {/* Background image */}
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>User ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter User ID"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-2">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <footer className="footer">
        <p>AarusheeKrishna@claimsettlement@bootcamp</p>
      </footer>
    </div>
  );
};

export default LoginPage;


