import React, { useState } from 'react';
import { Arcticle, NameField, Button, Input } from './styles';
import { connect } from 'react-redux';
import { fetchStartAsync } from '../../redux/user/actions';
import Loader from 'react-loader-spinner';

const Signin = ({ getToken, isLoading }) => {
  const SendCredentionals = () => {
    const usernamePattern = /^[\w.@+-]+$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (
      passwordPattern.exec(password) &&
      usernamePattern.exec(username) &&
      username.length <= 150 &&
      password.length <= 128
    )
      getToken({ username, password });
    else {
      alert(
        'Password should contains min 1 capital letter , min 1 digit and has more 8 character ',
      );
    }
  };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handlerUsernameChange = (e) => setUsername(e.target.value);
  const handlerPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <Arcticle>
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            right: 50,
            left: 50,
            marginBottom: 'auto',
            marginTop: '90px',
          }}
        >
          <Loader type='Puff' color='#00BFFF' height={100} width={100} />
        </div>
      )}
      <fieldset id='sign_up' className='fieldset'>
        <legend className='legend'>SIGN IN</legend>
        <div>
          <NameField>Email</NameField>
          <Input type='email' onChange={handlerUsernameChange} />
          <NameField>Password</NameField>
          <Input type='password' onChange={handlerPasswordChange} />
          <Button onClick={SendCredentionals} disabled={isLoading}>
            Sign In
          </Button>
        </div>
      </fieldset>
    </Arcticle>
  );
};
const mapStateToProps = (state) => ({
  isLoading: state.user.isLoading,
});
const mapDispatchToProps = (dispatch) => ({
  getToken: (credentional) => dispatch(fetchStartAsync(credentional)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
