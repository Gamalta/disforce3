<script setup lang="ts">
defineProps<{
  author: string
  msg: string
  right?: boolean
}>()
</script>

<template>
  <div :class="{messageContainerRight: right, messageContainerLeft: !right}" >
    <div class="message">
      <h2 class="green">{{ author }}</h2>
      <p>{{ msg }}</p>
    </div>
  </div>
</template>

<style scoped>

.messageContainerRight {
  display: flex;
  flex-direction: row-reverse;
}

.messageContainerRight .message {
  
  background-color: hsla(160, 100%, 37%, 0.2);
}
.messageContainerLeft {
  display: flex;
  flex-direction: row;
}
.messageContainerLeft .message {
  
  background-color: #2c3e50;
}
.message {
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem 0;
}
p {
  font-size: 1.5rem;
}
</style>
