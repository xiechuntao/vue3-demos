<template>
  <!-- <h1>HELLO XCT!!!!</h1> -->
  <h1 @click="click_promise()">{{ msg }} {{ ExpressUrl }}</h1>
  <ul class="todo-main">
    <li class="input">
      <div>
        <el-input v-model="todo.date"
                  placeholder="请输入日期"></el-input>
      </div>
      <div>
        <el-input v-model="todo.time"
                  placeholder="请输入哪一顿"></el-input>
      </div>
      <div>
        <el-input v-model="todo.eat"
                  placeholder="请输入食物"></el-input>
      </div>
      <div>
        <el-button @click="add()"
                   size="mini"
                   type="danger"
                   icon="el-icon-plus"
                   circle />

      </div>
    </li>
    <li v-for="(item, i) in todoList"
        :key="i">
      <div>{{ item.date }}</div>
      <div>{{ item.time }}</div>
      <div>{{ item.eat }}</div>
      <div>
        <el-button @click="del(item.id,index)"
                   size="mini"
                   type="danger"
                   icon="el-icon-delete"
                   circle />
        <el-button @click="edit(item)"
                   size="mini"
                   type="primary"
                   icon="el-icon-edit"
                   circle />
      </div>
    </li>
  </ul>

  <el-dialog title="编辑"
             v-model="dialogVisible"
             width="30%"
             :before-close="handleClose">

    <div>
      <el-input v-model="editItem.date"
                placeholder="请输入日期"></el-input>
    </div>
    <div>
      <el-input v-model="editItem.time"
                placeholder="请输入哪一顿"></el-input>
    </div>
    <div>
      <el-input v-model="editItem.eat"
                placeholder="请输入食物"></el-input>
    </div>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="submitEdit">确 定</el-button>
      </span>
    </template>
  </el-dialog>

  <todo-list />

</template>

<script>
import axios from "axios";
import TodoList from './components/TsTodoList.vue'
// debugger;
export default {
  name: "1_helloXct",
  components: {
    TodoList
  },
  data () {
    return {
      ExpressUrl: window.InterfaceUrl.ExpressUrl,
      editItem: [],
      dialogVisible: false,
      msg: "test promise",
      todo: { date: null, time: null, eat: null },
      todoList: [
        { date: "2021-3-21", time: "晚餐", eat: "沙县" },
        { date: "2021-3-22", time: "午餐", eat: "黄焖鸡" },
      ],
    };
  },
  computed: {},
  mounted () {
    this.init();
  },
  methods: {
    init () {
      axios.get(this.ExpressUrl + "gallery1/getTodoList").then((res) => {
        this.todoList = res.data.data;
      });
    },
    add () {
      this.todoList.push({ ...this.todo });
      axios.post(this.ExpressUrl + "gallery1/addTodoList", { ...this.todo }).then((res) => {
        console.log(res)
      });

    },
    del (id, index) {
      this.todoList.splice(index, 1);
      axios.post(this.ExpressUrl + "gallery1/delTodoList", { id }).then((res) => {
        console.log(res)
      });
    },
    edit (item) {
      this.editItem = _.cloneDeep(item);
      this.dialogVisible = true
    },
    submitEdit () {
      let a = this.editItem;
      axios.post(this.ExpressUrl + "gallery1/updateTodoList", a).then((res) => {
        console.log(res)
        this.editItem = [];
        this.dialogVisible = false;
        this.init();
      });
    },

    use_promise () {
      console.log("方法已经被调用");
      var P = new Promise((resolve, reject) => {
        setTimeout(() => {
          var num = Math.ceil(Math.random() * 10);
          console.log("执行了promise", num);
          if (num > 5) {
            resolve("这是成功后返回的值");
          } else {
            reject("这是错误后返回的值");
          }
        }, 2000);
      });
      return P;
    },

    click_promise () {
      this.use_promise()
        .then((res) => {
          console.log(res);
        })
        .catch((res) => {
          console.log(res);
        });
    },
  },
};
</script>
<style lang='scss' scoped>
.todo-main {
  width: 400px;
  margin: auto;
  > li {
    display: flex;
    height: 40px;
    justify-content: space-around;
    align-items: center;
    > div {
      display: inline-block;
    }
    &:nth-child(odd) {
      background: red;
    }
    &:nth-child(even) {
      background: pink;
    }
  }
}
</style>
