"use strict";
var _a;
exports.__esModule = true;
var redux_1 = require("redux");
var redux_persist_1 = require("redux-persist");
var storage_1 = require("redux-persist/lib/storage");
var redux_devtools_extension_1 = require("redux-devtools-extension");
var redux_thunk_1 = require("redux-thunk");
var redux_2 = require("redux");
var reducers_1 = require("./characters/reducers");
var reducers_2 = require("./registration/reducers");
var reducers_3 = require("./player/reducers");
var appReducer = redux_2.combineReducers({
    characters: reducers_1["default"],
    users: reducers_2["default"],
    player: reducers_3["default"]
});
var persistConfig = {
    key: "root",
    storage: storage_1["default"]
};
var persistedReducer = redux_persist_1.persistReducer(persistConfig, appReducer);
function configureStore() {
    var middlewares = [redux_thunk_1["default"]];
    var middlewareEnhancer = redux_1.applyMiddleware.apply(void 0, middlewares);
    var store = redux_1.createStore(persistedReducer, redux_devtools_extension_1.composeWithDevTools(middlewareEnhancer));
    var persistor = redux_persist_1.persistStore(store);
    return { store: store, persistor: persistor };
}
exports["default"] = configureStore;
exports.store = (_a = configureStore(), _a.store), exports.persistor = _a.persistor;
