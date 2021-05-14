import React, { ReactNode } from 'react';
import { ErrorScreen } from './ErrorScreen';

export class ErrorBoundary extends React.PureComponent {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(): Record<string, boolean> {
    return {
      hasError: true,
    };
  }

  render(): ReactNode {
    return this.state.hasError ? <ErrorScreen /> : this.props.children;
  }
}
