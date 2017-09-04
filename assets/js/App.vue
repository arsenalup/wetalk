<template>
  <!-- 整个页面在这个 div 中 -->
  <!-- container-fluid：Bootramp 类，表示占满屏幕宽度 -->
  <!-- app__container-fluid：我们自定义的类，对 Bootrap 默认样式进行订制 -->
  <div class="container-fluid app__container-fluid">
    <nav class="navbar navbar-default app__navbar">
      <div class="container app__container">
    <!-- 下面都是从 Bootstrap 导航条修改而来 -->
    <div class="navbar-header">
      <router-link to="/" class="navbar-brand">Wetalk</router-link>
    </div>

    <div class="collapse navbar-collapse app__navbar" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
         <li><router-link to="/about">关于</router-link></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
       <!-- 用户为空显示登录，否则显示用户头像 -->
          <!-- 暂时使用本组件内的测试数据，后面实现注册登录会修改这里 -->
        <li v-if="!user.name">
          <a>登录</a>
        </li>
        <li v-if="user.name">
           <!-- 用户头像下拉框 -->
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              <avatar :alt="user.name" :size="28"></avatar>
              <span class="caret"></span>
            </a>

             <!-- 用户头像下拉框菜单 -->
            <ul class="dropdown-menu">
              <li><a href="#">我的主页</a></li>
              <li><a href="#">个人设置</a></li>
               <li role="separator" class="divider"></li>
              <li><router-link to="/">退出登录</router-link></li>
            </ul>
          </li>
      </ul>
    </div>
</div>
    </nav>

    <router-view></router-view>

    <div class="app__footer">
     <div class="container app__container">
     Copyright © 2017 By Protream
     </div>
    </div>

    </div>
</template>

<script>
  import Avatar from './components/Avatar.vue'

  export default {
    data() {
      return {
        user: { name: 'protream'}
      }
    },
    methods: {
      logout() {
        console.log('logout')
      }
    },
    components: {
      Avatar
    }
  }
</script>

<style>
body {
  margin-top: 15px;
}
.app__container-fluid {
  padding: 0;
}
/* 对默认的 Bootstrap container 样式重写，设置主体部分宽度 */
.app__container {
  width: 940px;
  margin: 0 auto;
}
.app__navbar {
  background-color: #fff;
  border: none;
}
.app__footer {
  border-top: 1px solid #eee;
  padding: 16px 0 24px;
  color: #999;
  font-size: 14px;
}
</style>