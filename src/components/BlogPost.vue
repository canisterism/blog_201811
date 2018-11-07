<template>
  <el-main id="blog-post">
    <el-row id="title">
      <el-col :span="8" :offset="8">
        <h3>{{ post.title }}</h3>
      </el-col>
    </el-row>
    <el-row id="date">
      <el-col :span="6" :offset="16">
        <p>{{ post.published }}</p>
      </el-col>
    </el-row>
    <el-row id="text">
      <el-col :span="16" :offset="4">
        <article v-html="post.body">
        </article>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import Butter from "buttercms";
var butter = Butter(process.env.VUE_APP_BUTTER_API_KEY);
export default {
  name: "blog-post",
  data() {
    return {
      post: {}
    };
  },
  created: function() {
    this.getPost();
  },
  methods: {
    getPost: function() {
      butter.post
        .retrieve(this.$route.params.slug)
        .then(res => {
          this.post = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
p {
  margin-top: 0px;
}

img {
  width: 100%;
  height: 100%;
}

#text {
  text-align: left;
}
</style>
