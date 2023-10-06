import React from 'react'

import { ManageAccountsOutlined} from '@mui/icons-material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import {Box, Typography,Divider,useTheme} from '@mui/material'
import UserImage from '@components/UserImage'
import FlexBetween from '@components/FlexBetween'
import WidgetWrapper2 from '@components/WidgetWrapper2'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UserWidget({userId, picturePath}) {
    const [user, setUser] = useState(null);
    const {palette} = useTheme();
    const navigate = useNavigate();
    const token = useSelector((state)=>state.token);
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;
    
    const getUser = async()=>{
        const URL = `http://localhost:6001/users/${userId}`;
        const response = await fetch(URL,
        {           
            method:"GET",
            headers: { Authorization: `Bearer ${token}` },

        }
        );
        const data = await response.json();
        setUser(data);

    
    };
    useEffect(()=>{
        getUser();
    },[]);
    if(!user){
        return null;
    }
    const {
        firstName,
        lastName,
        location,
        occupation,
        viewedProfile,
        impressions,
        friends,    

    } = user;

    return(
        
        <WidgetWrapper2
           sx
        >
            <FlexBetween
            gap = "0.5rem"
            pb="1rem"
        
            onClick={()=>navigate(`/profile/${userId}`)}
            >
                <FlexBetween gap='0.5rem' sx={{
                    
                }}>
                    <UserImage image={picturePath} name={firstName}/>
                    <Box>
                        <Typography
                        varient='h4'
                        color={dark}
                        fontWeight='500'
                        sx={{
                            "&:hover":{
                                color:palette.primary.light,
                                cursor:"pointer",
                                
                            }
                        }}
                        >
                            {firstName} {lastName}

                        </Typography>
                        <Typography
                        color={medium}>
                            {friends.length} friends

                        </Typography>
                        
                    </Box>
                </FlexBetween>
                <ManageAccountsOutlined/>
            </FlexBetween>
                <Divider/>

                <Box p ='1rem'>
                    <Box display='flex' alignItems='center' gap='0.5rem' 
                    >
                        <FavoriteIcon fontSize='medium' sx={{
                            color:main
                        }}/>
                        <Typography>
                            {location}
                        </Typography>


                    </Box>
                </Box>
                <Divider/>
                <Box p='1rem 0'>
                    <FlexBetween mb='0.5rem'>
                        <Typography color={medium}>Watchlisted</Typography>
                        <Typography color={main}>10</Typography>

                        
                    </FlexBetween>
                    <FlexBetween mb='0.5rem'>
                        <Typography color={medium}>Watching</Typography>
                        <Typography color={main}>2</Typography>

                        
                    </FlexBetween>
                    <FlexBetween>
                        <Typography color={medium}> Completed</Typography>
                        <Typography color={main}> 19</Typography>

                        
                    </FlexBetween>

                </Box>
                <Divider/>

                <Box p='1rem'>
                    <FlexBetween gap='1rem' mb='0.5rem'>
                        <Typography color={medium}>MyAnimeList</Typography>
                        <Typography color={main}> Instagram</Typography>

                    </FlexBetween>

                </Box>

        </WidgetWrapper2>

    )
}

export default UserWidget;