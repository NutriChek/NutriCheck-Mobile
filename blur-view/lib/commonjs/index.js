"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VariableBlurView = void 0;
var _reactNative = require("react-native");
const LINKING_ERROR = `The package '@candlefinance/blur-view' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const ComponentName = 'BlurViewView';
const VariableBlurView = _reactNative.UIManager.getViewManagerConfig(ComponentName) != null ? (0, _reactNative.requireNativeComponent)(ComponentName) : () => {
  throw new Error(LINKING_ERROR);
};
exports.VariableBlurView = VariableBlurView;
//# sourceMappingURL=index.js.map