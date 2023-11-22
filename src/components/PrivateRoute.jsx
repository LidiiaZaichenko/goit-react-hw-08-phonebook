import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../Redux/selectors';

export const PrivateRoute = ({ component: Component, redirectTo: addres }) => {
  const { isLoaggedIn, isRefreshing } = useSelector(selectIsLoading);

  const shouldRedirect = !isLoaggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={addres} /> : Component;
};
