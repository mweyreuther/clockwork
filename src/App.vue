<template>
  <div id="app" class="p-1 h-screen bg-gray-200 grid place-items-center">
    <div class="__panel border bg-gray-100 p-4 rounded grid gap-2 shadow-lg">
      <div
        class="__row grid gap-2"
        v-for="(row, i) in panel"
        :key="i"
        :style="`grid-template-columns: repeat(${row.length}, 1fr);`"
      >
        <Dial
          v-for="(time, ii) in row"
          :key="i + '-' + ii"
          :time="time"
          @click="click([i, ii])"
        />
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
      currenTime: null,
    };
  },
  mounted() {
    const row = Array.from({ length: 4 }, (x, i) => {
      const now = new Date();
      return `${now.getHours()}:${now.getMinutes()}`;
    });
    const panel = Array.from({ length: 6 }, (x, i) => [...row]);
    this.panel = panel;
    // setInterval(() => {
    //   const row = Array.from({ length: 4 }, (x, i) => {
    //     const now = new Date();
    //     return `${now.getHours()}:${now.getMinutes()}`;
    //   });
    //   const panel = Array.from({ length: 6 }, (x, i) => [...row]);
    //   this.panel = panel;
    // }, 60000);
  },
  methods: {
    click([i, ii]) {
      // this.panel[i][ii] = '14:34';
      this.panel[2][1] = '15:30';
      this.panel[2][2] = '21:30';
      this.panel[3][1] = '12:15';
      this.panel[3][2] = '21:00';

      this.panel[1][0] = '15:30';
      this.panel[1][1] = '21:15';
      this.panel[1][2] = '21:15';
      this.panel[1][3] = '21:30';

      this.panel[2][0] = '12:30';
      this.panel[3][0] = '12:30';
      this.panel[2][3] = '12:30';
      this.panel[3][3] = '12:30';

      this.panel[4][0] = '12:15';
      this.panel[4][1] = '21:15';
      this.panel[4][2] = '21:15';
      this.panel[4][3] = '12:45';
    },
  },
};
</script>

<style>
html {
  /* font-size: 40px; */
}
</style>
