<template>
  <div id="app">
    <el-container>
        <el-header>
            <Nav></Nav>
        </el-header>
          <div class="main-content">
            <div class="left">
              <router-view />
            </div>
            <div class="right">

            </div>
          </div>
        <el-footer>
        </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import {Component, Vue } from "vue-property-decorator";
import Nav from '@/components/Nav.vue';

@Component({
  components:{
    Nav
  }
})
export default class App extends Vue {}
</script>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-header{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  border-bottom: 1px solid #eee;
  background-color: #fff;
}
.main-content{
  width: 1200px;
  padding-top: 70px;
  margin: 0 auto;
  display: flex;
}
.left{
  flex: 1;
}
.right{
  width: 350px;
}
img {
  vertical-align: bottom;
}
</style>
