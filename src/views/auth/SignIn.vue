<script lang="ts">
import { PrismaClient } from '@prisma/client';



export default {
  name: 'SignIn',
  data(){
    return{
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods:{
    async signIn(){
      const prisma = new PrismaClient();
      const users = await prisma.user.findMany({
        where: {
          email: this.user.username,
          password: this.user.password,
        },
      });

      if(users.length != 1) {
        return null;
      }

      localStorage.setItem('username', users[0].name ?? '');
    },
  }
}

</script>

<template>
  <main>
    <h2>Bienvenue sur DisForce3</h2>

    <form @submit.prevent="signIn">
      <div>
        <label for="username">Pseudo</label>
        <input type="text" id="username" v-model="user.username">
      </div>
      <div>
        <label for="password">Mots de passe</label>
        <input type="text" id="password">
      </div>
      <div>
        <button type="submit">Connexion</button>
      </div>

    </form>
    <div>
      <RouterLink to="/signup">Inscription</RouterLink>
    </div>
  </main>
</template>