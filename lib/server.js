import express from 'express';
import config from './config';
import renderApp from 'renderers/server';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const renderedContent = renderApp();
  res.render('index', {renderedContent});
});

app.listen(config.port, () => {
  console.info(`Listening on port ${config.port}`);
});
