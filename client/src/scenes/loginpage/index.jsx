import React from 'react'
import {Box,Typography,useTheme,useMediaQuery} from '@mui/material'
import Form from "./form"
function LoginPage() {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  return (
    <Box>
    <Box width='100%' backgroundColor={theme.palette.background.alt} p='1rem 6%'>
      <Box
        
        m='1rem'
        sx={
          {
            display:'flex',
            alignContent:'center',
            justifyContent:'center',
            height:'4rem'


          }
        }
        >
            <img src='assets/logomain.png'
              
              height='auto'
              />

        </Box>
    </Box>
    <Box
    width={isNonMobileScreens?'50%':'93%'}
    p='2rem'
    m='2rem auto'
    borderRadius={theme.palette.background.alt}
    > 
      <Typography fontWeight='500' variant='h5' sx={{mb: "1.5rem"}}>
            OtakuSensei is here to Welcome you! Kneel My Pupil I shall enter you now.
      </Typography>
      <Form/>


    </Box>
    </Box>
  )
}

export default LoginPage