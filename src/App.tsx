import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { Home } from './pages/Home'
import { TournamentResults } from '@/pages/TournamentResults'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frd/tournament-results/godzilla" element={<TournamentResults />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
