<template>
   <div class="app-container">
    <VoiceInput />
    <section class="mt-10">
      <TextDisplay />
    </section>
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
  margin-top: 200px;
}
</style>
