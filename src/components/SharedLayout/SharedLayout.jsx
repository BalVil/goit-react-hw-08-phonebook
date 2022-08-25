// import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ToastContainer, Slide } from 'react-toastify';
import { GlobalStyle } from 'components/GlobalStyle';
import { Container, Header } from './SharedLayout.styled';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import Navigation from 'components/Navigation';
import { authSelectors } from 'redux/auth';

const SharedLayout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Container>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      {/* <Suspense fallback={<h3>Loading...</h3>}> */}
      <Outlet />
      {/* </Suspense> */}
      <ToastContainer autoClose={3000} transition={Slide} />
      <GlobalStyle />
    </Container>
  );
};
export default SharedLayout;
