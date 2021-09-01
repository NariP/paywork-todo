import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'module/rootReducer';
import { loginRequest, logoutRequest } from 'module/user';
import { lsHelper } from 'utils';

const useUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userLoading, userData } = useSelector(
    (state: RootState) => state.user,
  );

  const login = () => {
    dispatch(loginRequest());
    history.push('/dashboard');
  };

  const logout = () => {
    dispatch(logoutRequest());
    history.replace('/');
  };

  const isAuthenticated = () => {
    const localData = lsHelper.getItem('user');
    return localData && localData.user.userData;
  };
  return { userLoading, login, logout, userData, isAuthenticated };
};
export default useUser;
