<template>
  <div class="controller">
    <div class="name">{{controller.label}}</div>
    <div class="input-wrapper">
      <div
        class="label"
        v-show="!$store.state.controllers[index].opened"
        @click="$refs.controll.focus()"
      >
        <span>{{$store.state.controllers[index].value | numbers}}</span>
      </div>
      <input
        v-model="contr"
        type="number"
        min="0"
        ref="controll"
        @blur="onBlur"
        @keypress="isNumber"
        @keyup.esc="close"
        @keyup.enter="change"
        @keydown.tab="change"
        @focus="onFocus"
        class="input"
      >
      <span
        v-if="controller.command && $store.state.controllers[index].opened"
        class="command"
        @mousedown="command"
      >{{controller.command}}</span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "controller",
  props: {
    label: "",
    index: 0,
    opener: "",
    controller: {}
  },
  data() {
    return {
      opened: false,
      value: this.$store.state.controllers[this.index].value,
    };
  },
  filters: {
    numbers(value) {
      return value.toLocaleString("ru");
    }
  },
  methods: {
    ...mapMutations({
      openController: "openController",
      closeController: "closeController",
      changeController: "changeController"
    }),
    onBlur() {
      this.close();
      this.value = this.$store.state.controllers[this.index].value;
    },
    onFocus() {
      this.open();
      this.$refs.controll.select();
    },
    command() {
      let val = 0;
      switch (this.controller.type) {
        case "sum":
          val =
            parseInt(this.$store.state.controllers[1].value) +
            parseInt(this.$store.state.controllers[2].value);
          break;
        case "lead":
          val = this.$store.state.constant;
          break;
        default:
          val = this.value;
      }
      this.$store.commit("changeController", {
        index: this.index,
        value: val
      });
    },
    change() {
      this.$store.commit("changeController", {
        index: this.index,
        value: this.value
      });
      this.onBlur();
    },
    open() {
      this.$store.commit("openController", this.index);
    },
    close() {
      this.$store.commit("closeController", this.index);
    },
    isNumber(evt) {
      evt = evt ? evt : window.event;
      let charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    }
  }
};
</script>

<style scoped lang="sass">
  .input-wrapper
    position: relative
  .input
    width: 116px
    &:focus
      outline: none
  .name
    color: #999999
    font-size: 15px
    margin-right: 50px
  .controller
    position: relative
    display: flex
    color: #141414
    font-family: Open Sans
    font-style: normal
    font-weight: normal
    line-height: normal
    justify-content: center
    margin-bottom: 40px
  .label
    position: absolute
    padding-left: 10px
    background: #fff
    width: 100%
    height: 100%
    text-align: left
    cursor: pointer
    z-index: 1
    &:hover
      color: #00467F
      span:before
        background-image: url("data:image/svg+xml,%3Csvg width='6' height='4' viewBox='0 0 6 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.48367 0.436816L3.00029 2.9208L0.516903 0.436517C0.398503 0.318117 0.206976 0.318117 0.0885757 0.436517C-0.0295252 0.554917 -0.0295252 0.746744 0.0885757 0.865144L2.78599 3.56345C2.90409 3.68185 3.09591 3.68185 3.21401 3.56345L5.91142 0.865169C6.02953 0.746769 6.02953 0.554643 5.91142 0.436243C5.79362 0.318416 5.60177 0.318416 5.48367 0.436816Z' fill='%2300467F' stroke='%2300467F' stroke-width='0.25'/%3E%3C/svg%3E%0A");
    span
      position: relative
      &:before
        content: ''
        position: absolute
        right: -11px
        top: 6px
        position: absolute
        width: 6px
        height: 4px
        background-image: url("data:image/svg+xml,%3Csvg width='6' height='4' viewBox='0 0 6 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.48367 0.436816L3.00029 2.9208L0.516903 0.436517C0.398503 0.318117 0.206976 0.318117 0.0885757 0.436517C-0.0295252 0.554917 -0.0295252 0.746744 0.0885757 0.865144L2.78599 3.56345C2.90409 3.68185 3.09591 3.68185 3.21401 3.56345L5.91142 0.865169C6.02953 0.746769 6.02953 0.554643 5.91142 0.436243C5.79362 0.318416 5.60177 0.318416 5.48367 0.436816Z' fill='%23141414' stroke='%23141414' stroke-width='0.25'/%3E%3C/svg%3E%0A");
  .command
    position: absolute
    left: 0px
    top: 28px
    font-size: 11px
    color: #42A4F4
    cursor: pointer
</style>
