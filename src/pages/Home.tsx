import React, { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Cards from '../components/Cards';
import { Grid } from '@mui/material';
import {
    HomePaperContainer,
    PageContainer,
    ProfilePage,
    Typographies,
} from '../StyledComponentItem/StyledItem';
import HomeHeader from '../components/HomeHeader';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getPosts } from '../features/createThunk/postResponseThunk';
import Loading from '../components/Loading';

const Home = () => {
    const dispatch = useAppDispatch()
    const { posts, status, } = useAppSelector(state => state.post)

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (
        <>
            <HomeHeader />
            <CssBaseline />
            {
                status === "loading"
                    ? <Loading />
                    : <PageContainer>
                        <ProfilePage>
                            <HomePaperContainer elevation={6}>
                                <Grid container spacing={1}
                                    sx={{
                                        width: "100%",
                                    }}
                                >
                                    <Grid item md={12}>
                                        <Grid container spacing={2}
                                            sx={{
                                                width: "100%",
                                                height: "auto",
                                                margin: "auto",
                                            }}
                                        >
                                            {
                                                posts && posts.length > 0
                                                    ? posts.map((post) => (
                                                        (
                                                            <Grid key={post._id} item
                                                                md={6}
                                                                sm={6}
                                                                xs={12}
                                                                sx={{
                                                                    width: "240px",
                                                                    height: "100%",
                                                                }}
                                                            >
                                                                <Cards post={post} />
                                                            </Grid>
                                                        )
                                                    ))
                                                    : (
                                                        <Typographies
                                                            variant="h4"
                                                            color="text.secondary"
                                                        >POST YOK</Typographies>
                                                    )
                                            }
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </HomePaperContainer>
                        </ProfilePage>
                    </PageContainer>
            }
        </>
    );
}

export default Home

