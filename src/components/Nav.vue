<template>
  <div id="nav" class="nav">
    <div class="nav-content">
      <el-row>
        <el-col :span="3">
          <router-link to="/">
            <img alt="Vue logo" class="logo" src="../assets/logo.png" />
          </router-link>
        </el-col>
        <el-col :span="16">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item
              v-for="menu in list"
              :key="menu.index"
              :index="menu.index"
              :route="menu.path"
              ><a :href="menu.path">{{ menu.name }}</a></el-menu-item
            >
          </el-menu>
        </el-col>
        <el-col :span="5">
          <div class="nav-right">
            <el-button size="small" type="primary" @click="handleClick('login')"
              >登录</el-button
            >
            <el-button
              size="small"
              type="danger"
              @click="handleClick('register')"
              >注册</el-button
            >
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";
import { NavListItem } from "../types/index"; //设置导航数据模型
import { Route } from "vue-router";

@Component({})
export default class Nav extends Vue {
  private title: string = "首页";
  private activeIndex: string = "1";
  private list: Array<NavListItem> = [
    {
      index: "1",
      path: "/",
      name: "首页"
    },
    {
      index: "2",
      path: "/articles",
      name: "文章"
    },
    {
      index: "3",
      path: "/archive",
      name: "归档"
    },
    {
      index: "4",
      path: "/project",
      name: "项目"
    },
    {
      index: "5",
      path: "/timeline",
      name: "历程"
    },
    {
      index: "6",
      path: "/message",
      name: "留言"
    },
    {
      index: "7",
      path: "/about",
      name: "关于"
    }
  ];
  private handleSelect(val: string, oldVal: string): void {
    this.activeIndex = val;
  }
  private handleClick(value: string) {
    console.log(value);
  }
  @Watch("$route")
  routeChange(val: Route, oldVal: Route): void {
    for (let i = 0; i < this.list.length; i++) {
      const l: NavListItem = this.list[i];
      if (l.path === val.path) {
        this.activeIndex = i + 1 + "";
        this.title = l.name;
        break;
      }
    }
  }
}
</script>

<style scoped lang="less">
.nav-mobile {
  display: flex;
  line-height: 60px;
  .nav-mobile-logo {
    flex: 1;
    margin-top: 5px;
    margin-left: 10px;
  }
  .title {
    flex: 3;
    font-size: 24px;
  }
  .menu {
    flex: 1;
    font-size: 34px;
    color: #409eff;
  }
}
.nav-mobile-content {
  font-size: 0.3rem;
  height: 7.3rem;
  width: 100%;
  background-color: #fff;
  .list {
    .item {
      line-height: 0.8rem;
      color: #303133;
      border-bottom: 1px solid #eee;
      a {
        display: block;
        width: 100%;
        color: #409eff;
        text-decoration-line: none;
      }
    }
  }
}
.nav {
  .nav-content {
    width: 1200px;
    margin: 0 auto;
    a{
      text-decoration: none;
    }
  }
  .logo {
    height: 50px;
    margin: 0;
    margin-top: 5px;
  }
  .el-menu{
    background-color: transparent;
  }
  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }
  .el-menu--horizontal > .el-menu-item {
    cursor: pointer;
    color: #333;
  }
  .nav-right {
    position: relative;
    padding-top: 15px;
    text-align: right;
    .el-dropdown {
      cursor: pointer;
      padding-right: 60px;
    }
    .user-img {
      position: absolute;
      top: -15px;
      right: 0;
      width: 50px;
      border-radius: 50%;
    }
  }
}

.enter-slideUp,
.leave-slideDown {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1010;
}

.enter-slideUp {
  overflow: auto;
  visibility: visible;
  z-index: 1001;
  animation: slideUp 0.3s forwards;
}
.leave-slideDown {
  visibility: visible;
  z-index: 1001;
  animation: slideDown 0.3s forwards;
}
@keyframes slideUp {
  from {
    transform: translate3d(0, 100%, 0);
    opacity: 0.1;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes slideDown {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, 100%, 0);
    opacity: 0;
  }
}
.mask {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
}
.mask-fade-out {
  animation: maskFadeOut 0.4s forwards;
}
@keyframes maskFadeOut {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 0;
  }
}
</style>
