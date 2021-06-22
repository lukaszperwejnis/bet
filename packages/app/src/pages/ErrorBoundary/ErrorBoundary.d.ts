import React, { ReactNode } from 'react';
export declare class ErrorBoundary extends React.PureComponent {
    state: {
        hasError: boolean;
    };
    static getDerivedStateFromError(): Record<string, boolean>;
    render(): ReactNode;
}
