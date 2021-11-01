import Vue from 'vue';
import Vuex from 'vuex';
import ContactModule from './modules/ContactModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    contact: ContactModule,
  },
});
