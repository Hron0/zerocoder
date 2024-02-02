import { Routes, Route } from 'react-router';
import ApiKeys from './pages/ApiKeys';
import Profile from './pages/Profile';
import Balance from './pages/Balance';
function App() {

  return (
    <Routes>
      <Route path='/profile/apiKey' element={<ApiKeys />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
      <Route path='/profile/balance' element={<Balance />}></Route>
    </Routes>
  )
}

export default App
