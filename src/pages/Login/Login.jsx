import styled from "styled-components";

import { LoginForm } from "../../components/Forms/LoginForm";

import { styleVar } from "../../utils/style/styleVariables";

export function Login() {
  return (
    <LoginMain>
      <LoginFormContainer>
        <i className="fa fa-user-circle"></i>

        <h2>Sign In</h2>

        <LoginForm />
      </LoginFormContainer>
    </LoginMain>
  );
}

const LoginMain = styled.main`
  padding: 3rem;

  background: ${styleVar.secondary900};
`;

const LoginFormContainer = styled.section`
  width: 20rem;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 0.25rem;

  background: white;

  i {
    color: ${styleVar.secondary900};
    font-size: 5rem;
  }
`;
