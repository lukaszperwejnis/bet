import React from 'react';
import { useSelector } from 'react-redux';
import { StoreType } from '@stores/index';
import { Message } from '@structures';
import { Message as MessageComponent } from '../components/ui-components/components/Message/Message';

export const MessageTracker = (): JSX.Element => {
  const messages = useSelector((store: StoreType) => store.messages);
  return (
    <>
      {messages.map(({ key, ...otherProps }: Message.Message) => (
        <MessageComponent key={key} root="messages-root" {...otherProps} />
      ))}
    </>
  );
};
