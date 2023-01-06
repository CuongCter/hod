import AuthServices from './auth.service';

const AuthActionsEnum = {
  LOADING: 'auth/LOADING',
  STOP_LOADING: 'auth/STOP_LOADING',
  SET_DATA: 'auth/SET_DATA',
  FAILED: 'auth/FAILED',
  SET_TOKEN: 'auth/TOKEN',
  LOGOUT: 'auth/LOGOUT',
  RESET_ERROR: 'auth/RESET_ERROR',
  SUBMITTING: 'auth/SUBMITTING',
  STOP_SUBMITTING: 'auth/STOP_SUBMITTING'
};

export const authLoadingAction = () => ({
  type: AuthActionsEnum.LOADING
});

export const authStopLoadingAction = () => ({
  type: AuthActionsEnum.STOP_LOADING
});

export const authSubmittingAction = () => ({
  type: AuthActionsEnum.SUBMITTING
});

export const authStopSubmittingAction = () => ({
  type: AuthActionsEnum.STOP_SUBMITTING
});

export const authFailedAction = (error) => ({
  type: AuthActionsEnum.FAILED,
  payload: { error }
});

export const authSetDataAction = (data) => ({
  type: AuthActionsEnum.SET_DATA,
  payload: { data }
});

export const authSetAccessToken = (token) => ({
  type: AuthActionsEnum.SET_TOKEN,
  payload: { token }
});

export const authLogout = () => ({
  type: AuthActionsEnum.LOGOUT
});

export const resetError = () => ({
  type: AuthActionsEnum.RESET_ERROR
});

export const authSignInAsyncAction =
  (studentCode, password, navigate) => async (dispatch) => {
    try {
      dispatch(authLoadingAction());
      const res = await AuthServices.signIn(studentCode, password);
      dispatch(authSetDataAction(res.data));
      navigate('/app/documents');
    } catch (error) {
      dispatch(authFailedAction(error.message));
    } finally {
      dispatch(authStopLoadingAction());
    }
  };
export const authForgetPasswordAsyncAction = () => async (dispatch) => {
  try {
    dispatch(authLoadingAction());
    const res = await AuthServices.forgetPassword();
    dispatch(authSetDataAction(res.data));
  } catch (error) {
    dispatch(authFailedAction(error.msg));
  } finally {
    dispatch(authStopLoadingAction());
  }
};

export const authGetProfileAsyncAction = () => async (dispatch) => {
  try {
    dispatch(authLoadingAction());

    const res = await AuthServices.getProfile();
    dispatch(authSetDataAction({ user: { ...res.data } }));
  } catch (error) {
    dispatch(authFailedAction(error.msg));
  } finally {
    dispatch(authStopLoadingAction());
  }
};

export const authUpdateProfileAsyncAction = (values) => async (dispatch) => {
  try {
    dispatch(authSubmittingAction());

    await AuthServices.updateProfile(values);
    dispatch(authSetDataAction({ user: { ...values } }));
  } catch (error) {
    dispatch(authFailedAction(error.msg));
  } finally {
    dispatch(authStopSubmittingAction());
  }
};

export default AuthActionsEnum;
