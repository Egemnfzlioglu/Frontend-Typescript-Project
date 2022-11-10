import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper/Paper';
import { Link } from 'react-router-dom';



const ProfileCard = () => {
    return (
        <>
            <Paper elevation={3}
                sx={{
                    borderRadius: ".75rem"
                }}>
                <Card sx={{
                    maxWidth: {
                        xs: 345, md: 500
                    },
                    borderRadius: ".75rem"
                }}>
                    <CardMedia
                        component="img"
                        height="auto"
                        image="https://mymodernmet.com/wp/wp-content/uploads/2019/07/will-burrard-lucas-beetlecam-23.jpg"
                        alt="Paella dish"
                        sx={{
                            padding: ".5rem",
                        }}
                    />
                    {/*  */}
                    <CardActions disableSpacing
                        sx={{
                            margin: "-1rem 0",
                        }}
                    >
                        <IconButton aria-label="add to favorites" >
                            <Delete />
                        </IconButton>
                        <Link to={`/edit`}
                            style={{
                                marginLeft: "auto"
                            }}>
                            <IconButton aria-label="share"
                            >
                                <Edit />
                            </IconButton>
                        </Link>

                    </CardActions>
                    {/*  */}
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook...
                        </Typography>
                    </CardContent>
                    {/*  */}

                </Card >
            </Paper>
        </>
    );
}

export default ProfileCard
