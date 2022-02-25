<template>
  <div class="relative bg-gray-100 w-20 h-20 rounded-full flex justify-center">
    <Hand class="__hour absolute" :rotation="rotationHour" height="80%" />
    <Hand class="__minute absolute" :rotation="rotationMinute" height="95%" />
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
