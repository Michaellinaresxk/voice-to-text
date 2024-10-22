<template>
 <div class="voice-input">
    <button class="action-btn" @click="startListening" :disabled="isListening">
      Start Voice Input
    </button>
    <button class="action-btn" @click="stopListening" :disabled="!isListening">
      Stop
    </button>
    <p class="transcript">{{ transcript }}</p>
  </div>
</template>

<script setup lang="ts">
import { useVoiceStore } from '@/stores/voiceStore';


   const { startListening, stopListening, isListening, transcript } = useVoiceStore();

</script>

<style scoped>
.voice-input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: #fff;
  text-align: center;
}

.action-btn {
  background-color: #9b59b6;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  margin: 10px;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.3s ease;
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
