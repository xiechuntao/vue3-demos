<template>
  <div class="content">
    <el-space wrap>
      <el-card class="box-card"
               style="width: 250px">
        <span>1-LearnPromise</span>
        <learn-promise />
      </el-card>
      <el-card class="box-card"
               style="width: 250px">
        <span>2-LearnPrototype</span>
        <learn-prototype />
      </el-card>
    </el-space>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import LearnPromise from './components/LearnPromise.vue'
import LearnPrototype from './components/LearnPrototype.vue'
export default defineComponent({
  components: { LearnPromise, LearnPrototype },
  name: '6_interviewQuestion',
  data () {
    return {
    };
  },
  setup () {

  },

});
</script>
<style scoped lang="scss">
.content {
  padding: 16px;
}
</style>
