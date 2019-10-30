"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var types_1 = require("./types");
exports.initialCharacterState = [];
function characters(state, action) {
    if (state === void 0) { state = exports.initialCharacterState; }
    switch (action.type) {
        case types_1.ADD_CHARACTER:
            return __spreadArrays(state, [action.payload]);
        case types_1.LEVEL_UP_CHARACTER:
            return state.map(function (item) {
                return item.id === action.payload.id ? __assign({ level: item.level++ }, item) : item;
            });
        case types_1.DELETE_CHARACTER:
            return state.filter(function (item) { return item.id !== action.payload.id; });
        default:
            return state;
    }
}
exports["default"] = characters;
