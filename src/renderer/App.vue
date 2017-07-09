<template>
  <div>
    <div class="title-bar">
      <div>{{title}}</div>
    </div>
    <div id="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import store from './store/index';
  export default {
    store,
    data() {
      return {
        title: store.title || 'JavaScript Static',
      };
    },
  };
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  .title-bar {
    height: 22px;
    -webkit-user-select: none;
    -webkit-app-region: drag;
    text-align: center;
    background: #1F2D3D;
    color: white;
    font-family: "PingFang SC", sans-serif;
    font-weight: 100;
  }

  body {
    align-items: center;
    background-color: #475669;
    font-family: "PingFang SC", sans-serif;
    font-weight: 100;
  }

  #app {
    position: absolute;
    margin-top: 22px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
