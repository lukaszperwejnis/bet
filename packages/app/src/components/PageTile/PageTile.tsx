import { RenderType, WithChildrenProps } from '@structures';
import { Loader } from '@bet/ui-components';
import { Description, Header, StyledTile } from './styles';

interface PageTitleProps extends WithChildrenProps {
  header?: RenderType;
  isLoading?: boolean;
}

export const PageTile = ({
  header,
  children,
  isLoading,
}: PageTitleProps): JSX.Element => (
  <StyledTile isLoading={isLoading}>
    <>{header && <Header>{header}</Header>}</>
    <Description>{children}</Description>
    <>{isLoading && <Loader />}</>
  </StyledTile>
);
