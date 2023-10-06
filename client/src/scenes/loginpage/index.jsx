import React from 'react'
import {Box,Typography,useTheme,useMediaQuery} from '@mui/material'
import Form from "./form"
function LoginPage(state='register') {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  return (
    <Box>
    <Box width='100%' backgroundColor={theme.palette.background.alt} p='1rem 6%'>
      <Typography
      fontWeight='bold'
      fontSize='32px'
      color='primary'
      >
        OtakuHub
      </Typography>
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
      <Form state={state}/>


    </Box>
    </Box>
  )
}

export default LoginPage