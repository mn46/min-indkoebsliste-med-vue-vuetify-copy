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
    const original = Number(this.originalCo2) || 0
    const alternative = Number(this.alternativeCo2) || 0
    this.savedCo2 = original - alternative
    this.show = true
    setTimeout(() => { this.show = false }, 5000)
  }
},
mounted() {
  this.calculate()
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