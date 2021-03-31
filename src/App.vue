<template>
  <div class="root">
    <header>
      <h1 id="LOGO">
        <img src="./assets/logo.png" alt="" style="height: 28px" />
        HELLO XCT
        {{ msg }}
      </h1>
      <span class="title">{{ $route.meta.title }}</span>

      <i
        class="icon"
        :class="drawer ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
        @click="drawer = !drawer"
      />
      <router-link v-if="$router.currentRoute.value.name !== 'home'" to="/">
        <i
          v-if="$router.currentRoute.value.name !== 'home'"
          to="/"
          class="icon el-icon-back"
        />
      </router-link>
    </header>
    <article
      :style="{ width: drawer ? 'calc(100% - 380px)' : 'calc(100% - 1px)' }"
    >
      <transition name="el-fade-in-linear">
        <router-view />
      </transition>
    </article>

    <!-- 右侧导航 v-show="drawer"-->
    <aside :style="{ width: drawer ? '380px' : '1px' }">
      <transition name="el-fade-in-linear">
        <div class="navigate">
          <ul class="">
            <li v-for="item in demoNames" :key="item.NO" @click="go(item)">
              {{ `${item.NO}：${item.EN}` }} （{{ item.CN }}）
            </li>
          </ul>
        </div>
      </transition>
    </aside>

    <footer>
      <span>degin by xct，power by vue3&vite.</span>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",

  data() {
    return {
      msg: "--",
      drawer: false,
      direction: "rtl",
    };
  },
  mounted() {
    this.getHelloWorldPort();
  },
  computed: {
    ...mapGetters(["demoNames"]),
  },
  methods: {
    go(item) {
      let value = `${item.NO}-${item.EN}`;
      console.log(value);
      this.$router.push({ name: value });
    },
    getHelloWorldPort() {
      let url = "http://localhost:2000/";
      // let url = "http://192.168.199.207:2000/";
      axios.get(url).then((res) => {
        this.msg = res.data;
      });

      let url2 = "http://127.0.0.1:3000/";
      let socket = io(url2, {
        transports: ["websocket"],
      }); // 指定连接地址

      // 指定服务端的标识open 客户端利用on事件监听
      socket.on("open", (data) => {
        console.log(data);
      });
    },
    closeDrawer() {},
  },
};
</script>

<style lang="scss" scoped>
.root {
  overflow: hidden;
  header {
    overflow: hidden;
    background: rgb(48, 65, 86);
    color: rgb(191, 203, 217);

    h1#LOGO {
      float: left;
      margin-left: 0.67em;
    }
    .title {
      float: left;
      line-height: 76px;
      margin-left: 1em;
    }
    .icon {
      cursor: pointer;
      margin: 18px 10px 0px 0;
      color: #fff;
      font-size: 44px;
      float: right;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  article {
    float: left;
    // background: red;
    height: calc(100vh - 80px);
    transition: all 0.4s;
  }
  aside {
    transition: all 0.4s;
    float: right;
    background: #fff;
    // height: calc(100vh - 80px);
    .navigate {
      width: 380px;
      background: #fff;
      border: 1px solid #e3e3e3;
      ul {
        text-align: left;
        li {
          margin: 20px;
          cursor: pointer;
        }
      }
    }
  }
  footer {
    position: absolute;
    bottom: 0;
    line-height: 30px;

    color: #fff;
    width: 100%;
    background: #2a2f39;
  }
}
</style>