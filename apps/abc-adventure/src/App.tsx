
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LetterPage from './pages/LetterPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/letter/:letter" element={<LetterPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
