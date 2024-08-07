import { useState } from 'react';
import styled from 'styled-components';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  `;
  const Label = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    /**invalid label conditional styled Components */
    color: ${({ invalid }) =>
      invalid ? '#f87171' : '#10b981'}; // updated line
    text-align: center;
  `;

  const Input = styled.input`
    width: 100%;
    padding: 0.75rem 1rem;
    line-height: 1.5;
    ${'' /* background-color: #d1d5db; */}
    ${'' /* color: #374151; */}
    border: 1px solid transparent;
    border-radius: 0.25rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

    /**invalid input conditional styled Components */
    ${
      '' /* color: #ef4444;
    border-color: #f73f3f;
    background-color: #fed2d2; */
    }
    color: ${({ invalid }) => (invalid ? '#ef4444' : '#374151')};
    border-color: ${({ invalid }) => (invalid ? '#f73f3f' : '')};
    background-color: ${({ invalid }) => (invalid ? '#fed2d2' : ' #d1d5db')};
  `;

  return (
    <div id='auth-inputs'>
      <Container>
        <p>
          <Label invalid={emailNotValid}>Email</Label>
          <Input
            type='email'
            invalid={emailNotValid}
            className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <Label>Password</Label>
          <Input
            type='password'
            invalid={emailNotValid}
            className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </Container>
      <div className='actions'>
        <button type='button' className='text-button'>
          Create a new account
        </button>
        <button className='button' onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </div>
  );
}
