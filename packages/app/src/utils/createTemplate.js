import { compile } from 'path-to-regexp';
import qs from 'qs';
export function createTemplate(pattern) {
    const toPath = compile(pattern, { encode: encodeURIComponent });
    const template = (options = {}) => {
        return (toPath(options.params) +
            (options.query
                ? qs.stringify(options.query, { addQueryPrefix: true })
                : '') +
            (options.hash ? `?${options.hash}` : '') +
            (options.fragment ? `#${options.fragment}` : ''));
    };
    template.pattern = pattern;
    console.log({
        template,
    });
    return template;
}
