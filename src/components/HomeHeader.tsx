import * as React from 'react';
import { CardMedia, Box, Grid, Card } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';





const HomeHeader = () => {
    return (
        <>
            <Box
                sx={{
                    padding: "5%  3% 0 3%",
                    width: "100% ",
                }}
            >
                <CssBaseline />
                <Box
                    sx={{
                        width: "100% ",
                        maxHeight: "50vh",
                        margin: "0 auto ",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                    }}
                >
                    <Card sx={{
                        width: "100% ",
                        borderRadius: "2rem",
                        display: "flex",
                    }}>
                        {
                            Array(3).fill("abc").map((a, i) => (
                                <Grid key={i} item
                                    md={4}
                                    sm={6}
                                    xs={12}
                                >
                                    <Box
                                        sx={{
                                            margin: "3%",
                                            borderRadius: ".75rem",
                                        }}>
                                        <CardMedia
                                            component="img"

                                            height="auto"
                                            image="https://mymodernmet.com/wp/wp-content/uploads/2019/07/will-burrard-lucas-beetlecam-23.jpg"
                                            sx={{
                                                maxWidth: {
                                                    xs: 345, md: 500
                                                },
                                                padding: "1rem",
                                                width: "100%",
                                                borderRadius: "2rem"
                                            }}
                                            alt="Paella dish"
                                        />
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Card>

                </Box>
            </Box>
        </>
    )
}

export default HomeHeader
