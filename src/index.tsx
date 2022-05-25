import 'core-js/es/reflect';
import 'core-js/stable/reflect';
import 'core-js/features/reflect';
import 'zone.js';
import { createPwaApi } from 'piral-pwa';

import * as React from 'react';
import { render } from 'react-dom';
import { createInstance, createStandardApi, Dashboard, Piral } from 'piral';
import { createNgApi } from 'piral-ng';
import { layout, errors } from './layout';
import myLogo from './assets/download.png';
const feedUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://feed.piral.io/api/v1/pilet/mife-demo'
    : 'http://localhost:9000/api/v1/pilet';

const instance = createInstance({
  state: {
    components: {
      ...layout
    },
    errorComponents: {
      ...errors
    },
    routes: {
      '/': Dashboard
    }
  },

  plugins: [createNgApi(), ...createStandardApi(), createPwaApi()],
  requestPilets() {
    const result = fetch(feedUrl)
      .then((res) => {
        return res.json();
      })
      .then((res) => res.items);
    return result;
  }
});

render(<Piral instance={instance} />, document.querySelector('#app'));
