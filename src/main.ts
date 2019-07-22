import Vue from 'vue';
import App from './App.vue';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/javascript/javascript';

const VueCodemirror = require('vue-codemirror');
const VueClipboard = require('vue-clipboard2');

Vue.config.productionTip = false;

Vue.use(VueCodemirror);
Vue.use(VueClipboard);

new Vue({
  render: h => h(App),
}).$mount('#app');
