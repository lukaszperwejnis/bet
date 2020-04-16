import { message } from 'antd';

export const Messages = {
    success(notification) {
        message.success(notification);
    },
    error(notification) {
        message.error(notification);
    }
};
