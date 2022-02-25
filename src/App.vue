<template>
  <div id="app" class="p-10 grid place-items-center">
    <div class="__panel border p-4 rounded grid gap-2 shadow-lg">
      <div
        class="__row grid gap-2"
        v-for="(row, i) in panel"
        :key="i"
        :style="`grid-template-columns: repeat(${row.length}, 1fr);`"
      >
        <Dial v-for="(time, ii) in row" :key="i + '-' + ii" :time="time" />
      </div>
    </div>
  </div>
</template>

<script>
import Dial from './components/Dial.vue';
export default {
  name: 'App',
  components: { Dial },
  data() {
    return {
      panel: [],
    };
  },
  mounted() {
    const row = Array.from({ length: 4 }, (x, i) => '13:34');
    const panel = Array.from({ length: 4 }, (x, i) => row);
    console.log(panel);
    this.panel = panel;
  },
};
</script>
