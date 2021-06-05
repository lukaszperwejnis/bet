import { createIntl, createIntlCache } from 'react-intl';
import { pl as messages } from '../locales/pl';
export const intl = createIntl({
    locale: 'pl',
    messages,
}, createIntlCache());
export const translate = (id, values) => intl.formatMessage({ id }, Object.assign({}, values));
