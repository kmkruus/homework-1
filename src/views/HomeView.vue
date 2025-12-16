<template>
  <div class="home">
    <Header/>
    <br></br>
    <br></br>
    <br></br>
    <Logout/>
    <PostList/>
    <addDelete/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/header.vue";  
import Logout from "@/components/logoutButton.vue";  
import PostList from "@/components/PostList.vue"; 
import Footer from "@/components/footer.vue";    
import addDelete from "@/components/addDeleteButtons.vue";  

export default {
  name: "HomeView",
  components: {
    Header,
    PostList,
    Footer,
    Logout,
    addDelete
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