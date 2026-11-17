
import { Link } from 'react-router-dom'
import './LetterNavigation.css'

interface LetterNavigationProps {
  letter: string
  previousLetter: string
  nextLetter: string
}

function LetterNavigation({
  letter,
  previousLetter,
  nextLetter,
}: LetterNavigationProps) {
  const isFirstLetter = letter === 'A'
  const isLastLetter = letter === 'Z'

  return (
    <nav
      className="letter-navigation"
      aria-label={`Navigation for letter ${letter}`}
    >
      {isFirstLetter ? (
        <span
          className="letter-navigation__button letter-navigation__button--disabled"
          aria-disabled="true"
        >
          <span aria-hidden="true">←</span>
          <span className="letter-navigation__label">
            <small>Previous</small>
            <strong>—</strong>
          </span>
        </span>
      ) : (
        <Link
          className="letter-navigation__button"
          to={`/letter/${previousLetter}`}
          aria-label={`Previous letter: ${previousLetter}`}
        >
          <span aria-hidden="true">←</span>
          <span className="letter-navigation__label">
            <small>Previous</small>
            <strong>{previousLetter}</strong>
          </span>
        </Link>
      )}

      <Link
        className="letter-navigation__home"
        to="/"
        aria-label="Back to alphabet home"
      >
        <span aria-hidden="true">⌂</span>
        <span>All letters</span>
      </Link>

      {isLastLetter ? (
        <span
          className="letter-navigation__button letter-navigation__button--next letter-navigation__button--disabled"
          aria-disabled="true"
        >
          <span className="letter-navigation__label">
            <small>Next</small>
            <strong>—</strong>
          </span>
          <span aria-hidden="true">→</span>
        </span>
      ) : (
        <Link
          className="letter-navigation__button letter-navigation__button--next"
          to={`/letter/${nextLetter}`}
          aria-label={`Next letter: ${nextLetter}`}
        >
          <span className="letter-navigation__label">
            <small>Next</small>
            <strong>{nextLetter}</strong>
          </span>
          <span aria-hidden="true">→</span>
        </Link>
      )}
    </nav>
  )
}

export default LetterNavigation
