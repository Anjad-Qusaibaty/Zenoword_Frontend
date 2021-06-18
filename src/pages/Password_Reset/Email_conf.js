import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { emailConf } from "../../store/user/actions";
import { useDispatch } from "react-redux";
// import {Link } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function Email_conf() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  function submitForm(event) {
    console.log("email submitted for reset");
    event.preventDefault();

    dispatch(emailConf(email));

    setEmail("");
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Email confirmation</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Send reset link
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
