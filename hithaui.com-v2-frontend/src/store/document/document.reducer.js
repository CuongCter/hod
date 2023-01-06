import { DocumentActionsEnum } from './document.action';

const initialState = {
  isLoading: false,
  error: '',
  data: [],
  found: true,
  repeat: false,
  params: {}
};

const documentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DocumentActionsEnum.LOADING:
      return {
        ...state,
        isLoading: true
      };

    case DocumentActionsEnum.STOP_LOADING:
      return {
        ...state,
        isLoading: false
      };

    case DocumentActionsEnum.SET_DATA:
      // console.log('[payload--]', payload);
      return {
        ...state,
        found: true,
        repeat: true,
        data: payload.data,
        params: payload?.params
      };

    case DocumentActionsEnum.NOT_FOUND:
      return {
        ...state,
        found: false
      };

    default:
      return state;
  }
};

export default documentReducer;
