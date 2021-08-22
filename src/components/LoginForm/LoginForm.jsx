import { Link } from "react-router-dom";
import styled from "styled-components";

import { styleVar } from "../../utils/styleVariables";

export function LoginForm() {
  return (
    <form>
      <LabeledInput>
        <label for="username">Username</label>
        <input type="text" id="username" />
      </LabeledInput>

      <LabeledInput>
        <label for="password">Password</label>
        <input type="password" id="password" />
      </LabeledInput>

      <LabeledCheckbox>
        <input type="checkbox" id="remember-me" />
        <label for="remember-me">Remember me</label>
      </LabeledCheckbox>

      <SignInLink to="/profile">
        <SignInButton>Sign In</SignInButton>
      </SignInLink>
    </form>
  );
}

const LabeledInput = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 0 1.5rem 0;

  text-align: left;

  label {
    margin: 0 0 0.25rem 0;

    font-size: 1.1rem;
    font-weight: 700;
  }

  input {
    padding: 0.5rem;
    border: 1px solid ${styleVar.neutral900};
    border-radius: 0.25rem;

    font-size: 1.2rem;
  }
`;

const LabeledCheckbox = styled.div`
  display: flex;

  label {
    margin: 0 0 0 0.5rem;
  }
`

const SignInLink = styled(Link)`
  text-decoration: none;
`;

const SignInButton = styled.button`
  display: block;

  width: 100%;
  margin: 2rem 0 0 0;
  padding: 0.75rem;
  border: none;
  border-radius: 0.25rem;

  color: white;
  font-size: 1.2rem;
  font-weight: 700;

  background: ${styleVar.primary600};

  cursor: pointer;
  transition: all 300ms;

  &:hover {
    background: ${styleVar.primary700};
  }
`;
