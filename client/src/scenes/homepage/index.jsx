import React from 'react'
import { Box, useMediaQuery } from '@mui/material'
import Navbar from '@scenes/navbar'
import { useSelector } from 'react-redux';
import UserWidget from '@scenes/widgets/UserWidget';
import MyPostWidget from '@scenes/widgets/MyPostWidget'
import PostsWidget from '@scenes/widgets/PostsWidget';
import FriendListWidget from '@scenes/widgets/FriendListWidget';
import AdvertWidget from '@scenes/widgets/AdvertWidget';
import Footer from '@scenes/footer';
function HomePage() {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const {_id,picturePath} = useSelector((state)=>state.user);
  return (
    <Box>
      <Navbar/>
      <Box
      width='100%'
      padding='1rem 4%'
      display={isNonMobileScreens?"flex":"block"}
      gap='1rem'
      justifyContent='space-between'
      >
        <Box>

          <UserWidget userId={_id} picturePath={picturePath} />
          <Box m='1.5rem 0'>
          <Footer/>
          </Box>
          

        </Box>
        <Box
        
            
          >

          <MyPostWidget picturePath={picturePath}/>
          <PostsWidget userId={_id}/>

        </Box> 
        
        {isNonMobileScreens && (
          <Box>
            
            <AdvertWidget/>
            <Box m="1.5rem 0" />
            <FriendListWidget userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default HomePage