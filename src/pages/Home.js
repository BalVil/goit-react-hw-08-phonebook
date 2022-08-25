import homePageImage from './contacts.jpg';
const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <div>
      <img src={homePageImage} alt="phonebook" />
    </div>
    <h1 style={styles.title}>
      Welcome to our phonebook app!
      <span role="img" aria-label="Greeting icon">
        💁‍♀️
      </span>
    </h1>
    <h2>Make yourself at home</h2>
  </div>
);

export default HomeView;
