import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { patchpw } from "../../store/user/actions";
import { useDispatch } from "react-redux";
import { Col } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";

export default function Pw_reset() {
  const history = useHistory();
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const dispatch = useDispatch();

  function submitForm(event) {
    console.log("new password is submitted");
    event.preventDefault();
    if (password !== passwordConf) {
      return alert("the two passwords have to be matching");
    }

    dispatch(patchpw(password, token));

    setPassword("");
    setPasswordConf("");
    history.push("/login");
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Password reset</h1>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>New password</Form.Label>
          <Form.Control
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Enter new password"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Retype new password</Form.Label>
          <Form.Control
            value={passwordConf}
            onChange={(event) => setPasswordConf(event.target.value)}
            type="password"
            placeholder="Retype new password for confirmation"
            required
          />
        </Form.Group>

        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Set new password
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
