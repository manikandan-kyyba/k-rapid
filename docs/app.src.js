
import React from 'react';
import ReactDOM from 'react-dom';
import RedBox from 'redbox-react';
import App from '/home/ubuntu/react-native-kyyba/docx/node_modules/component-docs/dist/templates/App.js';
import data from './app.data';
import '/home/ubuntu/react-native-kyyba/docx/node_modules/component-docs/dist/styles/reset.css';
import '/home/ubuntu/react-native-kyyba/docx/node_modules/component-docs/dist/styles/globals.css';

import '/home/ubuntu/react-native-kyyba/docx/assets/styles.css';

const root = document.getElementById('root');
const render = () => {
  try {
    ReactDOM.hydrate(
      <App
        name={window.__INITIAL_PATH__}
        data={data}
        github={"https://github.com/manikandan-kyyba/k-rapid/edit/main/"}
        logo={"images/sidebar-logo.svg"}
        title={"[title] · K-Rapid"}
      />,
      root
    );
  } catch (e) {
    ReactDOM.render(
      <RedBox error={e} />,
      root
    );
  }
};

if (module.hot) {
  module.hot.accept(() => {
    render();
  });
}

render();
