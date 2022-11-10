import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Cards from '../components/Cards';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';




const Home = () => {
    return (
        <>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                sx={{
                    width: "100% ",
                    margin: "5% auto 2% auto",
                    display: "flex",
                }}
            >
                <CssBaseline />
                <Box
                    sx={{
                        width: "90% ",
                        display: "flex",
                        margin: "2% auto 0 auto",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                    }}
                >
                    {
                        Array(3).fill("abc").map((a, i) => (
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
            </Stack>
        </>
    );
}

export default Home

