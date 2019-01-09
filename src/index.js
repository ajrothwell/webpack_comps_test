import Vue from 'vue';
import App from './components/App.vue';
import { square } from './localFunctions';
// import { Badge } from 'comps_test';
//
// console.log('Badge:', Badge);
// console.log('comps:', comps);

document.getElementById('test').innerHTML = square(10);

// import '../node_modules/phila-standards/dist/css/phila-standards.min.css';

const vm = new Vue({
  el: '#vue-app',
  render: h => h(App)
  // store
});
