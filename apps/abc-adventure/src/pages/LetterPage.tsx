
import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import LetterCard from '../components/LetterCard'
import FindObjects from '../components/FindObjects'
import LetterNavigation from '../components/LetterNavigation'
import { letters } from '../data/letters'
import { activities } from '../data/activities'
import { speak } from '../utils/speech'
import './LetterPage.css'

type GameMode = 'learn' | 'activity'

function LetterPage() {
  const { letter: routeLetter } = useParams<{ letter: string }>()
  const [mode, setMode] = useState<GameMode>('learn')

  const letterIndex = letters.findIndex(
    (item) => item.uppercase === routeLetter?.toUpperCase(),
  )

  if (letterIndex === -1) {
    return <Navigate to="/" replace />
  }

  const currentLetter = letters[letterIndex]
  const letter = currentLetter.uppercase

  const previousLetter =
    letters[(letterIndex - 1 + letters.length) % letters.length].uppercase

  const nextLetter =
    letters[(letterIndex + 1) % letters.length].uppercase

  return (
    <main className="app">
      <header className="app-header">
        <Link className="app-brand" to="/" aria-label="ABC Adventure home">
          <img src="/icons/icon-192.png" alt="ABC Adventure" className="app-logo" />
          <span>ABC Adventure</span>
        </Link>

        <span className="app-header__tagline">
          A little learning, a lot of fun!
        </span>
      </header>

      <section className="letter-page__welcome">
        <span className="welcome-section__eyebrow">
          LET'S EXPLORE THE ALPHABET!
        </span>
        <h1>Meet the letter {letter}!</h1>
        <p>Learn new words and play a fun activity.</p>
      </section>

      <nav className="letter-page__tabs" aria-label="Choose an activity">
        <button
          type="button"
          className={`letter-page__tab ${
            mode === 'learn' ? 'letter-page__tab--active' : ''
          }`}
          onClick={() => setMode('learn')}
          aria-pressed={mode === 'learn'}
        >
          <span aria-hidden="true">📖</span>
          Learning
        </button>

        <button
          type="button"
          className={`letter-page__tab ${
            mode === 'activity' ? 'letter-page__tab--active' : ''
          }`}
          onClick={() => setMode('activity')}
          aria-pressed={mode === 'activity'}
        >
          <span aria-hidden="true">⭐</span>
          Activity
        </button>
      </nav>

      <section className="game-section">
        {mode === 'learn' ? (
          <LetterCard
            letter={currentLetter}
            onSpeak={speak}
          />
        ) : (
          <FindObjects
            key={letter}
            letter={letter}
            objects={activities[letter] ?? []}
            onSpeak={speak}
          />
        )}
      </section>

      <LetterNavigation
        letter={letter}
        previousLetter={previousLetter}
        nextLetter={nextLetter}
      />

      <footer className="app-footer">
        <p>Made for curious little minds 💛</p>
      </footer>
    </main>
  )
}

export default LetterPage
