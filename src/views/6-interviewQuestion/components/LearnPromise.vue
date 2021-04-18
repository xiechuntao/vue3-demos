<template>
  <div class="content">
    <h2>你吃饭了么？(promise)</h2>
    <el-button @click="fn(true)">吃饭了</el-button>
    <el-button @click="fn(false)">没吃</el-button>
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
      fn (isEatMeal) {
        let delay = parseInt(Math.random() * 5000);
        console.log(`时间:${delay}ms`)
        this.$message(`时间:${delay}ms`);
        let chibaolePromise = () => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              if (isEatMeal) {
                resolve(isEatMeal)
              } else {
                reject(new Error('你没有给我饭吃！'))
              }
            }, delay)
          })
        }

        chibaolePromise().then(isEatMeal => {
          this.$message.success(`I'm full，${isEatMeal}`);
          console.log(`I'm full，${isEatMeal}`)
        }).catch((err) => {
          this.$message.warning(`I'm hungry，${err},${isEatMeal}`);
          console.warn(`I'm hungry，${err},${isEatMeal}`)
        }).finally(() => {
          console.log('End')
          this.$message(`End`);
        })
      }
    }
  },
  computed: {},
})
</script>

<style>
</style>