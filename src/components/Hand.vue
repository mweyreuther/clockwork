<template>
  <div class="__hand w-1 h-1/2" :style="{ transformOrigin }">
    <div
      class="absolute bg-black/80 rounded-t-full left-0 right-0 bottom-0"
      :style="{ height }"
    />
  </div>
</template>

<script>
import { sleep } from '../utils.js';
import anime from 'animejs/lib/anime.es.js';
export default {
  name: 'Hand',
  props: {
    rotation: {
      type: Number,
      default: 0,
    },
    height: {
      type: String,
      default: '100%',
    },
  },
  data() {
    return {
      width: 0,
    };
  },
  computed: {
    transformOrigin() {
      return '50% bottom';
    },
  },
  watch: {
    rotation(newAngle, oldAngle) {
      this.rotate([oldAngle, newAngle]);
    },
  },
  async mounted() {
    await sleep(10);
    this.width = this.$el.offsetWidth;
    this.rotate([0, this.rotation]);
  },
  methods: {
    async rotate([from, to]) {
      const directionalTo = to - from < 0 ? 360 + to : to;
      const rotate = [`${from}deg`, `${directionalTo}deg`];
      const duration = ((directionalTo - from) / 360) * 2000;
      const animation = anime({
        targets: this.$el,
        easing: 'linear',
        rotate,
        duration,
      });
      await animation.finished;
    },
  },
};
</script>
