import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { AdminLogin } from './pages/AdminLogin'
import { AdminLeads } from './pages/AdminLeads'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/leads" element={<AdminLeads />} />
      </Routes>
    </Router>
  )
}

export default App
