<template>
  <div id="blogBanner">
    <el-card class="box-card" shadow="hover" v-for="blog in blogs" :key="blog">
      <div slot="header" class="clearfix">
        <router-link to="/blogView">
          <span>{{blog.blogTitle}}</span>
        </router-link>
        <el-tag class="card-tag" type="info" v-for="tag in blog.blogTags" :key="tag">{{tag}}</el-tag>
      </div>
      <div class="bottom">
        <p>{{blog.blogContent}}</p>
        <time class="time">{{currentDate}}</time>
        <router-link to="/blogView">
          <el-button type="text" style="float: right" placement="right-end">阅读全文</el-button>
        </router-link>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "blogBanner",
    data() {
      return {
        currentDate: new Date(),
        blogs: [
          {
            blogTitle: '计算机网络学习',
            blogContent: '计算机网络学习的核心内容就是网络协议的学习。网络协议是为计算机网络中进行数据交换而' +
              '建立的规则、标准或者说是约定的集合。因为不同用户的数据终端可能采取的字符集是不同的，两者需要进行通' +
              '信，必须要在一定的标准上进行。一个很形象地比喻就是我们的语言，我们大天朝地广人多，地方性语言也非常' +
              '丰富，而且方言之间差距巨大。A地区的方言可能B地区的人根本无法接受，所以我们要为全国人名进行沟通建立一' +
              '个语言标准，这就是我们的普通话的作用。同样，放眼全球，我们与外国友人沟通的标准语言是英语，所以我们才' +
              '要苦逼的学习英语。',
            blogTags: [
              'Java',
              'Python',
              'Vue',
            ],
          },
          {
            blogTitle: 'Vue整理',
            blogContent: '计算机网络协议同我们的语言一样，多种多样。而ARPA公司与1977年到1979年推出了一种名' +
              '为ARPANET的网络协议受到了广泛的热捧',
            blogTags: [
              'Java',
            ],
          },
          {
            blogTitle: 'Spring Cloud',
            blogContent: '其中最主要的原因就是它推出了人尽皆知的TCP/IP标准网络协议。目前TCP/IP协议已经成为Internet' +
              '中的“通用语言”，下图为不同计算机群之间利用TCP/IP进行通信的示意图',
            blogTags: [
              'Vue',
            ],
          }
        ],
      }
    }
  }
</script>

<style scoped lang="scss">
  .time {
    font-size: 13px;
    color: #999;
  }

  .card-tag {
    float: right;
    margin-left: 10px;
  }

  .clearfix {
    font-weight: bold;
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
