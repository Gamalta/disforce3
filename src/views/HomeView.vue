<script setup lang="ts">
import Message from '@/components/Message.vue';
import SignIn from '@/views/auth/SignIn.vue';

const user = localStorage.getItem('user');
console.log(user);
</script>

<template>
  <SignIn v-if="user == null" />
  <main class="mainWrapper" v-else>
    <section>
      <h6>Salon #1</h6>
      <h6>Salon #2</h6>
      <h6>Salon #3</h6>
    </section>
    <div>
      <h2>Salon d'Acceuil</h2>
      <div class="divider" />
      <Message author="Elio" msg="ceci est mon message" right />
      <Message author="Baptiste" msg="ceci est mon message"  />
      <Message author="Jason" msg="ceci est mon message"  />
      <Message author="Baptiste" msg="ceci est mon message"  />
      <Message author="Elio" msg="ceci est mon message" right  />
      <Message author="Jason" msg="ceci est mon message"  />
      <Message author="Elio" msg="ceci est mon message" right  />
      <Message author="Jason" msg="ceci est mon message"  />
      <Message author="Baptiste" msg="ceci est mon message"  />
    </div>
  </main>
</template>
<style scoped>

.right {
  text-align: end;
}
.divider {
  border: 1px solid var(--color-border);
  margin: 1rem 0;
}

.mainWrapper {
  display: flex;
  flex-direction: row;
  height: 304vh;
}

section {
  width: 15%;
  padding-right: 2rem;
  margin-left: 10px;
  margin-top: 80px;
}

main > div {
  width: 85%;
}

h2 {
  right: -560px;
  font-size: 2.6rem;
  font-weight: 500;
}

h6 {
  font-size: 2rem;
  display: flex;
  justify-content: space-around;
  
}
</style>