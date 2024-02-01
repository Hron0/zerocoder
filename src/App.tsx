import { Routes, Route } from 'react-router';
import ApiKeys from './pages/ApiKeys';
function App() {

  return (
    <Routes>
      <Route path='/apiKey' element={<ApiKeys />}></Route>
    </Routes>
  )
}

export default App
