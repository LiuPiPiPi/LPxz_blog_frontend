<template>
  <div id="sideInfo">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>个人信息</span>
        <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
      </div>
      <div class="text item">{{personalInfos}}</div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>最近浏览</span>
        <el-button style="float: right; padding: 3px 0" type="text">更多 >></el-button>
      </div>
      <div class="text item" v-for="recentView in recentViews">{{recentView}}</div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "sideInfo",
    data() {
      return {
        personalInfos: '我是一个喜欢编程的程序员，很高兴认识你！',
        recentViews: [
          'Eureka 注册中心',
          '客户端负载均衡 Ribbon',
          '声明式 REST 客户端 Feign',
          'Hystrix 服务容错处理',
          'Hystrix 服务容错处理',
          'Hystrix 服务容错处理',
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
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
</style>
