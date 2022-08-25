import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

const PublicRoute = ({ children, redirectPath = '/', restricted = false }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  if (shouldRedirect) {
    return <Navigate to={redirectPath} />;
  }
  return children;
  // return shouldRedirect ? <Navigate to="/" /> : children;
};
export default PublicRoute;
