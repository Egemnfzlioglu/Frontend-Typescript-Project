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
import ProfileCard from '../components/ProfileCard';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { getPostsByUser, deletePost } from '../features/createThunk/postResponseThunk';
import { TypographyLink } from '../StyledComponentItem/StyledItem';

const Profile = () => {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector(state => state.auth)
    const { userPosts, } = useAppSelector(state => state.post)
    const userId = user?.result?._id

    useEffect(() => {
        if (userId) {
            dispatch(getPostsByUser(userId))
        }
    }, [userId, dispatch])

    const handleDelete = (id: string) => {
        if (window.confirm("Are You Sure You Want To Delete")) {
            dispatch(deletePost(id))
        }
    }

    return (
        <>
            <PageContainer>
                <CssBaseline />
                <ProfilePage>
                    {
                        userId && userPosts ? (
                            <PaperContainer elevation={6}>
                                <FormHeader>
                                    <Typographies variant="h4"
                                    >Profile</Typographies>
                                </FormHeader>
                                <Grid container spacing={1}
                                    sx={{
                                        width: "100%",
                                    }}
                                >
                                    <Grid item xs={12} sm={3}>
                                        <CardMedia
                                            component="img"
                                            height="auto"
                                            image="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
                                            sx={{
                                                width: "100%",
                                                padding: "1rem",
                                                borderRadius: "4rem",
                                            }}
                                            alt="Paella dish"
                                        />
                                        <Typographies variant="body1" color="text.secondary"
                                        >Name :{user?.result?.name}</Typographies>
                                        <Typographies variant="body1" color="text.secondary"
                                        >email:{user?.result?.email}</Typographies>
                                        <Typographies variant="body1" color="text.secondary"
                                        >{user?.result?.name}</Typographies>
                                    </Grid>
                                    <Grid item md={9}>
                                        {
                                            userPosts.length > 0 ? (
                                                <Grid container spacing={2}
                                                    sx={{
                                                        width: "100%",
                                                        margin: "auto",
                                                    }}
                                                >
                                                    {
                                                        userPosts.map((userPost) => (
                                                            <Grid key={userPost._id} item
                                                                sm={6}
                                                                xs={12}
                                                            >
                                                                <ProfileCard
                                                                    userPost={userPost}
                                                                    handleDelete={handleDelete}
                                                                />
                                                            </Grid>
                                                        ))
                                                    }
                                                </Grid>
                                            ) : (
                                                <PaperContainer>
                                                    <Typographies
                                                        variant="h3"
                                                        color="text.secondary"
                                                    >Post Not Found!..
                                                        <TypographyLink
                                                            to="/profile/add"
                                                            color="text.secondary"
                                                            sx={{
                                                                textAlign: "center",
                                                                marginTop: "1rem",
                                                                backgroundColor: "#ddd",
                                                                padding: "0.5rem 0",
                                                                borderRadius: "15%",
                                                            }}
                                                        >
                                                            ADD POST
                                                        </TypographyLink>
                                                    </Typographies>
                                                </PaperContainer>
                                            )
                                        }
                                    </Grid>
                                </Grid>
                            </PaperContainer>
                        ) : (
                            <PaperContainer>
                                <Typographies variant="h3" color="text.secondary"
                                >Login Not Found!..</Typographies>
                                <Typographies variant="h5" color="text.secondary"
                                >Please Try Again</Typographies>
                            </PaperContainer>
                        )
                    }
                </ProfilePage>
            </PageContainer>
        </>
    )
}

export default Profile
