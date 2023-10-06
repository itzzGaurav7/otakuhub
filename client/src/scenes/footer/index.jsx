import React from 'react'

import {Box, Typography,Divider,useTheme} from '@mui/material'
import FlexBetween from '@components/FlexBetween'
import WidgetWrapper from '@components/WidgetWrapper'

function Footer({userId, picturePath}) {
    const {palette} = useTheme();
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;
    return(
        
        <WidgetWrapper>
            <FlexBetween
            gap = "0.5rem"
            p="1rem">
            
                <FlexBetween gap='1rem'>
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
                            Made with ♡ <br/> Gaurav Upadhyay
                            

                        </Typography>
                        <Typography
                        color={medium}>
                            ©2023

                        </Typography>
                        
                    </Box>
                </FlexBetween>
                
            </FlexBetween>

        </WidgetWrapper>

    )
}

export default Footer;