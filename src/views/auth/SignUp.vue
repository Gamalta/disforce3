<script lang="ts">
export default {
  name: "SignUp",
  data(){
    return{
      user: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
}
</script>

<template>
  <h2> Inscription </h2>
  <form>
    <div>
      <label for="username">Pseudo</label>
      <input type="text" id="username" v-model="user.username">
    </div>
    <div>
      <label for="email">Email</label>
      <input type="text" id="email" v-model="user.email">
    </div>
    <div>
      <label for="password">Password</label>
      <input type="text" id="password" v-model="user.password">
    </div>
    <div>
      <button type="submit">S'inscrire</button>
    </div>
    <RouterLink to="/signin">Se connecter avec un compte existant</RouterLink>
  </form>
</template>

<style scoped>

</style>