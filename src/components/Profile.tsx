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


const Profile = () => {
    return (
        <>
            <PageContainer
            >
                <CssBaseline />
                <ProfilePage>
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
                                <Typographies variant="body1" >Egemen Fazlıoğlu</Typographies>
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
                </ProfilePage>
            </PageContainer>
        </>
    )
}

export default Profile
