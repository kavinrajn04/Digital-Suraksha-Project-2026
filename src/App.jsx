import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SettingsProvider } from './hooks/SettingsProvider'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Learn from './pages/Learn'
import ModulePage from './pages/ModulePage'
import Simulator from './pages/Simulator'
import Quiz from './pages/Quiz'
import Assessment from './pages/Assessment'
import Emergency from './pages/Emergency'
import Impact from './pages/Impact'
import Resources from './pages/Resources'
import About from './pages/About'

export default function App() {
  return (
    <SettingsProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/learn/:moduleId" element={<ModulePage />} />
            <Route path="/simulator" element={<Simulator />} />
            <Route path="/quiz" element={<Quiz />} />
<Route path="/assessment" element={<Assessment />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SettingsProvider>
  )
}