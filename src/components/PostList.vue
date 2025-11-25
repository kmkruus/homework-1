<template>

<div class="main">
  
    <!-- 
    The v-for directive requires a special syntax in the form of "item" in "items", 
    where "items" is the source data array and "item" is an alias for the array element being iterated on.
    You do not need to define the item (e.g., "task" in our case), JS/Vue will know it is a single array element being iterated on.
    To reuse and reorder existing elements, you need to provide "a unique key attribute" for each item (e.g., :key="index").

    However, using the following "v-for", will not work as expected for us, try to figure out why
    
    <div class="tasks-list" v-for="task in tasks" :key="task.desc">  
    -->

    <!-- Try to remove ":key="index"", and check what kind of error you will get -->
    <div class="tasks-list" v-for="(task, index) in tasks" :key="index"> 
  
    <!-- 
    "task.done = !task.done"" to toggle between these two states"
    
    ":style="{'..." - If task.done is "true", the class "clicked" will apply, which will change the text style  to line-through. 
    Otherwise, it will the class "clicked", which will remove the text-decoration 
    This is a ternary operator, you should remember how it works" 
    -->
    <div class="task-box">{{ task.desc }}</div>
    <div class="like" @click="task.likes = task.likes + 1">Like {{ task.likes }}</div>
    </div> 
  <form>
    <button class="delete-all-tasks" @click.prevent="deleteAll">Clear all likes</button>
  </form>
    
</div>

</template>

<script>

export default {
name: "PostList",

data: function() {
return {
    tasks: [ 
      {desc: "Register my team in Moodle", likes: 1},
      {desc: "Finish the homework", likes: 1},
      {desc: "Submit the homework though Moodle" , likes: 1},
      {desc: "Discuss the homework in Lab" , likes: 1},
        ],
    taskDesc: "",
  }},

methods: {
    addTask: function() {
    /*   We are just adding a new entery to the list (array), each object has two data (lierals) 
      desc (text description) and done (true or false). When pressing on the "Add task button", 
      the text within the input filed will be assigned to the desc of the new object to be added, 
      and its done value will be set to false because it is not logical to add a task, which we have already done
    */  
      this.tasks.push({desc: this.taskDesc, done: false });
    /* to empty the input after adding the task in the input filed to the list (array) of the to do list */
      this.taskDesc = "";
    },
    /* Empty the list (array) of the to do list  */
    deleteAll: function() {
      this.tasks.forEach(task => {
    task.likes = 0;
  });
    }
  }  

}; 

</script>

<style scoped>



* {
  box-sizing: border-box;
}
h1{
  color: #21b813;
}

.clicked{
  text-decoration: line-through;
  color: #135ab8;
}
.main {
  text-align: center;
  padding-top: 75px;
  padding-bottom: 75px;
}
.main form {
  margin: 20px auto 10px;
  width: 500px;
  overflow: hidden;

}
.main form input {
  background-color: #f7f7f7;
  border: 1px solid #eee;
  margin-bottom: 15px;
  width: calc(100% - 210px);
  height: 46px;
  padding: 10px;
  float: left;
}
.main form input:focus {
  outline: none;
}
.main form button {
  width: 90px;
  height: 46px;
  padding: 10px;
  background-color: #2196f3;
  color: #fff;
  border-color: transparent;
  cursor: pointer;
  float: left;
  margin-left: 5px;
  font-size: 16px;
  border-radius: 20px;
}
.main form button:disabled {
  opacity: 0.4;
  cursor: no-drop;
}
.main form button:focus {
  outline: none;
}
.main form button.delete-all-tasks {
  width: 110px;
  background-color: #cc372c;
  color: #fff;
  border-color: transparent;
  font-size: 16px;
  cursor: pointer;
  height: 48px;
  border-radius: 20px;
}

.main form button.delete-all-tasks:hover {
    background-color: #6e1812;
}
.main .tasks-list {
  width: 500px;
  margin: 0 auto;
}
.main .tasks-list .task-box {
  background-color: rgba(139, 195, 74, 0.25);
  padding: 15px;
  text-align: left;
  margin-bottom: 15px;
  margin-right: 5px;
  width: calc(100% - 86px);
  cursor: pointer;
  float: left;
}
.main .tasks-list .like {
  float: right;
  width: 80px;
  background-color: #cc372c;
  color: #fff;
  border-color: transparent;
  padding: 1px 10px;
  cursor: pointer;
  height: 48px;
  line-height: 51px;
  border-radius: 20px;
}

.main .tasks-list .like:hover {
    background-color: #6e1812;
}



</style>

