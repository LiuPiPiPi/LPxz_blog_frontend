<template>
  <div id="lp_header">
    <el-row>
      <el-col :span="2" :offset="2">
        <router-link :to="{name: 'home'}">
          <div class="logo"/>
        </router-link>
      </el-col>
      <el-col :span="12">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">
            <router-link :to="{name: 'home'}">首页</router-link>
          </el-menu-item>
          <el-menu-item index="2">博客</el-menu-item>
          <el-submenu index="3">
            <template slot="title">我的</template>
            <el-menu-item index="3-1">
              <el-link href="static/bookmarks_2020_7_14.html" target="_blank">网站收藏</el-link>
            </el-menu-item>
            <el-menu-item index="3-2">资源管理</el-menu-item>
            <el-menu-item index="3-3">
              <el-link href="https://segmentfault.com/a/1190000021881951" target="_blank">文章分享</el-link>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="4" target="_blank">
            <el-link href="https://github.com/LiuPiPiPi" target="_blank">Github</el-link>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="4">
        <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "lp_header",
  data() {
    return {
      activeIndex: '1',
      input: '',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    reloadPage() {
      this.$common.reloadPage();
    },
    toWebsite(url) {
      this.$common.toWebsite(url);
    }
  },
}
</script>

<style scoped lang="scss">
#lp_header {
  width: 100%;
  position: fixed;
  z-index: 99;
}

.logo {
  width: 60px;
  height: 60px;
  display: block;
  background-image: url("../../../static/images/logo_LPxz.png");
  background-size: cover;
}

.el-row {
  text-align: center;
  background-color: white;

  &,
  :last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}
</style>
