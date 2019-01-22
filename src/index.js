import Vue from 'vue';
import createStore from './store';
import App from './components/App.vue';
import { square } from './localFunctions';

console.log('square:', square);

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

Vue.component('font-awesome-icon', FontAwesomeIcon);

const store = createStore();

const vm = new Vue({
  el: '#vue-app',
  render: h => h(App),
  store
});
