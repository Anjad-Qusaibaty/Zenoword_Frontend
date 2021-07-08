import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectMessage } from "../../store/appState/selectors";
import { postEmailConfirmed } from "../../store/user/actions";
import "./confirmed.css";

export default function Confirmed() {
  const message = useSelector(selectMessage);
  // console.log("the msg?", message.text);
  const { token } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (token.length > 7) {
      dispatch(postEmailConfirmed(token));
    }
  }, [token, dispatch]);

  const toggle =
    message !== null && message.text === "The email has been verified" ? (
      <p className="isconfirmed">
        <span style={{ textDecoration: "underline" }}>Request Status</span>: Now
        you can login with your email and password
      </p>
    ) : message !== null && message.text === "Something went wrong, sorry" ? (
      <p className="isnotconfirmed">
        <span style={{ textDecoration: "underline" }}>Request Status</span>:
        Something went wrong while verifying your email. Please try signing up
        again.
      </p>
    ) : null;

  return (
    <div>
      <div className="msgcontainer">
        <p className="Generaltext">
          Thank you for confirming your email. We are processing your request.
          This might take a few seconds.
        </p>
        {toggle}

        <a href="/login">
          <button className="postconfbutton">Login / Sign-up</button>
        </a>
      </div>
    </div>
  );
}
