import { SubjectActionsEnum } from './subject.action';

const initialState = {
  isLoading: false,
  error: '',
  data: [],
  found: true
};

const subjectReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SubjectActionsEnum.LOADING:
      return {
        ...state,
        isLoading: true
      };

    case SubjectActionsEnum.STOP_LOADING:
      return {
        ...state,
        isLoading: false
      };

    case SubjectActionsEnum.SET_DATA:
      // console.log('[data--]', payload.data);
      return {
        ...state,
        found: true,
        data: payload.data.data
      };
    case SubjectActionsEnum.NOT_FOUND:
      return {
        ...state,
        found: false
      };

    default:
      return state;
  }
};

export default subjectReducer;
