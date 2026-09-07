import { Navigate, Route, Routes } from 'react-router-dom'
import BoldModern from './designs/BoldModern.jsx'
import ScientificDark from './designs/ScientificDark.jsx'
import Chooser from './pages/Chooser.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Chooser />} />
      <Route path="/v1" element={<ScientificDark />} />
      <Route path="/v3" element={<BoldModern />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
