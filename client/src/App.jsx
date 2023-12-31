import { BrowserRouter, Routes, Route } from 'react-router-dom'

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Hola home page</h1>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/posts' element={<h1>posts</h1>} />
        <Route path='/add-post' element={<h1>create Post</h1>} />
        <Route path='/post/:id' element={<h1>view post</h1>} />
        <Route path='/profile' element={<h1>profile</h1>} />
      </Routes>
    </ BrowserRouter>
  )
}

export default App
