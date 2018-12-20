<template>
  <div id="app">
    <controller0 v-click-outside="closeController0" />
    <controller1 v-click-outside="closeController1" />
    <controller2 v-click-outside="closeController2" />
  </div>
</template>

<script>
import {mapMutations} from 'vuex';

import controller0 from './components/controller0'
import controller1 from './components/controller1'
import controller2 from './components/controller2'


export default {
  name: 'App',
  components: {
    controller0,
    controller1,
    controller2,
  },
  methods: {
    ...mapMutations([
      'openController0',
      'closeController0',
      'openController1',
      'closeController1',
      'openController2',
      'closeController2',
    ]),
    ...mapMutations({
      openController0: 'openController0',
      closeController0: 'closeController0',
      openController1: 'openController1',
      closeController1: 'closeController1',
      openController2: 'openController2',
      closeController2: 'closeController2',
    }),
    close() {
      console.log(111);
    },
  },
  directives: {
    'click-outside': {
      bind: function(el, binding, vNode) {
        if (typeof binding.value !== 'function') {
          const compName = vNode.context.name;
        }
        const bubble = binding.modifiers.bubble;
        const handler = (e) => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            binding.value(e)
          }
        }
        el.__vueClickOutside__ = handler;
        document.addEventListener('click', handler)
      },
      unbind: function(el, binding) {
        document.removeEventListener('click', el.__vueClickOutside__);
        el.__vueClickOutside__ = null;

      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
