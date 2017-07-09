<template>
    <div>
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                 @select="handleSelect">
            <el-menu-item index="0">
                <img class="logo" src="./LandingPageView/assets/js.svg" alt="js-static-analyzer">
            </el-menu-item>
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">
                <a href="" target="_blank">订单管理</a>
            </el-menu-item>
        </el-menu>

        <p>Welcome. This is the
            <code>BEST</code> js static analyzer</p>
        <el-button @click="clickHandler">start</el-button>
        <current-page></current-page>
        <versions></versions>
        <links></links>
        <pre v-highlightjs="codeWork"><code class="javascript"></code></pre>
    </div>
</template>
<style scoped>
    .logo {
        height: 100%;
    }
</style>
<script>
  import CurrentPage from './LandingPageView/CurrentPage';
  import Links from './LandingPageView/Links';
  import Versions from './LandingPageView/Versions';


  const landing = {
    components: {
      CurrentPage,
      Links,
      Versions,
    },
    data() {
      return {
        activeIndex: '1',
        codeWork: "let data = 'wait for parse the file';",
      };
    },
    name: 'landing-page',
    methods: {
      clickHandler() {
      },
      handleSelect() {

      },
    },
  };
  export default landing;
</script>

<style scoped>

</style>
