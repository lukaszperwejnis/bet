import {Page} from '../Page';
import React, {ReactElement} from 'react';
import {FormattedMessage} from 'react-intl';
import {PageTile} from '..';

export const InvalidTokenPage = (): ReactElement => (
    <Page centered>
        <PageTile header={<FormattedMessage id="invalidToken.header" />}>
            <FormattedMessage id="invalidToken.description" />
        </PageTile>
    </Page>
);
