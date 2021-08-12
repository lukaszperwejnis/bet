import { compile } from 'path-to-regexp';
import qs from 'qs';

type TemplateOptionsType = Partial<{
  params: Record<string, unknown>;
  query: string;
  hash: string;
  fragment: string;
}>;

export function createTemplate(pattern: string): any {
  const toPath = compile(pattern, { encode: encodeURIComponent });
  const template = (options: TemplateOptionsType = {}) => {
    return (
      toPath(options.params) +
      (options.query
        ? qs.stringify(options.query, { addQueryPrefix: true })
        : '') +
      (options.hash ? `?${options.hash}` : '') +
      (options.fragment ? `#${options.fragment}` : '')
    );
  };

  template.pattern = pattern;

  return template;
}
