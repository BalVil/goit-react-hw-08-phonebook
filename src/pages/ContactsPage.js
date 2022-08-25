import ContactForm from 'components/ContactForm/ContactForm';
import { ContactsWrap, Section, Title } from './ContactsPage.styled';
import ContactList from 'components/ContactList/ContactList';

export default function Contacts() {
  return (
    <ContactsWrap>
      <Section>
        <Title>Phonebook</Title>
        <ContactForm />
      </Section>
      <Section>
        <h2>Contacts</h2>
        <ContactList />
      </Section>
    </ContactsWrap>
  );
}
