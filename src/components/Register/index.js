import React from 'react';
import { Arcticle, NameField, Button, Input } from '../SignIn/styles';
const Signin = () => {
  const SendCredentionals = async () => {
    const w = await fetch(
      'http://emphasoft-test-assignment.herokuapp.com/api/v1/users/',
      {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Token 781bd9f1de084f4daa7ba2aa8a71a2eab855354e',
        },
      },
    );
    const d = await w.json();
    console.log(d);
  };
  return (
    <Arcticle>
      <fieldset id='sign_up' className='fieldset'>
        <legend className='legend'>REGISTER</legend>
        <div>
          <NameField>Email</NameField>
          <Input type='email' />
          <NameField>Password</NameField>
          <Input type='password' />
          <NameField>Confirm password</NameField>
          <Input type='password' />
          <Button onClick={() => SendCredentionals()}>Register</Button>
        </div>
      </fieldset>
    </Arcticle>
  );
};
export default Signin;
