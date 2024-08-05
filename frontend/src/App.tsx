import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreatePage from './pages/create'
import PostPage from './pages/postPage'
import { AppBar } from './components/app-bar'

function App() {

  return (
    <div className="flex flex-col justify-center">
      <AppBar/>
      <PostPage/>
    </div>
  )
}

export default App
