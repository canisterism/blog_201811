<template>
  <el-main id="index">
    <el-row class="header_cards" :gutter="20">
      <el-col :span="5" :offset="5">
        <router-link to="/about" id="aboutme_button">
          <el-button type="success" >
            ABOUT ME
          </el-button>
        </router-link>
      </el-col>
      <el-col :span="5" :offset="5">
        <router-link to="/contact" id="contact_button">
          <el-button type="success">
            CONTACT
          </el-button>
        </router-link>
      </el-col>
    </el-row>

    <el-input :span="10" :offset="8" type="text" class="search_text" title="けんさく"></el-input>

    <el-row :gutter="20">
      <el-col class="article-card" v-for="(post, index) in posts" :span="14" :offset="5" :key="index" align-center style="padding: 0px;">
        <router-link :to="{ name: 'blog-post', params: { slug: post.slug }}" >
          <img :src="post.featured_image" class="sumnail"></img>
          <h3>TITLE: {{post.title}}</h3>
          <p v-html="post.summary"></p>
        </router-link>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import Butter from 'buttercms'
var butter = Butter('464a98d163b954e9ac9ee91798f56547b0e48eb4');

export default {
  name: 'index',
  data: function () {
    return {
      posts: []
    }
  },
  created: function () {
    this.fetchPosts()
  },
  methods: {
    fetchPosts: function () {
      var vm = this;
      butter.post.list({page: 1, page_size: 10})
        .then(function(res) {
          vm.posts = res.data.data
        })
        .catch(function(err) {
          console.log(err)
        })
    }
  }
}
</script>

<style>
a, a:link, a:visited {
  text-decoration: none;
}

#aboutme_button, #contact_button {
  color: #ffffff;
}

.search_text {
  margin-top: 20px;
  width: 300px;
  font-size: 1rem;
}

.el-col {
  margin-top: 20px;
}

.article-card {
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-color: #dcdfe6;
  color: #606266;
  transition: .1s;
  font-weight: 500;
  font-size: 14px;
  border-radius: 4px;
}

.sumnail {
  width: 100%;
  height: 100%;
}

.article-card:hover {
  border-color: #c6e2ff;
  background-color: #ecf5ff
}

.article-card h3, p {
  color: #606266;
}
</style>
