import { ReactElement, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Message as MessageStructure } from '../../types';
import { Container, Success, Error, Warning, Info } from './styles';

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
  el.style.cssText =
    '  position: fixed;\n' +
    '  box-sizing: border-box;\n' +
    '  padding: 0;\n' +
    '  z-index: 1010;\n' +
    '  top: 15px;\n' +
    '  pointer-events: none;\n' +
    '  display: flex;\n' +
    '  justify-content: center;\n' +
    '  left: 0;\n' +
    '  right: 0;';

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
