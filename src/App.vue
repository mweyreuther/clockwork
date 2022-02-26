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
      toggleContent: [
        '12:00',
        '12:15',
        '12:30',
        '12:45',
        '15:00',
        '15:15',
        '15:30',
        '15:45',
        '18:00',
        '18:15',
        '18:30',
        '18:45',
        '21:00',
        '21:15',
        '21:30',
        '21:45',
      ],
      currenTime: null,
    };
  },
  mounted() {
    const row = Array.from({ length: 3 }, (x, i) => {
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
      const toggleIndex = this.toggleContent.indexOf(this.panel[i][ii]);
      this.panel[i][ii] =
        toggleIndex === -1
          ? this.toggleContent[0]
          : this.toggleContent[(toggleIndex + 1) % this.toggleContent.length];

      console.log(this.panel);
    },
  },
};
</script>

<style>
html {
  /* font-size: 40px; */
}
</style>
