<template>
  <div class="content">
    <h2>原型链</h2>

  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LearnPromise',
  data () {
    return {
      isEatMeal: true,
    }
  },
  setup () {
    return {
    }
  },
  mounted () {
    function Dog (name, gender, say) {
      this.name = name;
      this.gender = gender;
      this.say = say;
    }
    let a = new Dog
    let b = new Dog('旺财', '公', '旺旺')
    console.log(a, b)
    /* Dog的实例的__proto__指向构造函数的prototype */
    // Dog.prototype === new Dog().__proto__
    debugger
  }
})
</script>

<style>
</style>