<template>
   <div class="app-container">
    <VoiceInput />
    <TextDisplay />
  </div>
</template>

<script setup lang="ts">
import VoiceInput from '@/components/VoiceInput.vue';
import TextDisplay from '@/components/TextDisplay.vue';
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fdfdfd;
}
</style>
