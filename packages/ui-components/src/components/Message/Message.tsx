import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Container, Success, Error, Warning, Info } from "./styles";
import "./message.css";

const defaultProps = Object.freeze({
  root: "message-root",
  duration: 3,
});

export type MessageType = "success" | "error" | "warning" | "info";

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

const MessageComponent = ({ type, text }: MessageComponentProps) => {
  const icon = Icons[type];
  return (
    <Container type={type}>
      {icon}
      {text}
    </Container>
  );
};

export const Message = ({ root, ...otherProps }: MessageProps): JSX.Element => {
  const rootContainer = document.getElementById(root);
  const el = document.createElement("div");
  el.className = "c-message__root";

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

  return createPortal(<MessageComponent {...otherProps} />, el);
};

Message.defaultProps = defaultProps;
