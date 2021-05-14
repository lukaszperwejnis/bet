import { RenderType, WithChildrenProps } from '@structures';
import { Header, StyledTile } from './PageTile.styles';

interface PageTitleProps extends WithChildrenProps {
  header?: RenderType;
}

export const PageTile = ({ header, children }: PageTitleProps): JSX.Element => (
  <StyledTile>
    <>{header && <Header>{header}</Header>}</>
    {children}
  </StyledTile>
);
