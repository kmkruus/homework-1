<template>
<div>
    
  <form @submit.prevent ="validateForm">
  <h2>Create an account</h2>
  <label for="email">Email</label>
  <input type="email" required v-model="email">
  <label for="password">Password</label>
  <input type="password" required v-model="password" @input = "validateForm">

 <ul v-if="passwordErrors.length">
        <li v-for="(err, index) in passwordErrors" :key="index" class="error">
          {{ err }}
        </li>
      </ul>

<label for="role">Role</label>
<select v-model="role">
<option value="admin"> Admin </option>
<option value="user"> User </option>
</select>

<div>

<input type="checkbox" required v-model="terms">
<label for="checkbox">Accept terms and condition</label>
</div>

<div class="submit">
    <button>Sign up </button>
</div>
</form>


</div>


</template>

<script>
export default {
name: "FormView", 

data: function() {
    return {
   email: '',
   password: '',
   role: '',
   terms: false,
   passwordErrors: [],
  }},
  methods: {
   /* Validate password */
   validateForm(){
    const password = this.password;
    let errorList = [];
    this.passwordErrors = [];
    if(!/(?=.*[a-z]{2})/.test(password)){
        errorList.push("The password must contain at least two lowercase letters.");}
    if (!/^[A-Z]/.test(password)) {
        errorList.push("The first letter of the password must be an uppercase letter.");}
    if(!/(?=.*[A-Z])/.test(password)){
        errorList.push("The password must contain at least one uppercase letter.");}
    if(!/(?=.*\d)/.test(password)){
        errorList.push("The password must contain at least one number.");}
    if(!/(?=.*_)/.test(password)){
        errorList.push("The password must contain at least one instance of the character _");}
    if(!/^.{8,15}$/.test(password)){
        errorList.push("The password must be between 8 to 15 characters long.");}
    this.passwordErrors = errorList;
    if (this.passwordErrors.length === 0) {
        console.log("Valid password");
        this.$router.push('/');
    }
  }
}
}
</script>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background:  rgb(167, 154, 154);
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
    color: rgb(8, 110, 110);
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input{
display: block;
padding: 10px 6px;
width: 100%;
box-sizing: border-box;
border: none;
border-bottom: 1px solid white;
color: blue;
}
input[type="checkbox"]{
    display: inline-block;
    width: 16px;
    margin:  0 10px 0 0;
    position: relative;
    top: 2px;
}
button{
background:  rgb(8, 110, 110);
border: 0;
padding: 10px 20px;
margin-top:  20px;
color: white;
border-radius: 20px;
}
h2, .submit{
    text-align: center;
}
.error{
    color: red;
    font-size: 0.8em;
    margin-top:  10px;
    text-align: center;
}
</style>