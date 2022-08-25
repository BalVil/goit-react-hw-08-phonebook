import { Form, Button, LabelName } from './ContactForm.styled';
import { useAddContact } from 'hooks/useAddContact';
// import { Spinner } from 'components/Spinner/Spinner';

const ContactForm = () => {
  const { inputs, handleChange, handleSubmit } = useAddContact();

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="name">
        <LabelName>Name</LabelName>
        <input
          value={inputs.name || ''}
          onChange={handleChange}
          type="text"
          name="name"
          id="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="number">
        <LabelName>Phone Number</LabelName>
        <input
          value={inputs.number || ''}
          onChange={handleChange}
          type="tel"
          name="number"
          id="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button type="submit">
        {/* {adding && <Spinner size={18} />} */}
        Add contact
      </Button>
    </Form>
  );
};

export default ContactForm;
