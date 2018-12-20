<template>
  <div class="controller">
    <div class="name">Контролл 1</div>
    <div class="input-wrapper">
      <div class="label" v-show="!$store.state.contoller0Opened" @click="openController0();$refs.controll.focus()"><span>{{$store.state.contoller0 | numbers}}</span></div>
      <input type="number" min="0" ref="controll"
             @keypress="isNumber"
             @keyup.esc="closeController0(); $event.target.blur()"
             @keyup.enter="changeController0($refs.controll.value); closeController0(); $event.target.blur()"
             @keydown.tab="changeController0($refs.controll.value); closeController0(); $event.target.blur()"
             @focus="openController0(); $event.target.value = 0; $event.target.select();" class="input">
      <span class="command" v-show="$store.state.contoller0Opened" @click="changeController0($store.state.contoller1 + $store.state.contoller2); closeController0()">Сумма</span>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex';

  export default {
  name: 'controller0',
  data () {
    return {
      opened: false,
    }
  },
  filters: {
    numbers(value) {
      return value.toLocaleString('ru');
    },
  },
  methods: {
    ...mapMutations({
      openController0: 'openController0',
      closeController0: 'closeController0',
      changeController0: 'changeController0',
    }),
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      let charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();;
      } else {
        return true;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  .input-wrapper
    position: relative
  .input
    width: 116px
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
