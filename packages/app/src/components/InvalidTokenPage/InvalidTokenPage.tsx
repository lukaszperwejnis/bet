import { FormattedMessage } from 'react-intl';
import { Page } from '../Page';
import { PageTile } from '..';

export const InvalidTokenPage = (): JSX.Element => (
  <Page centered>
    <PageTile header={<FormattedMessage id="invalidToken.header" />}>
      <FormattedMessage id="invalidToken.description" />
    </PageTile>
  </Page>
);
