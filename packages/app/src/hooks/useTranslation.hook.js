import { useIntl } from 'react-intl';
export function useTranslation() {
    const intl = useIntl();
    return (id, values) => intl.formatMessage({ id }, Object.assign({}, values));
}
