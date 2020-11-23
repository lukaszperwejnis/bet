import React, {ReactElement} from 'react';
import {useSelector} from 'react-redux';
import {StoreType} from '../redux/types';
import {Message} from '../types/message';
import {Message as MessageComponent} from '../components/ui-components/components/Message/Message';

export const MessageTracker = (): ReactElement => {
    const messages = useSelector(({messages}: StoreType) => messages);
    return (
        <React.Fragment>
            {messages.map(({key, ...otherProps}: Message) => (
                <MessageComponent key={key} root="messages-root" {...otherProps} />
            ))}
        </React.Fragment>
    );
};
