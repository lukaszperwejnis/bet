import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { ErrorScreen } from './ErrorScreen';
export class ErrorBoundary extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            hasError: false,
        };
    }
    static getDerivedStateFromError() {
        return {
            hasError: true,
        };
    }
    render() {
        return this.state.hasError ? _jsx(ErrorScreen, {}, void 0) : this.props.children;
    }
}
