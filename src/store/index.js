import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
    state: {
        constant: 1000,
        controllers: [
          {
            value: 0,
            opened: false,
          },
          {
            value: 0,
            opened: false,
          },
          {
            value: 0,
            opened: false,
          },
        ],
    },
    mutations: {
      closeController(state, index) {
        state.controllers[index].opened = false;
      },
      openController(state, index) {
        state.controllers[index].opened = true;
      },
      changeController(state, payload) {
        state.controllers[payload.index].value = payload['value'];
      },
    }
});

Vue.prototype.$store = store;

export default store;
