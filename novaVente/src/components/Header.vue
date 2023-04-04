<template>
  <div class="header">
    <router-link to="/">
      <div class="logo">CRITIKS</div>
    </router-link>
    <nav>
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/film">Films</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #16161a;
  padding: 20px 50px;
  color: white;
  font-size: 24px;
}

.logo {
  font-size: 36px;
  font-weight: bold;
  color: white;
}

nav ul {
  display: flex;
  list-style: none;
}

nav ul li {
  margin-right: 20px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

nav ul li a:hover {
  color: #f2f2f2;
}
</style>
