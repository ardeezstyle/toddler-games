
import { useState } from 'react'
import type { ActivityObject } from '../data/activities'
import './FindObjects.css'

interface FindObjectsProps {
  letter: string
  objects: ActivityObject[]
  onSpeak: (text: string) => void
}

function shuffle<T>(items: T[]): T[] {
  return [...items].sort(() => Math.random() - 0.5)
}

function FindObjects({ letter, objects, onSpeak }: FindObjectsProps) {
  const [cards, setCards] = useState(() => shuffle(objects))
  const [found, setFound] = useState<string[]>([])
  const [feedback, setFeedback] = useState('')
  
  const correctCount = objects.filter(
    (item) => item.isCorrect,
  ).length

  const isComplete = found.length === correctCount

  function handleTap(item: ActivityObject) {
    if (found.includes(item.word) || isComplete) return

    if (item.isCorrect) {
      setFound((previous) => [...previous, item.word])
      setFeedback(`Wonderful! ${item.word} starts with ${letter}!`)
      onSpeak(item.word)
    } else {
      setFeedback(`Good try! Look for something that starts with ${letter}.`)
    }
  }

  function restartActivity() {
    setCards(shuffle(objects))
    setFound([])
    setFeedback('')
  }

  return (
    <section className="find-objects">
      <header className="find-objects__header">
        <span className="find-objects__eyebrow">
          FIND THE OBJECTS
        </span>

        <span className="find-objects__progress">
          {found.length} of {correctCount} found
        </span>
      </header>

      <div className="find-objects__intro">
        <h2>Find the {letter} objects!</h2>
        <p>Tap all the pictures that begin with {letter}.</p>
      </div>

      <div className="find-objects__grid">
        {cards.map((item) => {
          const isFound = found.includes(item.word)

          return (
            <button
              className={`find-objects__card ${
                isFound ? 'find-objects__card--found' : ''
              }`}
              key={item.word}
              type="button"
              onClick={() => handleTap(item)}
              disabled={isFound || isComplete}
              aria-pressed={isFound}
              aria-label={item.word}
            >
              <div className="find-objects__image">
                {item.image ? (
                  <img src={item.image} alt="" />
                ) : (
                  <span aria-hidden="true">{item.emoji}</span>
                )}
              </div>

              {isFound && (
                <span className="find-objects__check" aria-hidden="true">
                  ✓
                </span>
              )}
            </button>
          )
        })}
      </div>

      <div className="find-objects__feedback" aria-live="polite">
        {isComplete ? (
          <>
            <h3>Hooray! You found them all! 🎉</h3>
            <p>You're an amazing letter explorer!</p>
            <button type="button" onClick={restartActivity}>
              Play again
            </button>
          </>
        ) : (
          <p>{feedback || 'You can do it! Find the pictures!'}</p>
        )}
      </div>
    </section>
  )
}

export default FindObjects
