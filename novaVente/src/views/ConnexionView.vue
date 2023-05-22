<template>
    <h1 class="titre">Connexion</h1>
  <hr>
  <div class="login-form">
    <form @submit.prevent="submitForm">
      
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" v-model="email" required>
      
        <label for="password">Mot de passe:</label>
        <input type="password" id="password" name="password" v-model="password" required>
      
        <input type="submit" value="Se connecter">
      
    </form>

    <br>

    <p>Pas encore de compte? <router-link to="/inscription"> Cliquez ici </router-link> pour vous inscrire.</p>
  </div>
</template>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  padding: 20px;
  border-radius: 10px;
  width: 50%;
}

label {
  font-weight: bold;
}

input {
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid black;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

.error-message {
  color: red;
}
.titre{
  margin-top: 2%;
text-align: center;
}

hr{
  border: none; 
  border-top: 2px solid #333;
   margin-left: 45%;
    margin-right: 45%;
}
</style>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    isValidEmail() {
      return this.email.includes('@')
    }
  },
  methods: {
    submitForm() {
      console.log("this.email = ", (this.email))
      console.log("this.password = ", (this.password))
      const credential = {
          email: this.email,
          password: this.password
      }
      console.log("credential = ", (credential))
      axios.post('http://localhost:3000/api/clients/connexion', credential)
      .then(response => {
        console.log("response data = ", (response.data))
        localStorage.setItem('token', response.data.token);
        this.$router.push('/');
      })
      .catch(error => {
        this.error = 'Identifiants de connexion invalides.';
      });
    }
  }
}
</script>
