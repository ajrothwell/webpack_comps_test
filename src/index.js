import Vue from 'vue';
import App from './components/App.vue';
import { square } from './localFunctions';

console.log('square:', square);

document.getElementById('test').innerHTML = square(10);

// import '../node_modules/phila-standards/dist/css/phila-standards.min.css';

const vm = new Vue({
  el: '#vue-app',
  render: h => h(App)
  // store
});
