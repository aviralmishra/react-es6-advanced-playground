import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from 'components/App.jsx';

const renderApp = () => {
  return ReactDOMServer.renderToString(<App/>);
};

export default renderApp;
