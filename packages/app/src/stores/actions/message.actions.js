'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.messageActions = exports.unmountMessage = exports.mountMessage = void 0;
const types_1 = require('@stores/types');
const _structures_1 = require('@structures');
const index_1 = require('@stores/index');
const mountMessage = (payload) => ({
  type: types_1.MessageActionType.MountMessage,
  payload,
});
exports.mountMessage = mountMessage;
const unmountMessage = (payload) => ({
  type: types_1.MessageActionType.UnmountMessage,
  payload,
});
exports.unmountMessage = unmountMessage;
function message(type, text, duration = 3) {
  const key = new Date().getTime();
  index_1.rootStore.dispatch(
    exports.mountMessage({
      key,
      type,
      text,
      duration,
    }),
  );
  setTimeout(() => {
    index_1.rootStore.dispatch(
      exports.unmountMessage({
        key,
      }),
    );
  }, duration * 1000);
}
exports.messageActions = {
  success: message.bind(this, _structures_1.Message.Type.Success),
  error: message.bind(this, _structures_1.Message.Type.Error),
  warning: message.bind(this, _structures_1.Message.Type.Warning),
  info: message.bind(this, _structures_1.Message.Type.Info),
};
