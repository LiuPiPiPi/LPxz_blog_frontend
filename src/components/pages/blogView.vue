<template>
  <div id="blogView">
    <el-container>
      <img src="static/images/bg_main.jpg" class="bg-home" alt="">
      <el-header>
        <lp_header></lp_header>
      </el-header>
      <el-main>
        <el-row :gutter="40">
          <el-col :span="12" :offset="4">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>博客名称</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div v-for="i in 10" :key="i" class="text item">
                {{'列表内容 ' + i }}
              </div>
            </el-card>
            <button class="nice-btn">这是一个特别====好看的按钮</button>
          </el-col>
          <el-col :span="6">
            <side-info></side-info>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <lp_footer></lp_footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import lp_header from "./lp_header";
  import blogBanner from "./blogBanner";
  import sideInfo from "./sideInfo";
  import lp_footer from "./lp_footer";

  export default {
    name: "blogView",
    components: {
      lp_header,
      blogBanner,
      sideInfo,
      lp_footer,
    },
  }
</script>

<style scoped lang="scss">
  .nice-btn {
    color: white;
    background-color: lightseagreen;
    font-size: 20px;
    padding: 10px 15px;
    margin: 8px;
    border-radius: 8px;
    border: wheat 2px solid;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    margin: 20px 0;
  }

  .bg-home {
    position: fixed;
    opacity: 80%;
    width: 100%;
    height: 100%;
    display: block;
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    /*color: #333;*/
    text-align: -webkit-center;
    line-height: 60px;
    padding: 0;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /*text-align: center;*/
    padding: 0;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
