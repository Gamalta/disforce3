<script lang="ts">
import { PrismaClient } from '@prisma/client';

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
  methods:{
    async signUp(){
      const prisma = new PrismaClient();
      const user = await prisma.user.create({
        data: {
            email: this.user.email,
            name: this.user.username,
            password: this.user.password
        }
      })
      localStorage.setItem('username', user.name ?? '')
    }
  },
}

</script>

<template>
  <h2> Inscription </h2>
  <form @submit.prevent="signUp">
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