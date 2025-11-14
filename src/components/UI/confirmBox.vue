<template>
<div v-show="show" class="test animate__animated animate__fadeInUpBig">
   🎉 Du har sparet {{ savedCo2.toFixed(2) }} kg CO₂ 
</div>

</template>

<script>
import 'animate.css';

export default {
  props: {
    originalCo2: { type: Number, required: true },
    alternativeCo2: { type: Number, required: true }
  },
  data() {
    return {
      savedCo2: 0,
      show: false
    }
  },
  watch: {
    originalCo2: "calculate",
    alternativeCo2: "calculate"
  },
  methods: {
    calculate() {
      this.savedCo2 = this.originalCo2 - this.alternativeCo2
      this.show = true
      setTimeout(() => { this.show = false },5000)
    }
  }
}
</script>
<style scoped>

.test{
    z-index: 99;
    max-width: 425px;    height: 40px;
    text-align: center;
    background: #cedfd3;
    border: 2px solid rgba(9, 97, 35, 1);
    border-radius: 5px;
    color: rgba(9, 97, 35, 1);
    position: absolute;
    bottom:10%;
    justify-self: center;
    align-self: center;
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 8px;

}
</style>