import React from 'react'
import { EditOutlined, DeleteOutlined, AttachFileOutlined, CardGiftcard, ImageOutlined, MicOutlined, MoreHorizOutlined } from '@mui/icons-material'
import { Box, Divider, Typography, InputBase, useTheme, Button, IconButton, useMediaQuery } from '@mui/material'

import FlexBetween from '@components/FlexBetween'
import Dropzone from 'react-dropzone'
import UserImage from '@components/UserImage'
import WidgetWrapper from '@components/WidgetWrapper'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPosts } from '@state'
function MyPostWidget({picturePath}) {
    

    const dispatch = useDispatch();
    const [isImage, setIsImage] = useState(false);
    const [image, setImage] = useState(null);
    const [post, setPost] = useState("");
    const { palette } = useTheme();
    const { _id } = useSelector((state) => state.user);
    const name = useSelector((state) => state.user.firstName);
    const token = useSelector((state) => state.token);
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const mediumMain = palette.neutral.mediumMain;
    const medium = palette.neutral.medium;

    const handlePost = async () => {
        const formData = new FormData();
        formData.append("userId", _id);
        formData.append("description", post);
        if (image) {
            formData.append("picture", image);
            formData.append("picturePath", image.name);

        }
        const response = await fetch(`http://localhost:6001/posts`, {
            method: "POST",
            headers: { "Authorization": `Bearer ${token}` },
            body: formData,

        })
        const posts = await response.json();
        dispatch(setPosts({ posts }));
        setImage(null);
        setPost("");
    };

    return (
        <WidgetWrapper>
            <FlexBetween gap='1.5rem'>
                <UserImage image={picturePath} name={name} />
                <InputBase
                    placeholder='Tell us about the anime you watched last night being sleep deprived...'
                    onChange={(e) => setPost(e.target.value)}
                    value={post}
                    sx={{
                        width: '100%',
                        backgroundColor: palette.neutral.light,
                        borderRadius: '2rem',
                        padding: '1rem 2rem'

                    }}
                />
            </FlexBetween>
            

                {isImage && (
                    <Box
                        borderRadius='5px'
                        border={`1px solid ${medium}`}
                        mt='1rem'
                        p='2rem'
                    >
                        <Dropzone
                            acceptedFiles=".jpg .jpeg .png"
                            multiple={false}
                            onDrop={(acceptedFiles) =>
                                setImage(acceptedFiles[0])}

                        >
                            {({
                                getRootProps, getInputProps
                            }) => (
                                <FlexBetween>
                                    <Box
                                        {...getRootProps()}
                                        border={`2px dashed ${palette.primary.main}`}
                                        p='1rem'
                                        width='100px'
                                        sx={{ "&:hover": { cursor: "pointer" } }}
                                    >
                                        <input {...getInputProps()} />
                                        {!image ? (
                                            <p>Add Picture</p>
                                        ) : (
                                            <FlexBetween>
                                                <Typography>{Image.name}</Typography>
                                                <EditOutlined />
                                            </FlexBetween>
                                        )}

                                    </Box>
                                    {
                                        image && (
                                            <IconButton onClick={() => setIsImage(null)}
                                                sx={{ width: '15%' }}
                                            >
                                                <DeleteOutlined />

                                            </IconButton>

                                        )
                                    }
                                </FlexBetween>
                            )}
                        </Dropzone>

                    </Box>
                )}
                <Divider sx={{ margin: '1.25rem 0' }} />
                <FlexBetween gap='5rem'>
                <FlexBetween gap='0.25rem' onClick={() => setIsImage(!isImage)}>
                    <ImageOutlined sx={{ color: mediumMain }} />
                    <Typography
                        color={mediumMain}
                        sx={{
                            "&:hover": {
                                cursor: 'pointer',
                                color: medium
                            }
                        }}
                    >Image

                    </Typography>

                </FlexBetween>
                {isNonMobileScreens ? (
                    <>
                        <FlexBetween gap='0.25rem'>
                            <CardGiftcard />
                            <Typography color={mediumMain}> Clip </Typography>


                        </FlexBetween>
                        <FlexBetween gap='0.25rem'>
                            <AttachFileOutlined/>
                            <Typography color={mediumMain}> Attachment </Typography>


                        </FlexBetween>
                        <FlexBetween gap='0.25rem'>
                            <MicOutlined />
                            <Typography color={mediumMain}> Audio </Typography>


                        </FlexBetween>
                    </>
                ) : (
                    <FlexBetween gap='0.25rem'>
                        <MoreHorizOutlined sx={{ color: medium }} />


                    </FlexBetween>
                )}
                <Button
                    disabled={!post}
                    onClick={handlePost}
                    sx={{
                        color:palette.background.alt,
                        backgroundColor: palette.primary.main,
                        borderRadius: "3rem",



                    }}>
                    POST
                
                </Button>
            </FlexBetween>
        </WidgetWrapper>

    )
}

export default MyPostWidget;