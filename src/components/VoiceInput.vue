<template>
 <div class="voice-input">
    <v-btn color="deep-purple-accent-3" variant="tonal" class="action-btn" @click="startListening" :disabled="isListening">
      Start Voice Input
    </v-btn>
    <v-btn color="" class="action-btn ml-5" @click="stopListening" :disabled="!isListening">
      Stop
    </v-btn>
    <p class="transcript">{{ transcript }}</p>
  </div>
</template>

<script setup lang="ts">
import { useVoiceStore } from "@/stores/voiceStore";


  const { startListening, stopListening, isListening, transcript } = useVoiceStore();

</script>

<style scoped>
.voice-input {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}


.action-btn:hover {
  background-color: #8e44ad;
  transform: scale(1.1);
}

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
