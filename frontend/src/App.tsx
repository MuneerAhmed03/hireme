import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostPage from './pages/postPage';
import CreatePage from './pages/create';
import { AppBar } from './components/app-bar';

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-center">
        <AppBar />
        <Routes>
          <Route path="/" element={<PostPage/>} />
          <Route path="/create" element={<CreatePage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;