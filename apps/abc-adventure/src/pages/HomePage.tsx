
import { Link } from 'react-router-dom'
import { letters } from '../data/letters'
import './HomePage.css'

function HomePage() {
  const name = 'Swarup'
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

      <section className="welcome-section">
        <span className="welcome-section__eyebrow">
          HELLO {name}, LITTLE EXPLORER!
        </span>
        <h1>Let's explore the alphabet!</h1>
        <p>Choose a letter to start your adventure.</p>
      </section>

      <section className="home-page__letters" aria-label="Alphabet">
        {letters.map((letter) => (
          <Link
            className="home-page__letter"
            key={letter.uppercase}
            to={`/letter/${letter.uppercase}`}
            aria-label={`Explore ${letter.uppercase}`}
          >
            <span>{letter.uppercase}</span>
            <small>{letter.lowercase}</small>
          </Link>
        ))}
      </section>

      <footer className="app-footer">
        <p>Made for curious little minds 💛</p>
      </footer>
    </main>
  )
}

export default HomePage
