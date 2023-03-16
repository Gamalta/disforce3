<script lang="ts">
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
    singIn(){
      console.log('test pause')
    },
  }
}

</script>

<template>
  <main>
    <h2>Bienvenue sur DisForce3</h2>

    <form @submit.prevent="singIn">
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