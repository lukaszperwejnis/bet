import { ReactElement, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Message as MessageStructure } from '@structures';
import { Container, Success, Error, Warning, Info } from './Message.styles';
import './message.css';

const defaultProps = Object.freeze({
  root: 'message-root',
  duration: 3,
});

type MessageComponentProps = {
  type: MessageStructure.Type;
  text: string;
};

type MessageProps = typeof defaultProps & MessageComponentProps;

const Icons = {
  [MessageStructure.Type.Success]: <Success icon="tick" />,
  [MessageStructure.Type.Error]: <Error icon="circleWithCross" />,
  [MessageStructure.Type.Warning]: <Warning icon="warning" />,
  [MessageStructure.Type.Info]: <Info icon="infoCircle" />,
};

const MessageComponent = ({ type, text }: MessageComponentProps) => {
  const icon = Icons[type];
  return (
    <Container type={type}>
      {icon}
      {text}
    </Container>
  );
};

export const Message = ({
  root,
  ...otherProps
}: MessageProps): ReactElement => {
  const rootContainer = document.getElementById(root);
  const el = document.createElement('div');
  el.className = 'c-message__root';

  useEffect(() => {
    if (rootContainer) {
      rootContainer.appendChild(el);
    }

    return () => {
      if (rootContainer) {
        rootContainer.removeChild(el);
      }
    };
  }, []);

  return ReactDOM.createPortal(<MessageComponent {...otherProps} />, el);
};

Message.defaultProps = defaultProps;
