import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'module/rootReducer';
import { loginRequest, logoutRequest } from 'module/user';
import { lsHelper } from 'utils';
import { ROOTS, ROOTS_DASHBOARD } from 'routes/paths';
import { LS_KEY } from '../constants';

const useUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userLoading, userData } = useSelector(
    (state: RootState) => state.user,
  );

  const login = () => {
    dispatch(loginRequest());
    history.push(ROOTS_DASHBOARD);
  };

  const logout = () => {
    dispatch(logoutRequest());
    history.replace(ROOTS);
  };

  const isAuthenticated = () => {
    const localData = lsHelper.getItem(LS_KEY.USER);
    return localData && localData.user.userData;
  };
  return { userLoading, login, logout, userData, isAuthenticated };
};
export default useUser;
