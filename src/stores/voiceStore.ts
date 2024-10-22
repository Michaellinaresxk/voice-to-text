import { defineStore } from 'pinia'
import { useSpeechRecognition } from '@/composables/useSpeechRecognition'

export const useVoiceStore = defineStore('voiceStore', () => {
  const { transcript, isListening, startListening, stopListening } =
    useSpeechRecognition()

  return {
    transcript,
    isListening,
    startListening,
    stopListening,
  }
})
