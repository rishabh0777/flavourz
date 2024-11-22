import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from './components/Dashboard'
import Layout from "./components/Layout"

function App() {

  return (
   <Router>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
   </Router>
  )
}

export default App
