<template>
  <h2> Inscription </h2>

  <form>
    <div>
      <label for="user_login"> Nom </label>
      <input type="text" id="user_login" v-model="user.login">
    </div>
    <div>
      <label for="user_login"> Prénom </label>
      <input type="text" id="user_login" v-model="user.login">
    </div>
    <div>
      <label for="user_login"> Login </label>
      <input type="text" id="user_login" v-model="user.login">
    </div>
    <div>
      <label for="user_password"> Password </label>
      <input type="text" id="user_password">
    </div>
    <div>
      <button type="submit"> S'inscrire  </button>
    </div>
</template>

<script>
export default {
  name: "Registration"
}
</script>

<style scoped>

</style>