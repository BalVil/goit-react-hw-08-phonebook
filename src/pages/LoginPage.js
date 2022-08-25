import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormWrap, Form, Button, LabelName } from './LoginPage.styled';
import { authOperations } from '../redux/auth';

const LoginPage = () => {
  const [inputs, setInputs] = useState({});

  const dispatch = useDispatch();

  const handleChange = e => {
    const nameInput = e.target.name;
    const value = e.target.value;
    setInputs(values => ({ ...values, [nameInput]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn(inputs));

    setInputs({});
  };

  return (
    <FormWrap>
      <h1>Login page</h1>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="email">
          <LabelName>Email</LabelName>
          <input
            value={inputs.email || ''}
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="password">
          <LabelName>Password</LabelName>
          <input
            value={inputs.password || ''}
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            required
          />
        </label>

        <Button type="submit">Submit</Button>
      </Form>
    </FormWrap>
  );
};
export default LoginPage;
