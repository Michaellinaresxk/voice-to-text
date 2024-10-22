import { ref, onMounted, onUnmounted } from 'vue'

interface SpeechRecognition extends EventTarget {
  continuous: boolean
  interimResults: boolean
  lang: string
  start: () => void
  stop: () => void
  onresult: (event: SpeechRecognitionEvent) => void
}

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList
}

export function useSpeechRecognition() {
  const transcript = ref<string>('')
  const isListening = ref<boolean>(false)
  let recognition: SpeechRecognition | null = null

  const initRecognition = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition =
        (window as any).SpeechRecognition ||
        (window as any).webkitSpeechRecognition
      recognition = new SpeechRecognition()
      recognition.continuous = true
      recognition.interimResults = false
      recognition.lang = 'en-US'

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const result = event.results[event.results.length - 1][0].transcript
        transcript.value += result
      }
    } else {
      console.error('Web Speech API is not supported')
    }
  }

  const startListening = () => {
    if (recognition) {
      recognition.start()
      isListening.value = true
    }
  }

  const stopListening = () => {
    if (recognition) {
      recognition.stop()
      isListening.value = false
    }
  }

  onMounted(() => {
    initRecognition()
  })

  onUnmounted(() => {
    if (recognition) {
      recognition.stop()
    }
  })

  return {
    transcript,
    isListening,
    startListening,
    stopListening,
  }
}
