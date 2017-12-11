import express from 'express';
import config from 'config';

import renderApp from 'renderers/server';
import {data} from './music';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const content = await renderApp();
  res.render('index', {
    ...content
  });
});

app.get('/data', (req, res) => {
  res.send(data);
});

app.listen(config.port, () => {
  console.info(`Listening on port ${config.port}`);
});
