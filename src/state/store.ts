import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger';
import sidebarReducer from './sidebar.slice'

export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
  middleware: [logger],
});
