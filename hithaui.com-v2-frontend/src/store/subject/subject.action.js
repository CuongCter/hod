import { trackPromise } from 'react-promise-tracker';
import SubjectServices from './subject.service';

export const SubjectActionsEnum = {
  LOADING: 'subject/LOADING',
  STOP_LOADING: 'subject/STOP_LOADING',
  SET_DATA: 'subject/SET_DATA',
  FAILED: 'subject/FAILED',
  NOT_FOUND: 'subject/NOT_FOUND'
};

export const subjectLoadingAction = () => ({
  type: SubjectActionsEnum.LOADING
});

export const subjectStopLoadingAction = () => ({
  type: SubjectActionsEnum.STOP_LOADING
});

export const subjectNotFoundAction = () => ({
  type: SubjectActionsEnum.NOT_FOUND
});

export const subjectFailedAction = (error) => ({
  type: SubjectActionsEnum.FAILED,
  payload: { error }
});

export const subjectSetDataAction = (data) => ({
  type: SubjectActionsEnum.SET_DATA,
  payload: { data }
});

export const subjectAsyncAction = () => async (dispatch) => {
  try {
    dispatch(subjectLoadingAction());
    const data = await trackPromise(SubjectServices.getSubjects());
    const checkData = data.data.data;
    if (checkData.length > 0) {
      dispatch(subjectSetDataAction(data));
    } else {
      dispatch(subjectNotFoundAction());
    }
  } catch (error) {
    dispatch(subjectFailedAction(error.msg));
  } finally {
    dispatch(subjectStopLoadingAction());
  }
};
