import Vue from 'vue';
import axios from 'axios';
import createStore from './store';
import configMixin from './util/config-mixin';
import App from './components/App.vue';
import mergeDeep from './util/merge-deep';
import config from './config.js'

import { square } from './localFunctions';

// console.log('square:', square);

document.getElementById('test').innerHTML = square(10);

import '../node_modules/phila-standards/dist/css/phila-standards.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faExternalLink } from '@fortawesome/pro-solid-svg-icons/faExternalLink';
import { faSearch } from '@fortawesome/pro-solid-svg-icons/faSearch';
import { faTimes } from '@fortawesome/pro-solid-svg-icons/faTimes';
import { faTimesCircle } from '@fortawesome/pro-solid-svg-icons/faTimesCircle';
import { faCaretLeft } from '@fortawesome/pro-solid-svg-icons/faCaretLeft';
import { faCaretRight } from '@fortawesome/pro-solid-svg-icons/faCaretRight';
library.add(faExternalLink, faSearch, faTimes, faTimesCircle, faCaretLeft, faCaretRight);
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


import philaVueDatafetch from '@cityofphiladelphia/phila-vue-datafetch';
const controllerMixin = philaVueDatafetch.controllerMixin;

console.log('config:', config);
const clientConfig = config;
const baseConfigUrl = config.baseConfig;

function initVue(config) {
  console.log('initVue is running, config:', config);
  const store = createStore(config);
  // make config accessible from each component via this.$config
  Vue.use(configMixin, config);

  // mix in controller
  Vue.use(controllerMixin, { config, store });

  Vue.component('font-awesome-icon', FontAwesomeIcon)
  // mount main vue
  const vm = new Vue({
    el: '#vue-app',
    render: h => h(App),
    store
  });
}

// if there is a base config, get base config
if (baseConfigUrl) {
  axios.get(baseConfigUrl).then(response => {
    const data = response.data;
    const baseConfigFn = eval(data);
    const { gatekeeperKey } = clientConfig;
    const baseConfig = baseConfigFn({ gatekeeperKey });
    console.log('baseConfig:', baseConfig);

    // deep merge base config and client config
    const config = mergeDeep(baseConfig, clientConfig);
    console.log('config2:', config);

    initVue(config);
  }).catch(err => {
    console.error('Error loading base config:', err);
  });

} else {
  initVue(clientConfig);
}

// Vue.component('font-awesome-icon', FontAwesomeIcon);
//
// const store = createStore();
//
// const vm = new Vue({
//   el: '#vue-app',
//   render: h => h(App),
//   store
// });
