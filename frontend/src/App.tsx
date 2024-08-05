import './App.css'
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
