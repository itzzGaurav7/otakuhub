import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from "@scenes/homepage";
import ProfilePage from '@scenes/profilepage';
import LoginPage from '@scenes/loginpage';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useMemo } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';
import Tnc from '@scenes/landing/Components/Tnc'
import Privacypolicy from '@scenes/landing/Components/privacypolicy'
import Landing from '@scenes/landing';


function App() {

  const mode = useSelector((state)=> state.mode);
  const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode]);
  const isAuth = Boolean(useSelector((state)=>state.token));

  return(
    <div
    >
      
      <BrowserRouter>
        <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/home' element={isAuth?<HomePage/>:<Navigate to='/'/>}/>
          <Route path='/profile/:userId' element={isAuth?<ProfilePage/>:<Navigate to="/"/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<LoginPage/>}/>
          <Route path='/tnc' element={<Tnc/>}/>
          <Route path='/privacypolicy' element={<Privacypolicy/>}/>
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
