import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Paper from '@mui/material/Paper/Paper';



const Cards = () => {


    return (
        <>
            <Paper elevation={12}
                sx={{
                    margin: " 0 1rem 1rem 1rem",
                    borderRadius: ".75rem",
                }}>
                <Card sx={{
                    maxWidth: {
                        xs: 345, md: 500
                    },
                    borderRadius: ".75rem",
                }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                R
                            </Avatar>
                        }

                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    {/*  */}
                    <CardMedia
                        component="img"
                        height="auto"
                        image="https://mymodernmet.com/wp/wp-content/uploads/2019/07/will-burrard-lucas-beetlecam-23.jpg"
                        sx={{
                            padding: "1rem",
                            width: "100%",
                        }}
                        alt="Paella dish"
                    />
                    {/*  */}
                    <CardActions disableSpacing >
                        <IconButton aria-label="add to favorites" >
                            <FavoriteIcon />
                        </IconButton>
                        <Typography variant="body2" color="text.secondary">You and 23 person liked</Typography>
                        <IconButton aria-label="share" sx={{ marginLeft: "auto" }}>
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                    {/*  */}
                    <CardContent>
                        <Typography variant="body1" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                    {/*  */}
                </Card >
            </Paper>
        </>
    );
}

export default Cards
