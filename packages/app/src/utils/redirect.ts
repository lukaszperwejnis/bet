import { history } from './history';

export function redirect(url: string): void {
  history.push(url);
}
