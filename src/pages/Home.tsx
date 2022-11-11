import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Cards from '../components/Cards';
import { Grid } from '@mui/material';
import {
    PaperContainer,
    PageContainer,
    ProfilePage,
} from '../StyledComponentItem/StyledItem';
import HomeHeader from '../components/HomeHeader';




const Home = () => {
    return (
        <>

            <HomeHeader />
            <PageContainer>
                <CssBaseline />

                <ProfilePage>
                    <PaperContainer elevation={6}>
                        {/* <FormHeader>
                        </FormHeader> */}

                        <Box
                            sx={{
                                width: "100% ",
                                display: "flex",
                                padding: "2% ",
                                flexWrap: "wrap",
                                justifyContent: "space-between",
                            }}
                        >

                            {
                                Array(5).fill("abc").map((a, i) => (
                                    <Grid key={i} item
                                        md={4}
                                        sm={6}
                                        xs={12}
                                    >
                                        <Cards i={i} a={a} />
                                    </Grid>
                                ))
                            }

                        </Box>
                    </PaperContainer>
                </ProfilePage>
            </PageContainer>

        </>
    );
}

export default Home

