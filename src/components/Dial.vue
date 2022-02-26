<template>
  <div class="__dial relative w-20 h-20 rounded-full flex justify-center">
    <Hand class="__hour absolute" :rotation="rotationHour" height="80%" />
    <Hand class="__minute absolute" :rotation="rotationMinute" height="95%" />
    <div class="__center bg-black rounded-full w-1 h-1 self-center" />
  </div>
</template>

<script>
import Hand from './Hand.vue';
export default {
  name: 'Dial',
  props: { time: String },
  components: { Hand },
  data() {
    return {};
  },
  computed: {
    hour() {
      return parseInt(this.time.split(':')[0]);
    },
    minute() {
      return parseInt(this.time.split(':')[1]);
    },
    rotationHour() {
      return ((this.hour % 12) / 12) * 360;
    },
    rotationMinute() {
      return ((this.minute % 60) / 60) * 360;
    },
  },
};
</script>

<style>
.__dial {
  --offset: 2px;
  --blur: 8px;
  box-shadow: inset var(--offset) var(--offset) var(--blur) #d6d7d8,
    inset calc(-1 * var(--offset)) calc(-1 * var(--offset)) var(--blur) #ffffff;
}
</style>
