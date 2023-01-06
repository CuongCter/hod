import { trackPromise } from 'react-promise-tracker';
import DocumentServices from './document.service';

export const DocumentActionsEnum = {
  LOADING: 'document/LOADING',
  STOP_LOADING: 'document/STOP_LOADING',
  SET_DATA: 'document/SET_DATA',
  FAILED: 'document/FAILED',
  NOT_FOUND: 'document/NOT_FOUND'
};

export const documentLoadingAction = () => ({
  type: DocumentActionsEnum.LOADING
});

export const documentStopLoadingAction = () => ({
  type: DocumentActionsEnum.STOP_LOADING
});

export const documentFailedAction = (error) => ({
  type: DocumentActionsEnum.FAILED,
  payload: { error }
});

export const documentNotFoundAction = () => ({
  type: DocumentActionsEnum.NOT_FOUND
});

export const documentSetDataAction = (data, params) => ({
  type: DocumentActionsEnum.SET_DATA,
  payload: { data, params }
});

export const documentAsyncAction = (params) => async (dispatch) => {
  try {
    dispatch(documentLoadingAction());
    const data = await trackPromise(DocumentServices.getDocumentsAll(params));
    const checkData = data.data?.data;
    if (checkData.length > 0) {
      dispatch(documentSetDataAction(data.data, params));
    } else {
      dispatch(documentNotFoundAction());
    }
  } catch (error) {
    dispatch(documentFailedAction(error.msg));
  } finally {
    dispatch(documentStopLoadingAction());
  }
};
