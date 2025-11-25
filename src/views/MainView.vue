<template>
  <div class="main">
    <Header/>
    <PostList/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/header.vue";  
import PostList from "@/components/PostList.vue"; 
import Footer from "@/components/footer.vue";   

export default {
  name: "MainView",
  components: {
    Header,
    PostList,
    Footer
  },
};
</script>

<style scoped>
body {
    position: relative;
}

.post {
    width: 80%;
    position: relative;
    padding: 10px;
    margin: 10px auto;
    border: 1px solid gray;
}


</style>