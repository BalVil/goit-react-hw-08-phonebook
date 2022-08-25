import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormWrap, Form, Button, LabelName } from './RegisterPage.styled';
import { authOperations } from '../redux/auth';

export const RegisterPage = () => {
  const [inputs, setInputs] = useState({});

  const dispatch = useDispatch();

  const handleChange = e => {
    const nameInput = e.target.name;
    const value = e.target.value;
    setInputs(values => ({ ...values, [nameInput]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.register(inputs));

    setInputs({});
  };

  return (
    <FormWrap>
      <h1>Registration page</h1>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="name">
          <LabelName>Name</LabelName>
          <input
            value={inputs.name || ''}
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            required
          />
        </label>
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
