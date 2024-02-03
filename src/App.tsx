import { Routes, Route } from 'react-router';
import ApiKeys from './pages/ApiKeys';
import Profile from './pages/Profile';
import Balance from './pages/Balance';
import Rates from './pages/Rates';
import Docs from './pages/Docs';
import Login from './pages/auth/Login';
import Users from './pages/admin/Users';
function App() {

  return (
    <Routes>
      <Route path='/profile/apiKey' element={<ApiKeys />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
      <Route path='/profile/balance' element={<Balance />}></Route>
      
      <Route path='/rates' element={<Rates />}></Route>
      <Route path='/docs' element={<Docs />}></Route>
      <Route path='/auth/login' element={<Login />}></Route>

      <Route path='/admin/users' element={<Users />}></Route>

      <Route path='/' element={<Users />}></Route>

    </Routes>
  )
}

export default App
