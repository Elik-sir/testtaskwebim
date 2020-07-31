import React from 'react';
import { Arcticle, NameField, Button, Input } from '../SignIn/styles';
const Signin = () => {
  return (
    <Arcticle>
      <fieldset id='sign_up' className='fieldset'>
        <legend className='legend'>Register</legend>
        <div>
          <NameField>Email</NameField>
          <Input type='email' />
          <NameField>Password</NameField>
          <Input type='password' />
          <NameField>Confirm password</NameField>
          <Input type='password' />
          <Button>Register</Button>
        </div>
      </fieldset>
    </Arcticle>
  );
};
export default Signin;
