import { Navigate, Route, Routes } from 'react-router-dom'
import BoldModern from './designs/BoldModern.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<BoldModern />} />
      <Route path="/v1" element={<Navigate to="/" replace />} />
      <Route path="/v2" element={<Navigate to="/" replace />} />
      <Route path="/v3" element={<Navigate to="/" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
