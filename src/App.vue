<template>
  <div id="app">
    <controller
      v-for="(controller, key) in controllers"
      :controller='controller'
      :opener="controller.open"
      :label="controller.label"
      :key="key"
      :index="key"
    />
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import controller from "./components/controller";

export default {
  name: "App",
  data() {
    return {
      controllers: [
        {
          label: "Контролл 1",
          id: 1,
          command: 'Сумма',
          type: 'sum',
        },
        {
          label: "Контролл 2",
          id: 2,
          command: 'Константа',
          type: 'lead',
        },
        {
          label: "Контролл 3",
          id: 3,
          type: 'dependent',
        }
      ],
    };
  },
  components: {
    controller
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
