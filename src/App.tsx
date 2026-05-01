import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { Home } from './pages/Home'
import { TournamentResults } from '@/pages/TournamentResults'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frd/tournament-results/godzilla" element={<TournamentResults title="Torneo FRD Godzilla - Tabla de posiciones" name="Torneo Godzilla" season="Diciembre 2025 - Enero 2026" isFinished />} />
        <Route path="/frd/tournament-results/f1-legends" element={<TournamentResults title="Torneo FRD Legends Racing Series - Tabla de posiciones" name="Torneo Legends Racing Series" season="Abril 2026 - Junio 2026" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
