import {applyMiddleware, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducer'
import thunkMiddleware from 'redux-thunk'


const persistConfig = {
  key: 'root',
  storage,
}

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, composedEnhancer)
const persistor = persistStore(store)
export  {persistor,store}

