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
exports.__esModule = true;
var types_1 = require("./types");
exports.initialPlayerState = {};
function player(state, action) {
    if (state === void 0) { state = exports.initialPlayerState; }
    switch (action.type) {
        case types_1.LOGIN:
            return {
                username: action.payload
            };
        case types_1.UPDATE_CHARACTER:
        case types_1.SELECT_CHARACTER:
            return __assign(__assign({}, state), { selectedCharacter: action.payload });
        case types_1.UNSET_CHARACTER:
            return __assign(__assign({}, state), { selectedCharacter: {} });
        case types_1.LOGOUT:
            return exports.initialPlayerState;
        default:
            return state;
    }
}
exports["default"] = player;
