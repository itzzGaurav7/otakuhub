import React from 'react'
import { useState } from 'react'
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery

} from '@mui/material'
import { Search, Message, DarkMode, LightMode, Notifications, Help, Menu, Close, NavigationRounded } from "@mui/icons-material";
import { useDispatch, useSelector } from 'react-redux';
import { setMode, setLogout } from '@state';
import FlexBetween from '@components/FlexBetween';
import { useNavigate } from 'react-router-dom';
import banner from '@components/assets/banner.jpeg'



//Main Navbar -- 
// Updation List
// Animated Logos.
// Fucntions Settings Buttons..

function Navbar() {
  

  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const user = useSelector((state => state.user));
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  const fullName =`${user.firstName} ${user.lastName}`;
  return (  
    
    <FlexBetween padding="1rem 6%" 
      backgroundColor={alt}
      borderRadius='0rem 0rem 1rem 1rem'
      
      
    >
      
        <Box
        
        m='1rem'
        sx={
          {
            display:'flex',
            justifyContent:"space-between",
            height:'4rem'


          }
        }
        >
            <img src='assets/logomain.png'
              width='100%'
              height='auto'
              />

        </Box>
        {/* DesktopNav */}
        {isNonMobileScreens && (
          <FlexBetween backgroundColor={neutralLight} borderRadius='9px' gap="10rem" padding="0.1rem 1.5rem">
            <InputBase placeholder='Explore' />
            <IconButton>
              <Search/>
            </IconButton>
          </FlexBetween>
        )}
        {isNonMobileScreens ? (
          <FlexBetween gap='2rem'>
            <IconButton onClick={() => dispatch(setMode())}>
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>  
              {/* <Message sx={{ fontSize: "25px" }} />
              <Notifications sx={{ fontSize: "25px" }} />
              <Help sx={{ fontSize: "25px" }} /> */}
              <FormControl variant='standard' value={fullName}>
                <Select
                value={fullName}
                sx={{
                  backgroundColor: neutralLight,
                  width: "200px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                


                <MenuItem value={fullName}><Typography>{fullName}</Typography></MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Log Out
                </MenuItem>
              </Select>
            </FormControl>
          
          </FlexBetween>
      ):(
        <IconButton
        onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
      >
        <Menu />
      </IconButton>
      )
            }

            {/* MobileView */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box 
          position="fixed"
          right='0'
          bottom='0'
          height='100%'
          zIndex="10"
          maxWidth='500px'
          minWidth='300px'
          backgroundColor={background}
        > 
          <Box display='flex' justifyContent='flex-end' p='1rem'>
            <IconButton onClick={()=> setIsMobileMenuToggled(!isMobileMenuToggled)}>
              <Close/>
            </IconButton>
          </Box>
          <FlexBetween display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='3rem'>
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
          {/* <Message sx={{ fontSize: "25px" }} />
          <Notifications sx={{ fontSize: "25px" }} />
          <Help sx={{ fontSize: "25px" }} /> */}
          <FormControl variant="standard" value={fullName}>
            <Select
              value={fullName}
              sx={{
                backgroundColor: neutralLight,
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
            >
              
              <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Log Out
                </MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>

        </Box>

      )}
      
        
    
      </FlexBetween >
  
  )
}

export default Navbar