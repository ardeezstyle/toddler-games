
export function speak(text: string): void {
    if (!('speechSynthesis' in window)) {
      return
    }
  
    window.speechSynthesis.cancel()
  
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'en-US'
    utterance.rate = 0.85
    utterance.pitch = 1.05
  
    window.speechSynthesis.speak(utterance)
  }
  