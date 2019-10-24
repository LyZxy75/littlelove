<template>
  <div class="home">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Navigation></Navigation>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Navigation from '../components/Navigation'
export default {
  name: "Home",
  components: {
    Header,
    Navigation,
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
}
.el-header {
  background-color: #2e5e85;
  position: fixed;
  z-index: 999;
  width: 100%;
}
.el-container {
  background-color: #f0f2f5;
}

.el-main {
  margin-top: 70px;
  height: 100%;

}
.el-aside{
  margin-top: 60px;
  height: 100%;
  background-color:#344055;
  position: fixed;
}
</style>
