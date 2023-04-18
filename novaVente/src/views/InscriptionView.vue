<template>
    <h1 class="titre">Inscription</h1>
  <hr>
  <div class="signup-form">
    <form @submit.prevent="submitForm">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" v-model="email" required>
      </div>
      <div>
        <label for="password">Mot de passe:</label>
        <input type="password" id="password" name="password" v-model="password" required>
      </div>
      <div>
        <label for="password-confirm">Confirmer le mot de passe:</label>
        <input type="password" id="password-confirm" name="password-confirm" v-model="passwordConfirm" required>
      </div>
      <div>
        <input type="submit" value="S'inscrire">
      </div>
    </form>

    <br>

    <p>Déjà un compte? <router-link to="/connexion"> Cliquez ici </router-link> pour vous connecter.</p>
  </div>
</template>

<style scoped>
.signup-form {
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

.password-requirements {
  font-size: 14px;
  color: gray;
  margin-top: 5px;
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
export default {
  data() {
    return {
      email: '',
      password: '',
      passwordConfirm: ''
    }
  },
  computed: {
    isValidEmail() {
      return this.email.includes('@')
    },
    isValidPassword() {
      const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/
      return passwordRegex.test(this.password)
    }
  },
  methods: {
    submitForm() {
      if (!this.isValidEmail) {
        alert("L'email doit contenir un '@'")
        return
      }
      if (!this.isValidPassword) {
        alert('Le mot de passe doit contenir au moins 8 caractères, une majuscule, des lettres et un chiffre.')
      }
      if (this.password !== this.passwordConfirm) {
        alert('Les mots de passe ne correspondent pas')
        return
      }
      // Envoyer les données d'inscription au serveur ici
      alert('Inscription réussie!')
    }
  }
}
</script>
