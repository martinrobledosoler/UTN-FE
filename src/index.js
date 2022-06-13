import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './auth/login';
import { Register } from './auth/register';
import { ResetPassword } from './auth/resetPassword';
//import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { App } from './app/app';
import { Home } from './app/home';
import { Stadistics } from './app/stadistics';
import { Profile } from './app/profile'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/resetpassword' element={<ResetPassword/>}/>

      <Route path='/home' element={<Home/>}/>
      <Route path='/stadistics' element={<Stadistics/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/' element={<App/>}/>
    </Routes>
  </BrowserRouter>

  );

reportWebVitals();
