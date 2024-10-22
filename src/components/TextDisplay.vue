<template>
   <div class="text-display">
    <h3 class="title">Transcribed Text:</h3>
    <p class="transcript mt-8">{{ transcript }}</p>
  </div>
</template>

<script setup lang="ts">
import { useVoiceStore } from '@/stores/voiceStore';
import { watchEffect } from 'vue';
const { transcript } = useVoiceStore();


// Watch for changes in the transcript and ensure reactivity
watchEffect(() => {
  console.log('Transcript updated:', transcript); // Ensure the transcript is updated
});
</script>

<style scoped>

.title {
  color: #616161;
}
.transcript {
  color: #616161;
  margin-top: 10px;
  font-size: 22px;
  word-wrap: break-word;
}
</style>
