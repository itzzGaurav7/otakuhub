import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "@scenes/homepage";
import Navbar from '@scenes/navbar';
import ProfilePage from '@scenes/profilepage';
import LoginPage from '@scenes/loginpage';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useMemo } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';

function App() {

  const mode = useSelector((state)=> state.mode);
  const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode]);

  return(
    <div>
      
      <BrowserRouter>
        <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
