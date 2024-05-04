<template>
  <div class="container">
    <div class="card" v-if="show">
      <h2 v-color:[type].blink.hover="myColor">Drectives</h2>
      <div class="form-control">
        <label for="inp"> Нажми!</label>
        <input v-focus type="text" id="inp">
      </div>
      <button class="btn" @click="myColor = 'blue'">Blue</button>
      <button class="btn" @click="type = type === 'color' ? 'backgroundColor':'color'">Переключить тип</button>
    </div>
</div>
</template>

<script>
import colorDirektive from './colorDirektive';
import focusDirectiv from './focusDirectiv';

export default {
  data () {
    return {
      myColor: "red",
      type: "color",
      show: true,
    }
  },
  directives: {
    focus: focusDirectiv,
    color: colorDirektive
  }
}
</script>
./colorDirektive
