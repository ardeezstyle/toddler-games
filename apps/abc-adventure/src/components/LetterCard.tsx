
import type { LetterData } from '../data/letters'
import './LetterCard.css'

interface LetterCardProps {
  letter: LetterData
  onSpeak: (text: string) => void
}

function LetterCard({ letter, onSpeak }: LetterCardProps) {
  const [primaryWord, ...otherWords] = letter.words

  return (
    <article className="letter-card">
      <header className="letter-card__header">
        <span className="letter-card__eyebrow">MEET THE LETTER</span>
        <span className="letter-card__counter">1 OF 26</span>
      </header>

      <section className="letter-card__letter">
        <div className="letter-card__characters">
          <span>{letter.uppercase}</span>
          <span>{letter.lowercase}</span>
        </div>

        <p className="letter-card__phonetic">
          {letter.uppercase} says {letter.phonetic}
        </p>

        <button
          className="sound-button"
          type="button"
          onClick={() => onSpeak(letter.uppercase)}
          aria-label={`Hear the letter ${letter.uppercase}`}
        >
          🔊 Hear the letter
        </button>
      </section>

      <section className="letter-card__primary-word">
        <div className="letter-card__primary-image">
          {primaryWord.image ? (
            <img src={primaryWord.image} alt={primaryWord.word} />
          ) : (
            <span aria-hidden="true">🍎</span>
          )}
        </div>

        <h2>{letter.uppercase} is for {primaryWord.word}</h2>

        <button
          className="sound-button"
          type="button"
          onClick={() => onSpeak(primaryWord.word)}
        >
          🔊 Say {primaryWord.word}
        </button>
      </section>

      <section className="letter-card__more-words">
        <h3>More words beginning with {letter.uppercase}</h3>

        <div className="letter-card__word-grid">
          {otherWords.map((item) => (
            <button
              className="letter-card__word"
              key={item.word}
              type="button"
              onClick={() => onSpeak(item.word)}
            >
              <div className="letter-card__word-image">
                {item.image ? (
                  <img src={item.image} alt={item.word} />
                ) : (
                  <span aria-hidden="true">✨</span>
                )}
              </div>
              <span>{item.word}</span>
              <span className="letter-card__word-sound">🔊</span>
            </button>
          ))}
        </div>
      </section>
    </article>
  )
}

export default LetterCard
