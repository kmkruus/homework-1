<template>

<div class="main">
    <div class="posts-list post" v-for="post in allPosts" :key="post.id">

    <!-- User PFP -->
    <div class="push">
      <img src="@/images/icon.png" alt="pfp">
    </div>

    <!-- Date -->
    <h3>{{ post.date }}</h3>

    <!-- Optional Image -->
    <div v-if="post.image">
      <img :src="'@/images/' + post.image" alt="postAttachment">
    </div>

    <!-- Text -->
    <p>{{ post.text }}</p>

    <!-- Like Button -->
    <div class="push like" @click="post.likes++">
      <img src="@/images/thumbsup.png" alt="likeButton">
      <span>{{ post.likes }}</span>
    </div>
    </div> 
    <button class="delete-all-likes" @click.prevent="deleteAllLikes">Clear all likes</button>
    
</div>

</template>

<script>

import { mapGetters } from "vuex";

export default {
  name: "PostList",

  data() {
    return {
      postDesc: "",
    };
  },

  computed: {
    ...mapGetters(["allPosts"])
  },

  methods: {
    deleteAllLikes() {
      this.allPosts.forEach(post => {
        post.likes = 0;
      });
    }
  }
};


</script>

<style scoped>
.push {
    margin-left: auto;
    display: flex;
    align-items: stretch;
}
.push img {
    height: 3em;
    width: auto;
    object-fit: contain;
    display: block;
}
.post{
    padding: 10px;
    width: 50%;
    box-sizing: border-box;
    background: #bfbfbf;
    margin-left: auto;
    margin-right: auto;
    border-radius: 2vh;
    margin-bottom: 25px;
    margin-top: 75px;
}
.delete-all-likes{
    margin-bottom: 100px;

}

.push {
    margin-left: auto;
    display: flex;
    align-items: stretch;
}
.push img {
    height: 3em;
    width: auto;
    object-fit: contain;
    display: block;
}

</style>

