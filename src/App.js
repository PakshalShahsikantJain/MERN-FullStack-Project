import {Routes,Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Registration from './Components/Registration.js'
import UserInfo from './Components/Userinfo.js'
import Login from './Components/login.js'

function App() {
  return (
    <div>
      <Routes>
        <Route path = "/" element={<Login />}/>
        <Route path = "/register" element={<Registration />}/>
        <Route path = "/userinfo" element={<UserInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;
