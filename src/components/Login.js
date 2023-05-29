import React from "react";
import { styled } from "styled-components";

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
          {/* Starting of Hero component  */}
          <Hero>
            <h1>Welcome to your professional community</h1>
            {/* Form Section starts here  */}
            <Form>
              <LoginForm>
                {/* Email section */}
                <EmailOrPhone>
                  <label htmlFor="emailorphone">Email or phone</label>
                  <input type="text" name="emailorphone" id="emailorphone" />
                </EmailOrPhone>
                {/* Password Section */}
                <Password>
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" />
                </Password>
                {/* Sign in button section */}
                <SignInButton>
                  <a href="#">Sign in</a>
                </SignInButton>
              </LoginForm>
              {/* devider starts here  */}
              <Devider>
                <Done></Done>
                <p>or</p>
                <Dtwo></Dtwo>
              </Devider>
              {/* Sign in with google button  */}
              <Google>
                <img src="images/google.svg" alt="" />
                Sign in with Google
              </Google>
            </Form>
            {/* form section ends here  */}
            {/* Hero Image section  */}
            <img src="/images/login-hero.svg" alt="" srcset="" />
          </Hero>
          {/* Hero Section ends  */}
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
  /* align-content: start; */
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    /* margin: auto; */
    margin-top: 25px;
    min-height: 0;
    padding: 0;
  }
`;
const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    font-weight: 200;
    color: #8f5849;
    line-height: 70px;
    @media (max-width: 767px) {
      text-align: center;
      font-size: 31px;
      font-weight: inherit;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    z-index: -1;
    width: 730px;
    height: 690px;
    position: absolute;
    /* bottom: -2px; */
    bottom: 174px;
    right: -150px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  /* width: 408px; */
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
`;

const EmailOrPhone = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  label {
    font-size: 18px;
    font-weight: 100;
    /* padding: 5px; */
    margin-bottom: 5px;
  }
  input {
    width: 380px;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.6);
    border-radius: 5px;
  }
`;
const Password = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  label {
    font-size: 18px;
    font-weight: 100;
    /* padding: 5px; */
    margin-bottom: 5px;
  }
  input {
    width: 380px;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.6);
    border-radius: 5px;
  }
`;
// Check with this for imput fields for styling
const SignInButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0077b5;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  margin-top: 18px;
  vertical-align: middle;
  font-size: 15px;

  cursor: pointer;
  a {
    color: #f5f5f5;
    text-decoration: none;
  }

  &:hover {
    background-color: #005e8b;
  }
`;

const Devider = styled.div`
  display: flex;
  flex-direction: row;

  p {
    color: rgba(0, 0, 0, 0.9);
    font-size: 14px;
    margin: 10px;
    margin-left: 16px;
    margin-right: 16px;
  }
`;
const Done = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.4);
  margin: 20px 0;
`;
const Dtwo = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.4);
  margin: 20px 0;
`;
const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 /60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;
