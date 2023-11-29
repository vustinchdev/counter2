import { combineReducers, legacy_createStore } from 'redux';
import { numbersReducer } from './numbers-reducer';


const rootReducer = combineReducers({
    numbers: numbersReducer,
})

export const store = legacy_createStore(rootReducer)

export type RootStateType = ReturnType<typeof rootReducer>

