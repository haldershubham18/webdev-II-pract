import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <span className="brand">MyApp</span>
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? "link active" : "link"}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "link active" : "link"}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "link active" : "link"}>Contact</NavLink>
      </div>
    </nav>
  )
}

function Home() {
  return (
    <div className="page">
      <h2>Home Page</h2>
      <p>Welcome to the home page. This is built using React Router.</p>
    </div>
  )
}

function About() {
  return (
    <div className="page">
      <h2>About Page</h2>
      <p>This page tells you about the application and who built it.</p>
    </div>
  )
}

function Contact() {
  return (
    <div className="page">
      <h2>Contact Page</h2>
      <p>You can reach us at contact@example.com</p>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
