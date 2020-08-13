<template>
  <div id="lp_footer">
    <el-row type="flex" justify="space-around">
      <el-col :span="3"></el-col>
      <el-col :span="3">
        <img src="static/images/weixin_barcode.jpg" alt="微信二维码" class="personal-barcode-pic">
        微信二维码
      </el-col>
      <el-col :span="3">
        <img src="static/images/qq_barcode.jpg" alt="QQ二维码" class="personal-barcode-pic">
        QQ二维码
      </el-col>
      <el-col :span="6">
        作者: 刘碧豪 -- LPxz/LP学长<br/>
        Copyright © 202007 www.lpxz.xyz
      </el-col>
      <el-col :span="6">
        联系方式：17795832432<br/>
        热爱生活 从容面对
      </el-col>
      <el-col :span="3"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "lp_footer",
  data() {
    return {};
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
.el-row {
  margin-bottom: 20px;

  &,
  :last-child {
    margin-bottom: 0;
  }
}

.el-col {
  /*border-right: rgba(144, 147, 153, 0.56) solid 0.5px;*/
}

#lp_footer {
  background-color: black;
  bottom: 0;
  color: white;
  font-size: 16px;
  padding: 20px 0;
  text-align: -webkit-center;

}

.personal-barcode-pic {
  width: 60px;
  height: 60px;
  display: block;
}
</style>
