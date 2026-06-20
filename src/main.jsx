import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Music from './pages/Music.jsx'
import Writings from './pages/Writings.jsx'
import WritingDetails from './pages/WritingDetails.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/peelthebanana/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/music" element={<Music />} />
        <Route path="/writings" element={<Writings />} />
        <Route path="/writings/:id" element={<WritingDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
