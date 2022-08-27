import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ToastContainer, Slide } from 'react-toastify';
import { GlobalStyle } from 'components/GlobalStyle';
import { Container, Header } from './SharedLayout.styled';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import Navigation from 'components/Navigation';
import { authSelectors } from 'redux/auth';
import { SkeletonFrame } from 'components/Skeleton/Skeleton';

const SharedLayout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isFetchingUser = useSelector(authSelectors.getIsFetchingUser);

  return (
    <Container>
      {isFetchingUser ? (
        <SkeletonFrame />
      ) : (
        <>
          <Header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Header>

          <Suspense>
            <Outlet />
          </Suspense>
        </>
      )}

      <ToastContainer autoClose={3000} transition={Slide} />
      <GlobalStyle />
    </Container>
  );
};
export default SharedLayout;
