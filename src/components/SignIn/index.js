import React from 'react';
import { Arcticle, NameField, Button, Input } from './styles';
const Signin = () => {
  return (
    <Arcticle>
      <fieldset id='sign_up' className='fieldset'>
        <legend className='legend'>SIGN IN</legend>
        <div>
          <NameField>Email</NameField>
          <Input type='email' />
          <NameField>Password</NameField>
          <Input type='password' />
          <Button>Sign In</Button>
        </div>
      </fieldset>
    </Arcticle>
  );
};
export default Signin;
