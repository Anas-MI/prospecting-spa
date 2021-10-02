import {combineReducers} from 'redux';
import {fetchData} from './fetchData';
export const rootReducer = combineReducers({fetchData});

export type RootState = ReturnType<typeof rootReducer>;
