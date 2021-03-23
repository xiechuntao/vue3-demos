<template>
  <div id="container"></div>
</template>

<script>
export default {
  data() {
    return {
      name: "1_hello xct",
    };
  },
  components: {},
  computed: {},
  created() {},
  mounted() {
        var map = new AMap.Map('container', {
        resizeEnable: true, //是否监控地图容器尺寸变化
        zoom:11, //初始化地图层级
        center: [116.397428, 39.90923] //初始化地图中心点
    });
  }
};
</script>
<style lang="scss" scoped>
#container {
  width: 100%;
  height: 100%;
}
</style>