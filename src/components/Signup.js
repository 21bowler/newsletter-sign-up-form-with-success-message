import React from "react";
import "./Signup.css";
import iconList from "../images/icon-list.svg";
import illustrationDesktop from "../images/illustration-sign-up-desktop.svg";
import illustrationMobile from "../images/illustration-sign-up-mobile.svg";
import iconSuccess from "../images/icon-success.svg";
import { useState, useRef } from "react";

function Signup() {
  const [errorEmail, setErrorEmail] = useState("");
  const [isActiveError, setIsActiveError] = useState(false);
  const [showState, setShowState] = useState(false);
  const inputRefEmail = useRef(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const switchToSignup = () => {
    setShowState(false);
  };

  const currentEmailValue = () => {
    return inputRefEmail.current.value;
  };

  const submitEmail = (event) => {
    event.preventDefault();

    if (
      inputRefEmail.current.value === "" ||
      !isValidEmail(inputRefEmail.current.value)
    ) {
      setErrorEmail("valid email required");
      setIsActiveError(true);
      setShowState(false);
    } else {
      setErrorEmail("");
      setIsActiveError(false);
      setShowState(true);
    }
  };

  //success state starts here
  const succesState = () => {
    return (
      <div className="success-container">
        <div className="success-image">
          <img src={iconSuccess} alt="sucess-icon" />
        </div>
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to
          <span >{currentEmailValue}</span>.Please open it and click the
          button inside to confirm your subscription.
        </p>
        <button type="reset" className="btn-dismiss" onClick={switchToSignup}>
          Dismiss message
        </button>
      </div>
    );
  };

  // signup state function starts here
  const signupState = () => {
    return (
      <div className="stayupdated-wrapper">
        <div className="side-one">
          <h1>Stay Updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on</p>
          <ul>
            <li>
              <img src={iconList} alt="list icons" className="check-icon" />
              Product discovery and building what matters
            </li>
            <li>
              <img src={iconList} alt="list icons" className="check-icon" />
              Measuring to ensure updates are a success
            </li>
            <li>
              <img src={iconList} alt="list icons" className="check-icon" />
              And much more!
            </li>
          </ul>
          <form action="" className="form">
            <label ref={inputRefEmail}>Email address</label>
            <label className="error-state">{errorEmail}</label>
            <input
              type="text"
              name="email"
              className="email-input"
              placeholder="email@company.com"
              ref={inputRefEmail}
              style={{
                borderColor: isActiveError ? "hsl(4, 100%, 67%)" : "",
                backgroundColor: isActiveError ? "hsla(4, 100%, 67%, 0.2)" : "",
                color: isActiveError ? "hsl(4, 100%, 67%)" : "",
              }}
            />
            <button type="submit" className="btn-submit" onClick={submitEmail}>
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
        <picture className="side">
          <source media="(max-width: 950px)" srcSet={illustrationMobile} />
          <img src={illustrationDesktop} alt="desktop-illustration" />
        </picture>
      </div>
    );
  };

  return (
  <div className="main">
    { showState ? <div>{succesState()}</div> : <div>{signupState()}</div>}
  </div>
  );
}

export default Signup;
