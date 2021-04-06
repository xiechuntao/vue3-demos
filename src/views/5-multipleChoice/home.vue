<template>
  <div class="content">
    <div class="grid-left">
      <el-button @click="choiceAll()">
        {{ choiceAllBtn ? "取消全选" : "全选" }}
      </el-button>
      <div
        @click="choice(i, item.CN)"
        :class="{ selected: item.selected }"
        class="item"
        v-for="(item, i) in list"
        :key="i"
      >
        {{ item.CN }}
      </div>
    </div>
    <div class="grid-right">
      <div class="item" v-for="(item, i) in choiceItems" :key="i">
        {{ item.CN }}
        <button @click="del(i)">删除</button>
      </div>
    </div>
  </div>
</template>

<script>
import names from "/@/router/demosName.json";
export default {
  data() {
    return {
      choiceAllBtn: false,
      name: "5_multpleChoice",
      // 左侧
      list: [],
      // 右侧
      choiceItems: [],
    };
  },

  computed: {},
  created() {},
  mounted() {
    this.list = _.cloneDeep(names);
    this.list.map((item, i) => {
      item.selected = false;
    });
    // debugger;
  },
  methods: {
    choiceAll() {
      if (this.choiceAllBtn === false) {
        this.choiceAllBtn = true;
        this.list.map((item, i) => {
          item.selected = true;
        });
        this.choiceItems = [...this.list];
      } else {
        this.choiceAllBtn = false;
        this.list.map((item, i) => {
          item.selected = false;
        });
        this.choiceItems = [];
      }
    },
    choice(i) {
      if (this.list[i].selected === true) {
        console.log(this.choiceItems);
        // 左侧反选
        this.list[i].selected = false;
        // 找到匹配的
        let delI = _.findIndex(this.choiceItems, (o) => {
          return o.NO === this.list[i].NO;
        });
        console.log(delI);
        // 右侧移除
        this.choiceItems.splice(delI, 1);
        // this.choiceItems.splice(this.list[i], 1);
      } else if (this.list[i].selected === false) {
        // 左侧反选
        this.list[i].selected = true;
        // 右侧添加
        this.choiceItems.push(this.list[i]);
      }
    },
    del(i) {
      // 找到匹配的
      let delI = _.findIndex(this.list, (o) => {
        return o.NO === this.choiceItems[i].NO;
      });
      // 左侧移除
      this.list[delI].selected = false;
      // 右侧移除
      this.choiceItems.splice(i, 1);
    },
  },
};
</script>
<style scoped lang="scss">
.content {
  .grid-left {
    float: left;
    width: calc(100% - 300px);
    .item {
      float: left;
      margin: 10px;
      width: 60px;
      height: 60px;
      background: cornsilk;
    }

    .selected {
      background: crimson;
    }
  }
  .grid-right {
    float: right;
    width: 300px;
    border: 1px solid red;
    .item {
      float: left;
      margin: 10px;
      width: 60px;
      height: 60px;
      background: rgb(169, 216, 235);
    }
  }
}
</style>
