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
            map: 'controllers[0].value'
          },
          {
            value: 0,
            opened: false,
            map: 'controllers[1].value'
          },
          {
            value: 0,
            opened: false,
            map: 'controllers[2].value'
          },
        ],
    },
    mutations: {
      updateField,
      closeController(state, index) {
        state.controllers[index].opened = false;
      },
      openController(state, index) {
        state.controllers[index].opened = true;
      },
      changeController(state, payload) {
        state.controllers[payload.index].value = payload['value'];
      }
    }
});

Vue.prototype.$store = store;

export default store;
