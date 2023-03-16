<script setup lang="ts">
</script>

<template>
  <main>
    <h2> Bienvenue sur DisForce3 </h2>

    <form @submit.prevent="login">
      <div>
        <label for="user_login"> Login </label>
        <input type="text" id="user_login" v-model="user.login">
      </div>
      <div>
        <label for="user_password"> Password </label>
        <input type="text" id="user_password">
      </div>
      <div>
        <button type="submit"> Connexion </button>
      </div>

    </form>
    <div>
      <button type="submit"> Inscription </button>
    </div>
  </main>
</template>

<script>
export default {
  name: 'login',
  data(){
    return{
      user: {
        login: '',
        password: ''
      }
    }
  },
  methods:{
    login(){
      console.log('test pause')
    }
  }
}

</script>