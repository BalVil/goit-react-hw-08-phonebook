import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

const PrivateRoute = ({ children, redirectPath = '/login' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to={redirectPath} />;
  }
  return children;
  // return isLoggedIn ? children : <Navigate to="/login" />;
};
export default PrivateRoute;
