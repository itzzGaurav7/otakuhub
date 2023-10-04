import React from 'react'
import {Box,Typography,useTheme,useMediaQuery} from '@mui/material'
function LoginPage() {
  const theme = useTheme();
  return (
    <Box width='100%' backgroundColor={theme.palette.background.alt} p='1rem 6%'>
      <Typography
      fontWeight='bold'
      fontSize='32px'
      color='primary'
      >
        OtakuHub
      </Typography>
    </Box>
  )
}

export default LoginPage