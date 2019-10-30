import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import characters from "./characters/reducers";
import users from "./registration/reducers";
import player from "./player/reducers";

const appReducer = combineReducers({
  characters,
  users,
  player
});

export type AppState = ReturnType<typeof appReducer>;

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export default function configureStore() {
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    persistedReducer,
    composeWithDevTools(middlewareEnhancer)
  );

  const persistor = persistStore(store);

  return { store, persistor };
}

export const { store, persistor } = configureStore();