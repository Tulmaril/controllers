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


      closeController1(state) {
        state.controller1Opened = false;
      },
      openController1(state) {
        state.controller1Opened = true;
      },
      changeController1(state, value) {
        state.controller1 = value;
      },
      closeController2(state) {
        state.controller2Opened = false;
      },
      openController2(state) {
        state.controller2Opened = true;
      },
      changeController2(state, value) {
        state.controller2 = value;
      },
      closeController3(state) {
        state.controller3Opened = false;
      },
      openController3(state) {
        state.controller3Opened = true;
      },
      changeController3(state, value) {
        state.controller3 = value;
      },
    }
});

Vue.prototype.$store = store;

export default store;
