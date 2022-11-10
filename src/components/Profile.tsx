import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {
    Typographies,
    PageContainer,
    FormHeader,
    PaperContainer,
} from '../StyledComponentItem/StyledItem';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import ProfileCard from './ProfileCard';


const Profile = () => {
    return (
        <>
            <PageContainer maxWidth="md">
                <CssBaseline />
                <PaperContainer elevation={6}>
                    <FormHeader>
                        <Typographies variant="h4">Profile</Typographies>
                    </FormHeader>
                    <Grid container spacing={1}
                        sx={{
                            width: "100%",
                        }}
                    >
                        <Grid item xs={3}>
                            <CardMedia
                                component="img"
                                image="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
                                sx={{
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: "2rem",
                                    padding: "1rem",
                                }}
                                alt="Paella dish"
                            />
                            <Typographies variant="body1" >Egemen Fazlıoğlu</Typographies>
                        </Grid>
                        <Grid item xs={9}>
                            <Grid container spacing={2}
                                sx={{
                                    width: "100%",
                                    marginBottom: "1rem",
                                    marginTop: "0.25rem",
                                }}
                            >
                                <Grid item xs={4}>
                                    <ProfileCard />
                                </Grid>
                                <Grid item xs={4}>
                                    <ProfileCard />
                                </Grid>
                                <Grid item xs={4}>
                                    <ProfileCard />
                                </Grid>
                                <Grid item xs={4}>
                                    <ProfileCard />
                                </Grid>
                                <Grid item xs={4}>
                                    <ProfileCard />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </PaperContainer>
            </PageContainer>
        </>
    )
}

export default Profile
