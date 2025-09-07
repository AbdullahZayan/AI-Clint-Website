import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoadingPage from "./pages/LoadingPage"
import HomePage from "./pages/HomePage"
import ProjectPage from "./pages/ProjectPage"
import BlogPage from  "./pages/BlogPage"
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoadingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/Projects" element={<ProjectPage />} />
          <Route path="/blogs" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
