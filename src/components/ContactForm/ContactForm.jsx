import {
  Form,
  FormButton,
  TextField,
  Input,
  Label,
} from './ContactForm.styled';
import { useAddContact } from 'hooks/useAddContact';
import { Spinner } from 'components/Spinner/Spinner';

const ContactForm = () => {
  const { inputs, handleChange, handleSubmit, isloading } = useAddContact();

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <TextField>
        <Input
          value={inputs.name || ''}
          onChange={handleChange}
          type="text"
          name="name"
          id="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="&nbsp;"
        />
        <Label htmlFor="name">Name</Label>
      </TextField>
      <TextField>
        <Input
          value={inputs.number || ''}
          onChange={handleChange}
          type="tel"
          name="number"
          id="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="&nbsp;"
        />
        <Label htmlFor="password">Number</Label>
      </TextField>
      <FormButton
        sx={{
          minWidth: 100,
        }}
        type="submit"
        variant="text"
      >
        {isloading === 'adding' && <Spinner size={18} />}
        Add contact
      </FormButton>
    </Form>
  );
};

export default ContactForm;
