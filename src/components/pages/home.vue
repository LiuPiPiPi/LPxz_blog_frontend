<template>
  <div id="home">
    <el-container>
      <div class="bg-home"/>
      <el-header>
        <lp_header></lp_header>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="14" :offset="2">
            <blog-banner></blog-banner>
          </el-col>
          <el-col :span="5" :offset="1">
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
  name: "home",
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

.bg-home {
  background-image: url("../../../static/images/bg_main.jpg");
  background-size: cover;
  position: fixed;
  opacity: 90%;
  width: 100%;
  height: 100%;
  /*display: block;*/
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
