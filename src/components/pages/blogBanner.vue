<template>
  <div id="blogBanner">
    <el-card class="box-card" shadow="hover" v-for="blog in blogs" :key="blog">
      <div slot="header" class="clearfix">
        <router-link to="/blogView">
          <span>{{ blog.blogTitle }}</span>
        </router-link>
        <el-tag size="mini" class="card-tag" type="info" v-for="tag in blog.blogTags" :key="tag">{{ tag }}</el-tag>
      </div>
      <div class="bottom">
        <p class="blog-content">{{ blog.blogContent }}</p>
        <time class="time">{{ currentDate }}</time>
        <router-link to="/blogView">
          <el-button type="text" style="float: right" placement="right-end">阅读全文</el-button>
        </router-link>
      </div>
    </el-card>
  </div>
</template>

<script>
import Blogs from "../../../static/mock/blogs.json"

export default {
  name: "blogBanner",
  data() {
    return {
      currentDate: new Date(),
      blogs: Blogs,
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

.bottom .blog-content {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
