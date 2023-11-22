import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoading } from '../Redux/selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoaggedIn } = useSelector(selectIsLoading);
  return isLoaggedIn ? <Navigate to={redirectTo} /> : Component;
};
