import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  FormWrap,
  Form,
  FormButton,
  Title,
  TextField,
  Input,
  Label,
} from 'components/ContactForm/ContactForm.styled';
import { authOperations } from 'redux/auth';

const RegisterPage = () => {
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
  };

  return (
    <FormWrap>
      <Title>Registration page</Title>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <TextField>
          <Input
            value={inputs.name || ''}
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. A name cannot begin with a space."
            required
            placeholder="&nbsp;"
          />
          <Label htmlFor="name">Name</Label>
        </TextField>
        <TextField>
          <Input
            value={inputs.email || ''}
            type="email"
            name="email"
            id="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="For example: johndoe@mail.com"
            onChange={handleChange}
            required
            placeholder="&nbsp;"
          />
          <Label htmlFor="email">Email</Label>
        </TextField>
        <TextField>
          <Input
            value={inputs.password || ''}
            type="password"
            name="password"
            id="password"
            pattern=".{8,}"
            title="Eight or more characters"
            onChange={handleChange}
            required
            placeholder="&nbsp;"
          />
          <Label htmlFor="password">Password</Label>
        </TextField>

        <FormButton
          sx={{
            minWidth: 100,
          }}
          type="submit"
          variant="text"
        >
          Submit
        </FormButton>
      </Form>
    </FormWrap>
  );
};
export default RegisterPage;
