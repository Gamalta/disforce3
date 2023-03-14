<script setup lang="ts">
import Message from '@/components/Message.vue';

</script>

<template>
  <main class="mainWrapper">
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
  height: 100vh;
}

section {
  width: 15%;
  padding-right: 2rem;
}

main > div {
  width: 85%;
}

h2 {
  font-size: 2.6rem;
  font-weight: 500;
}

h6 {
  font-size: 2rem;
}
</style>