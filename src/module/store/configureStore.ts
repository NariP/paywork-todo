import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'module/sagas';
import { lsHelper } from 'utils';
import { LS_KEY } from '../../utils/constants';

const getStore = () => {
  const devMode = process.env.NODE_ENV === 'development';
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
    devTools: devMode,
  });

  store.subscribe(() => {
    lsHelper.setItem(LS_KEY.USER, store.getState());
  });

  sagaMiddleware.run(rootSaga);
  return store;
};

export default getStore;
