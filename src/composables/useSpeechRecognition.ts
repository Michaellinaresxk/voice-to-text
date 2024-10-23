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

  // Initialize SpeechRecognition object
  const createRecognition = (): SpeechRecognition | null => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition =
        (window as any).SpeechRecognition ||
        (window as any).webkitSpeechRecognition
      return new SpeechRecognition()
    } else {
      console.error('Web Speech API is not supported')
      return null
    }
  }

  // Handle result event
  const handleResult = (event: SpeechRecognitionEvent) => {
    const result = event.results[event.results.length - 1][0].transcript
    transcript.value = result // Update the transcript
    console.log('Updated transcript:', transcript.value)
  }

  // Handle start event
  const handleStart = () => {
    console.log('Speech recognition started')
  }

  // Handle error event
  const handleError = (event: Event) => {
    console.error('Speech recognition error:', event)
  }

  // Initialize recognition and assign event handlers
  const initRecognition = () => {
    recognition = createRecognition()
    if (recognition) {
      recognition.continuous = true
      recognition.interimResults = false
      recognition.lang = 'en-US'

      // Assign event handlers
      recognition.onresult = handleResult
      recognition.onstart = handleStart
      recognition.onerror = handleError
    }
  }

  // Start listening
  const startListening = () => {
    if (recognition) {
      recognition.start()
      isListening.value = true
      console.log('Started listening')
    }
  }

  // Stop listening
  const stopListening = () => {
    if (recognition) {
      recognition.stop()
      isListening.value = false
      console.log('Stopped listening')
    }
  }

  // Setup lifecycle hooks
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
