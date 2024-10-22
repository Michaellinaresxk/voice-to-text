<template>
   <div class="text-display">
    <h3 color="">Transcribed Text:</h3>
    <p color="" class="transcript">{{ transcript }}</p>
  </div>
</template>

<script setup lang="ts">
import { useVoiceStore } from '@/stores/voiceStore';

const { transcript } = useVoiceStore();
</script>

<style scoped>
.text-display {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.transcript {
  padding: 15px;
  border-radius: 10px;
  margin-top: 10px;
  font-size: 16px;
  max-width: 80%;
  word-wrap: break-word;
  text-align: left;
}
</style>
