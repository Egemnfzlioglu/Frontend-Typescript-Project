import React, { useEffect } from 'react';
import { CardMedia, Grid, } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { PageContainer, PaperContainer, ProfilePage } from '../StyledComponentItem/StyledItem';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getPosts } from '../features/createThunk/postResponseThunk';
import Loading from '../components/Loading';

const HomeHeader = () => {
    const dispatch = useAppDispatch()
    const { posts, status } = useAppSelector(state => state.post)

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (
        <>
            {
                status === "loading"
                    ? <Loading />
                    : (
                        <PageContainer>
                            <CssBaseline />
                            <ProfilePage>
                                <PaperContainer elevation={6}>
                                    <Grid item md={12} >
                                        <Grid container spacing={1}
                                            sx={{
                                                width: "100%",
                                                margin: " 0",
                                                display: "flex",
                                            }}
                                        >
                                            {
                                                posts.length > 0 ? posts.slice(0, 4).map(post =>
                                                (
                                                    <Grid key={post._id} item
                                                        md={3}
                                                        sm={4}
                                                        xs={6}
                                                        sx={{
                                                            width: 300,
                                                            height: 240,
                                                            padding: "0.5rem",
                                                        }}
                                                    >
                                                        <CardMedia
                                                            component="img"
                                                            height="100%"
                                                            image={`${post?.imageFile
                                                                ? post?.imageFile
                                                                : "https://nebosan.com.tr/wp-content/uploads/2018/06/no-image.jpg"}`}
                                                            sx={{
                                                                width: "100%",
                                                                padding: "0.5rem",
                                                                margin: "0.25rem auto",
                                                                borderRadius: "2rem",
                                                                border: "1px solid #ddd",
                                                                objectFit: "contain",
                                                            }}
                                                            alt="Paella dish"
                                                        />
                                                    </Grid>
                                                )) : (
                                                    Array(3).fill("abc").map((a, i) => (
                                                        <Grid key={i} item
                                                            md={4}
                                                            sm={6}
                                                            xs={12}
                                                        >
                                                            <CardMedia
                                                                component="img"
                                                                image={"https://nebosan.com.tr/wp-content/uploads/2018/06/no-image.jpg"}
                                                                sx={{
                                                                    maxWidth: {
                                                                        xs: 345, md: 500
                                                                    },
                                                                    maxHeight: {
                                                                        xs: 345, md: 500
                                                                    },
                                                                    padding: "1rem",
                                                                    borderRadius: "2rem"
                                                                }}
                                                                alt="Paella dish"
                                                            />
                                                        </Grid>
                                                    ))
                                                )
                                            }
                                        </Grid>
                                    </Grid>
                                </PaperContainer>
                            </ProfilePage>
                        </PageContainer>
                    )
            }
        </>
    )
}

export default HomeHeader
