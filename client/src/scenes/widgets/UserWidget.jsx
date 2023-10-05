import React from 'react'

import { ManageAccountsOutlined,EditOutlined,LocationOnOutlined,WorkOutlineOutlined } from '@mui/icons-material'
import {Box, Typography,Divider,useTheme} from '@mui/material'
import UserImage from '@components/UserImage'
import FlexBetween from '@components/FlexBetween'
import WidgetWrapper from '@components/WidgetWrapper'
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
        
        <WidgetWrapper>
            <FlexBetween
            gap = "0.5rem"
            pb="1.1rem"
        
            onClick={()=>navigate(`/profile/${userId}`)}
            >
                <FlexBetween gap='1rem'>
                    <UserImage image={picturePath}/>
                    <Box>
                        <Typography
                        varient='h4'
                        color={dark}
                        fontWeight='500'
                        sx={{
                            "&:hover":{
                                color:palette.primary.light,
                                cursor:"pointer"
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
                    <Box display='flex' alignItems='center' gap='1rem' mb='0.5rem'
                    >
                        <LocationOnOutlined fontSize='large' sx={{
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
                        <Typography color={medium}> Who's viewed profile</Typography>
                        <Typography color={main}> {viewedProfile}</Typography>

                        
                    </FlexBetween>
                    <FlexBetween mb='0.5rem'>
                        <Typography color={medium}> Impressions</Typography>
                        <Typography color={main}> {impressions}</Typography>

                        
                    </FlexBetween>

                </Box>
                <Divider/>

                <Box p='1rem'>
                    <FlexBetween gap='1rem' mb='0.5rem'>
                        <Typography color={medium}>MyAnimeList</Typography>
                        <Typography color={main}> Instagram</Typography>

                    </FlexBetween>

                </Box>

        </WidgetWrapper>

    )
}

export default UserWidget;