import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import authReducer from './auth/auth.reducer';
import subjectReducer from './subject/subject.reducer';
import documentReducer from './document/document.reducer';

const persistAuth = {
  key: 'auth',
  storage
};

const rootReducer = combineReducers({
  auth: persistReducer(persistAuth, authReducer),
  subjects: subjectReducer,
  documents: documentReducer
});

export default rootReducer;
