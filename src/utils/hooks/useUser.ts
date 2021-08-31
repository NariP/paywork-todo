import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../module/rootReducer';
import { loginRequest, logoutRequest } from '../../module/user';
// import { lsHelper } from 'utils';
// import { GoogleAuthProvider } from 'firebase/auth';

const useUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userLoading, userData } = useSelector(
    (state: RootState) => state.user,
  );

  const login = () => {
    dispatch(loginRequest());
    // if (!userData) return;
    // const credential: any = GoogleAuthProvider.credentialFromResult(userData);
    // console.log({ credential });
    // credential && lsHelper.setItem('token', credential.accessToken);
  };

  const logout = () => {
    dispatch(logoutRequest());
    history.replace('/');
    // lsHelper.removeItem('token');
  };

  return { userLoading, login, logout, userData };
};
export default useUser;
