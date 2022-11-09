import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Cards from './Cards';
import Stack from '@mui/material/Stack';

const Home = () => {
    return (
        <>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                sx={{ padding: "2rem", }}
            >
                <Box sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <CssBaseline />


                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />

                </Box>
            </Stack>
        </>
    );
}

export default Home

