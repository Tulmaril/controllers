import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
    state: {
        constant: 1000,
        contoller0: 0,
        contoller1: 0,
        contoller2: 0,
        contoller0Opened: false,
        contoller1Opened: false,
        contoller2Opened: false,
    },
    mutations: {
      closeController0(state) {
        state.contoller0Opened = false;
      },
      openController0(state) {
        state.contoller0Opened = true;
      },
      changeController0(state, value) {
        state.contoller0 = value;
      },
      closeController1(state) {
        state.contoller1Opened = false;
      },
      openController1(state) {
        state.contoller1Opened = true;
      },
      changeController1(state, value) {
        state.contoller1 = value;
      },
      closeController2(state) {
        state.contoller2Opened = false;
      },
      openController2(state) {
        state.contoller2Opened = true;
      },
      changeController2(state, value) {
        state.contoller2 = value;
      },
    }
});

Vue.prototype.$store = store;

export default store;
