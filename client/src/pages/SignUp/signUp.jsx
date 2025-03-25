import React from 'react';
import styled from 'styled-components';
import Guest from '../../components/Guest/index.jsx';
import { Link } from 'react-router-dom';

const FormContainer = styled.div`
    margin: auto;
    margin-top: 1.5rem;
    width: 83.3333%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 768px) {
        width: 50%;
    }
    
    @media (min-width: 1024px) {
        width: 66.6667%;
    }

    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {
        width: 50%;
    }
`;

const PasswordFeatures = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    background-color: #f9fafb;
`;

const PasswordFeature = styled.li`
    font-size: 0.75rem;
`;

const Signin = styled.span`
    text-align: center;
`;

const Error = styled.span`
    font-size: 0.75rem;
    color: #dc2626;
`;

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export default function SignUp() {
  return (
    <Guest>
      <FormContainer>
        <Signin>
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Log in
          </Link>
        </Signin>
      </FormContainer>
    </Guest>
  );
}
