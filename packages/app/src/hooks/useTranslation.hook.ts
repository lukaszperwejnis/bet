import {useIntl} from 'react-intl';

type ValuesType = Record<string, unknown> | Record<string, unknown>[];

export function useTranslation(): [(id: string, values?: Record<string, unknown> | Record<string, unknown>[]) => string] {
    const intl = useIntl();

    const translate = (id: string, values?: ValuesType): string => intl.formatMessage({id}, {...values}) as string;

    return [translate];
}
