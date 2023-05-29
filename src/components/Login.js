import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="Linkedin nav logo" />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      {/* This is main section  */}

      <Section>
        <LeftSide>
          <SectionHeading>
            Welcome to your professional community
          </SectionHeading>

          <InputDiv>
            <input
              required
              placeholder="Email or username"
              type="text"
              id="username"
            />
            <div className="pass-container">
              <input required placeholder="Password" type="" id="password" />
              <strong onClick="">show</strong>
            </div>
            <Link to="/forget-pass">
              <p>Forgot password?</p>
            </Link>
            <p className="error"></p>
          </InputDiv>
          <SingUp type="submit" onClick="">
            Login
          </SingUp>
          <div className="button-divider">or</div>
          <SignInGoogle type="submit" onClick="">
            <img src="/images/google.svg" alt="" />
            <span>Login with Google</span>
          </SignInGoogle>
        </LeftSide>

        <RightSide>
          <img loading="lazy" src="/images/welcome-hero.svg" alt="" />
        </RightSide>
      </Section>

      {/* Whole section ends  */}
    </Container>
  );
};

export default Login;

const Container = styled.div`
  padding: 0px;
`;

const Nav = styled.div`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: reletive;
  justify-content: space-between;
  flex-wrap: nowrap;
  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;
const Join = styled.a`
  font-size: 17px;
  font-weight: 400;
  padding: 10px 19px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.8);
  margin-right: 12px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    border-radius: 24px;
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;

const Section = styled.div`
  display: flex;
  max-width: var(--container-size);
  margin: 0 auto;
  width: 100%;
  align-items: flex-end;

  @media screen and (max-width: 740px) {
    flex-direction: column;
    align-items: center;
  }
`;
const LeftSide = styled.div`
  width: 40%;

  /* Button Divider - (--OR--) */
  .button-divider {
    width: 100%;
    text-align: center;
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 1fr 3fr;
    align-items: center;
    color: var(--dark-gray);
    margin: 1.5rem 0;
    letter-spacing: 3px;
    font-size: 15px;

    /* Divider Lines */
    &::after,
    &::before {
      content: "";
      background-color: var(--dark-gray);
      height: 1px;
    }
  }

  @media screen and (max-width: 740px) {
    width: 100%;
    margin-bottom: 3rem;
  }
`;

const RightSide = styled.div`
  width: 60%;
  margin-left: 5%;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 1027px) {
    height: 590px;
  }

  @media screen and (max-width: 740px) {
    width: 90%;
    height: fit-content;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
const SectionHeading = styled.div`
  font-weight: 200;
  font-size: 3.5rem;
  font-family: var(--open-sans-font);
  color: var(--brown-color);
  margin-bottom: 2rem;

  @media screen and (max-width: 1190px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 1027px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 890px) {
    font-size: 2rem;
  }
`;
const InputDiv = styled.div`
  input {
    border: 1px solid;
    background: white;
    width: 100%;
    height: 60%;
    border-radius: 5px;
    padding: 0.9rem 1rem;
    font-size: 18px;
    color: var(--dark-gray);
    margin-bottom: 0.7rem;
    background-color: white;
  }
  input:focus {
    outline: none;
  }

  /* error occured input fields */
  input.wrong {
    background-color: #ff000033;
  }

  /* Password Input Container */
  .pass-container {
    position: relative;

    /* pass input-field */
    input {
      /* padding-right: 65px; */
    }

    /* Show/Hide Button */
    strong {
      user-select: none;
      position: absolute;
      right: -12px;
      top: 30%;
      background: transparent;
      border: none;
      font-size: 13px;
      font-weight: 600;
      text-transform: capitalize;
      color: var(--dark-gray);
      letter-spacing: 1px;

      &:hover {
        cursor: pointer;
      }
      @media screen and (max-width: 768px ) {
        right: 8px;
  }
    }
  }

  /* Form-error text */
  .error {
    color: red;
    font-size: 15px;
    margin-bottom: -0.6rem;
  }

  /* Forget-Pass */
  p {
    font-size: 17px;
    font-weight: bold;
    margin-left: 4px;
  }

  @media screen and (max-width: 890px) {
    /* Both Input Box */
    input {
      padding: 1rem 1rem;
      font-size: 16px;
      width: -webkit-fill-available;
}
    }

    /* Forget-Pass */
    p {
      font-size: 1rem;
    }
  

  @media screen and (max-width: 360px) {
    input,
    p {
      font-size: 14px;
    }
  }
`;
const button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--quick-transition);
  letter-spacing: 1.5px;
  padding: 0.6rem;
  line-height: 1.3;
  border-radius: 30px;
  font-size: 20px;

  img {
    height: 25px;
    margin-right: 25px;
  }

  &:hover {
    background-color: var(--light-white);
  }

  @media screen and (max-width: 890px) {
    font-size: 1rem;
    img {
      height: 22px;
      margin-right: 17px;
    }
  }

  @media screen and (max-width: 740px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 360px) {
    font-size: 16px;
  }
`;
const SingUp = styled(button)`
  margin-top: 2rem;
  background: var(--primary-color);
  color: white;

  &:hover {
    background: var(--light-primary-color);
  }
`;
const SignInGoogle = styled(button)`
  border: 1px solid var(--dark-gray);
  color: var(--dark-gray);
`;
