import { Routes, Route } from 'react-router';
import ApiKeys from './pages/ApiKeys';
import Profile from './pages/Profile';
function App() {

  return (
    <Routes>
      <Route path='/profile/apiKey' element={<ApiKeys />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
    </Routes>
  )
}

export default App
