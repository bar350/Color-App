import Vue from 'nativescript-vue';

import RandomColorPicker from './components/RandomColorPicker';


import './styles.scss';

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');

const ColorPicker = require('nativescript-color-picker');

Vue.registerElement('DrawingPad', () => require('nativescript-drawingpad').DrawingPad);
// Vue.registerElement('ColorPicker', () => require('nativescript-color-picker').ColorPicker);

new Vue({

  render: h => h('frame',[h(RandomColorPicker)]),


}).$start();
