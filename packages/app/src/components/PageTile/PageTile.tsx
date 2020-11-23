import React, {ReactElement} from 'react';
import {Header, StyledTile} from './PageTile.styles';
import {RenderType, WithChildrenProps} from '../../types';

interface PageTitleProps extends WithChildrenProps {
    header?: RenderType;
}

export const PageTile = ({header, children}: PageTitleProps): ReactElement => (
    <StyledTile>
        {header && <Header>{header}</Header>}
        {children}
    </StyledTile>
);
