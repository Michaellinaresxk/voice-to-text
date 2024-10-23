<template>
  <div class="voice-input">
    <!-- Start Button: Only enabled when not listening -->
    <v-btn
      prepend-icon="mdi-microphone"
      color="deep-purple-accent-3"
      variant="tonal"
      class="action-btn"
      @click="startListening"
      :disabled="isListening"
    >
      Start Voice Input
    </v-btn>

    <!-- Stop Button: Only enabled when listening -->
    <v-btn
      color="deep-purple-lighten-3"
      class="ml-5"
      @click="stopListening"
      :disabled="!isListening"
    >
      Stop
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { useVoiceStore } from '@/stores/voiceStore';

const { startListening, stopListening, isListening } = useVoiceStore();
</script>

<style scoped>
.action-btn:disabled {
  background-color: #7f8c8d;
  cursor: not-allowed;
}

.transcript {
  font-size: 18px;
  margin-top: 20px;
  max-width: 80%;
  word-wrap: break-word;
}
</style>
