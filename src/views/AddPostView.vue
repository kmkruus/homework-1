<template>
  <div class="main">
    <Header/>
    <AddPost/>
    <Footer/>
  </div>
</template>

<script>
import Header from "/src/components/header.vue";
import Footer from "/src/components/footer.vue";

export default {
  name: "AddPostView",
  components: {
    Header,
    AddPost,
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