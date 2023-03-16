<script setup lang="ts">
</script>

<template>
  <main>
    <h2>Bienvenue sur ton profil</h2>
    <form >
      
      <div>
        <p>Modifier ton pseudo</p> 
        <label for="username">Pseudo</label>
        <input type="text" id="username" >
      </div>
      <div>
        <p>Modifier Le mot de passe</p> 
        <label for="password">Mots de passe</label>
        <input type="text" id="password">
      </div>
      <div>
        <button type="submit">Enregistrer les modifications </button>
      </div>

    </form>
    <div>
      <RouterLink to="/"> Retour à la page d'accueil  </RouterLink>
    </div>
  </main>
</template>