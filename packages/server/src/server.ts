import { App } from './app';
import config from './config';

const app = new App(config.port);

app.listen();
