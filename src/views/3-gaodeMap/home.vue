<template>
  <div class="container">
    <div class="tool-box-1">
      <!-- 倾斜角 -->
      <div class="block"></div>
    </div>
    <div id="G_container"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: null,
      pitch: 10,
      name: "1_hello xct",
    };
  },
  components: {},
  computed: {},
  created() {},
  mounted() {
    let map = (this.map = new AMap.Map("G_container", {
      resizeEnable: true, //是否监控地图容器尺寸变化
      zoom: 11, //初始化地图层级
      center: [116.397428, 39.90923], //初始化地图中心点
      viewMode: "3D", //开启3D视图,默认为关闭
    }));

    AMap.plugin(["AMap.ControlBar", "AMap.MapType"], function () {
      // 添加 3D 罗盘控制
      map.addControl(new AMap.ControlBar());
      // 添加 地图样式切换
      map.addControl(
        new AMap.MapType({
          defaultType: 0, //0代表默认，1代表卫星
        })
      );
    });

    window.gaga = this.map;
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
  .tool-box-1 {
    z-index: 9;
    width: 400px;
    background: #fff;
    position: absolute;
    .block {
      width: 60px;
    }
  }
  #G_container {
    width: 100%;
    height: 100%;

    // 地图样式切换控件
    ::v-deep .amap-maptypecontrol {
      top: 20px;
      right: 120px;
    }
  }
}
</style>  