import React, { useState } from "react";
import { patchpw } from "../../store/user/actions";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { BoxContainer, FormContainer, Input, SubmitButton } from "./common";
import { Marginer } from "../marginer";

export function PwResetForm(props) {
  const history = useHistory();
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  function submitForm(event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      return alert("the two passwords have to be matching");
    }

    dispatch(patchpw(password, token));

    setPassword("");
    setConfirmPassword("");
    history.push("/login");
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={submitForm}>
        Reset Password
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
    </BoxContainer>
  );
}
