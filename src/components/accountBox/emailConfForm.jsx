import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BoxContainer, FormContainer, Input, SubmitButton } from "./common";
import { Marginer } from "../marginer";
import { emailConf } from "../../store/user/actions";

export function EmailConfForm(props) {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  function submitForm(event) {
    console.log("email submitted for reset");
    event.preventDefault();

    dispatch(emailConf(email));

    setEmail("");
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={submitForm}>
        Send Reset Link
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
    </BoxContainer>
  );
}
