<template>
   <div class="text-display">
    <h3 class="title">Transcribed Text:</h3>
    <v-container class="">

      <p class="transcript mt-8">{{ transcript }}</p>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { useVoiceStore } from '@/stores/voiceStore';
import { watchEffect, ref } from 'vue';
const { transcript } = useVoiceStore();

const transcriptedText = ref(transcript);

watchEffect(() => {
  console.log('Transcript updated:', transcriptedText.value); // Ensure the transcript is updated
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
