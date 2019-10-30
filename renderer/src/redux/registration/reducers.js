"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var types_1 = require("./types");
exports.initialUserListState = [];
function users(state, action) {
    if (state === void 0) { state = exports.initialUserListState; }
    switch (action.type) {
        case types_1.REGISTER:
            return __spreadArrays(state, [
                { username: action.payload.username, password: action.payload.password }
            ]);
        case types_1.DELETE_ACCOUNT:
            var newState = state.filter(function (item) { return item.username !== action.payload.username; });
            console.log(newState);
            return newState;
        default:
            return state;
    }
}
exports["default"] = users;
