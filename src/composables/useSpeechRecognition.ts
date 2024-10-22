import { ref, onMounted, onUnmounted } from 'vue'

interface SpeechRecognition extends EventTarget {
  continuous: boolean
  interimResults: boolean
  lang: string
  start: () => void
  stop: () => void
  onresult: (event: SpeechRecognitionEvent) => void
  onerror: (event: Event) => void
  onstart: () => void
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

      // Event handlers
      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const result = event.results[event.results.length - 1][0].transcript
        transcript.value += result
        console.log('Updated transcript:', transcript.value) // Check if this updates
      }

      recognition.onstart = () => {
        console.log('Speech recognition started')
      }

      recognition.onerror = event => {
        console.error('Speech recognition error:', event)
      }
    } else {
      console.error('Web Speech API is not supported')
    }
  }

  const startListening = () => {
    if (recognition) {
      recognition.start()
      isListening.value = true
      console.log('Started listening')
    }
  }

  const stopListening = () => {
    if (recognition) {
      recognition.stop()
      isListening.value = false
      console.log('Stopped listening')
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
