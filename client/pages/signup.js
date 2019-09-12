import React, { useState, useCallback } from 'react';
import { Form, Button, Input, Checkbox } from 'antd';

    // CUSTOM HOOKS

export const useInput = (initValue = null)=> {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e) =>{
      setter(e.target.value)
  }, [])
  return [value, handler]
}


const SignUp = () => {

  const [id, onChangeId] = useInput('')
  const [nick, onChangeNick] = useInput('')
  const [password, onChangePassword] = useInput('')


  // const [id, setId] = useState('');
  // const [nick, setNick] = useState('');
  // const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);



  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      console.log({ id, nick, password, passwordCheck, term });
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }
      if (!term) {
        return setTermError(true);
      }
    },
    [password, passwordCheck, term]
  );

  // const onChangeId = useCallback(e => {
  //   setId(e.target.value);
  // }, []);

  // const onChangeNick = useCallback(e => {
  //   setNick(e.target.value);
  // }, []);

  // const onChangePassword = useCallback(e => {
  //   setPassword(e.target.value);
  // }, []);

  const onChangePasswordCheck = useCallback(
    e => {
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    [password]
  );

  const onChangeTerm = useCallback(e => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);




  return (
    <>
      <Form onSubmit={onSubmit} style={{ padding: 20 }}>
        <div>
          <label htmlFor="user-id">ID</label>
          <br />
          <Input name="user-id" value={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nick">Nickname</label>
          <br />
          <Input
            name="user-nick"
            value={nick}
            required
            onChange={onChangeNick}
          />
        </div>
        <div>
          <label htmlFor="user-password">Password</label>
          <br />
          <Input
            name="user-password"
            value={password}
            type="password"
            required
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-password-check">Confirm Password</label>
          <br />
          <Input
            name="user-password-check"
            value={passwordCheck}
            type="password"
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && (
            <div style={{ color: 'red' }}>
              Input confirm password is not consitent with the password
            </div>
          )}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            Agree with the policy to use the service
          </Checkbox>
          {termError && (
            <div style={{ color: 'red' }}>
              You should agree with the policy to proceed
            </div>
          )}
        </div>
        <div>
          <Button type="primary" htmlType="submit">
            SignUp
          </Button>
        </div>
      </Form>
    </>
  );
};

export default SignUp;
