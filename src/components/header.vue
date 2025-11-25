<template>
<header> <!-- Header code identical across pages except for the links -->
    <div class = top>
        <router-link to="/">Main</router-link> |
        <router-link to="/login">Login</router-link> |
    </div>
</header>
</template>


<script>
</script>

<style scoped>
.top {
    display: flex;
    padding: 10px;
    width: 99%;
    box-sizing: border-box;
    background: #bfbfbf;
    border-radius: 2vh;
    align-self: auto;
}

header {
    display: flex;
    width: 100%;
    background-color: white;
    position: fixed;
    top: 0;
    padding-top: 10px;
}
</style>