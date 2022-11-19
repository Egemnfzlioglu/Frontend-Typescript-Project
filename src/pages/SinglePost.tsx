import React, { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {
    Typographies,
    PageContainer,
    FormHeader,
    PaperContainer,
    ProfilePage
} from '../StyledComponentItem/StyledItem';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { getPost } from '../features/createThunk/postResponseThunk';
import Typography from '@mui/material/Typography';
import { Chip, ListItem } from '@mui/material';
import LoadingSpinner from '../components/LoadingSpinner';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';




const SinglePost = () => {

    const dispatch = useAppDispatch()
    const { id } = useParams()
    const { post } = useAppSelector(state => state.post)
    const { user } = useAppSelector(state => state.auth)


    useEffect(() => {
        if (id) {
            dispatch(getPost(id))
        }

    }, [id, dispatch])

    console.log(id)
    console.log(post)
    console.log(user)
    return (
        <>
            <PageContainer>
                <CssBaseline />
                <ProfilePage>
                    {
                        post?._id && post?._id ? (
                            <PaperContainer elevation={6}>
                                <FormHeader>
                                    <Typographies variant="h4"
                                        sx={{ textTransform: "capitalize" }}
                                    >{post?.title}</Typographies>
                                </FormHeader>

                                <Grid container spacing={1}
                                    sx={{
                                        width: "100%",
                                    }}
                                >
                                    <Grid item xs={12} sm={5}>
                                        <CardMedia
                                            component="img"
                                            height="auto"
                                            image={`${post?.imageFile}`}
                                            sx={{
                                                width: "100%",
                                                padding: "1rem",
                                                borderRadius: "4rem",
                                            }}
                                            alt={`${post?.title}`}
                                        />
                                        {
                                            user &&
                                            <Typographies variant="body1" color="text.secondary"
                                                sx={{
                                                    textTransform: "capitalize",
                                                    padding: "1rem",

                                                }}>
                                                created = {user?.result.name}</Typographies>}
                                        <Typographies variant="body1" color="text.secondary"
                                            sx={{
                                                textTransform: "capitalize",
                                                padding: "1rem",
                                            }}>
                                            {moment(`${post?.createdAt}`).fromNow()}

                                        </Typographies>
                                        {/* <Typographies variant="body1" color="text.secondary"
                                        >email:{user?.result?.email}</Typographies>
                                        <Typographies variant="body1" color="text.secondary"
                                        >{user?.result?.name}</Typographies> */}


                                        <Box
                                            sx={{
                                                display: 'flex',
                                                margin: "auto"
                                            }}
                                        >
                                            {post.tags.map((tag, key) => (
                                                <ListItem key={key}
                                                    sx={{
                                                        margin: "auto"
                                                    }}>
                                                    <Chip
                                                        label={`#${tag}`}
                                                    />
                                                </ListItem>
                                            )
                                            )}
                                        </Box>
                                    </Grid>
                                    <Grid item md={7}>
                                        <Grid container spacing={2}
                                            sx={{
                                                width: "95%",
                                                margin: "1% auto",
                                            }}
                                        >
                                            <Typography variant="body2" color="text.secondary"
                                                sx={{
                                                    textTransform: "capitalize",
                                                }}>
                                                {post?.description}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </PaperContainer>
                        ) : (
                            <PaperContainer>
                                <LoadingSpinner />
                            </PaperContainer>
                        )
                    }
                </ProfilePage>
            </PageContainer>
        </>
    )
}

export default SinglePost
