import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

import { Home } from "./pages/Home"
import { TournamentResults } from "@/pages/TournamentResults"
import MainLayout from "./layouts/MainLayout"
import { TournamentList } from "./pages/TournamentList"

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/frd/tournaments" element={<TournamentList />} />
          <Route
            path="/frd/tournament-results/:id"
            element={<TournamentResults />}
          />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
