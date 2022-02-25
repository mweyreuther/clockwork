<template>
  <div
    class="__hand w-1 h-1/2"
    :style="{ transformOrigin, transform }"
  >
    <div class="absolute bg-black/70 rounded-full left-0 right-0 bottom-0" :style="{ height }">
  </div>
</template>

<script>
export default {
  name: 'Hand',
  props: { 
    rotation: {
      type: Number , 
      default: 0
    }, 
    height: {
      type: String , 
      default: '100%'
    }
  },
  data() {
    return {
      width: 0,
    };
  },
  computed: {
    transform() {
      return `rotate(${this.rotation}deg) translateY(${this.width / 2}px)`;
    },
    transformOrigin() {
      return '50% bottom';
    },

  },
  mounted() {
    this.width = this.$el.offsetWidth;
    // console.log(this.width);
  },
};
</script>
