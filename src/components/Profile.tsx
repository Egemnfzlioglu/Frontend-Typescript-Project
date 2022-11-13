import React from 'react';
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
import ProfileCard from './ProfileCard';
import { useAppSelector } from '../app/hooks';


const Profile = () => {
    const { user } = useAppSelector(state => state.auth)
    return (
        <>
            <PageContainer
            >
                <CssBaseline />
                <ProfilePage>
                    {
                        user?.result?._id ? (
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
                                        <Grid container spacing={2}
                                            sx={{
                                                width: "100%",
                                                margin: "auto",
                                            }}
                                        >
                                            {
                                                Array(4).fill("abc").map((a, i) => (
                                                    <Grid key={i} item
                                                        md={4}
                                                        sm={6}
                                                        xs={12}
                                                    >
                                                        <ProfileCard i={i} a={a} />
                                                    </Grid>
                                                ))
                                            }
                                        </Grid>
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
