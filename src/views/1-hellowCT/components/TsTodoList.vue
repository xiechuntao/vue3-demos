<template>
  <div class="container">
    <h2>{{name}}</h2>
    <div class="todo-wrap">
      <div class="todo-header">
        <input type="text"
               v-model="msg"
               @keyup.enter="func" />
      </div>
      <p v-if="arr.length == 0">暂无项目</p>
      <ul class="todo-main"
          v-else>
        <li v-for="(e, idx) in arr"
            :key="idx">
          <label><span>{{ e }}</span></label>
          <button @click="del(idx)"
                  class="btn btn-danger">删除</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
export default defineComponent({
  name: "TsTodolist",
  data() {
    return {
      name: "TsTodolist",
    };
  },
  setup() {
    const msg = ref("");
    const arr: Ref = ref([]);
    const func = () => {
      if (msg.value !== "") {
        arr.value.unshift(msg.value.trim());
        msg.value = "";
      }
    };
    const del = (idx: number) => {
      arr.value.splice(idx, 1);
    };
    return {
      msg,
      arr,
      func,
      del,
    };
  },
});
</script>

<style lang="scss">
.container {
  background: rgb(255 255 255);
  width: 340px;
  height: 500px;
}
</style>