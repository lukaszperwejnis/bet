import React, {ReactElement} from 'react';
import ReactDOM from 'react-dom';
import {Container, Success, Error, Warning, Info} from './Message.styles';
import './message.css';

const defaultProps = Object.freeze({
    root: 'message-root',
    duration: 3,
});

export type MessageType = 'success' | 'error' | 'warning' | 'info';

type MessageComponentProps = {
    type: MessageType;
    text: string;
};

type MessageProps = typeof defaultProps & MessageComponentProps;

const Icons = {
    success: <Success icon="tick" />,
    error: <Error icon="circleWithCross" />,
    warning: <Warning icon="warning" />,
    info: <Info icon="infoCircle" />,
};

export const Message = ({root, ...otherProps}: MessageProps): ReactElement => {
    const rootContainer = document.getElementById(root);
    const el = document.createElement('div');
    el.className = 'c-message__root';

    React.useEffect(() => {
        rootContainer.appendChild(el);
        return () => rootContainer.removeChild(el);
    }, []);

    return ReactDOM.createPortal(<MessageComponent {...otherProps} />, el);
};

Message.defaultProps = defaultProps;

const MessageComponent = ({type, text}: MessageComponentProps) => {
    const icon = Icons[type];
    console.log({icon});
    return (
        <Container type={type}>
            {icon}
            {text}
        </Container>
    );
};
