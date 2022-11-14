import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { TypographyLink } from '../StyledComponentItem/StyledItem';


const Cards: React.FC<CardPost> = ({ post }) => {
    return (
        <>
            <Paper elevation={12}
                sx={{
                    margin: " auto",
                    borderRadius: ".75rem",

                }}>
                <Card sx={{
                    maxWidth: {
                        xs: 300, md: 500
                    },
                    borderRadius: ".75rem",
                    margin: "0 auto",

                }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                {post?.name}
                            </Avatar>
                        }
                        title={post?.name}
                        subheader={post?.createdAt}
                    />
                    {/*  */}
                    <CardMedia
                        component="img"
                        image={`${post?.imageFile
                            ? post?.imageFile
                            : "https://nebosan.com.tr/wp-content/uploads/2018/06/no-image.jpg"}`}
                        sx={{
                            padding: " 0 0.5rem",
                            maxWidth: {
                                xs: 250, md: 350
                            },
                            height: "250px",
                            margin: "auto",
                            objectFit: "contain",
                            border: "1px solid #ddd",
                            borderRadius: "0.75rem",

                        }}
                        alt={post?.name}
                    />
                    {/*  */}
                    <CardActions disableSpacing
                        sx={{
                            margin: "-0.5rem auto -1rem auto",
                        }}
                    >
                        <Typography variant="overline" color="text.secondary"
                            sx={{
                                marginLeft: "auto"
                            }}
                        >{`${post?.likeCount} person liked`}</Typography>
                        <IconButton aria-label="like">
                            <FavoriteIcon />
                        </IconButton>
                    </CardActions>
                    {/*  */}
                    <CardContent
                        sx={{
                            height: "25vh",

                        }}
                    >
                        {
                            post?.title?.length > 25 ? (
                                <TypographyLink to={`/post/${post?.title.replaceAll(" ", "-")}`}
                                    sx={{
                                        borderBottom: "1px solid #333",
                                        margin: "1rem",
                                    }}>
                                    <Typography variant="h6" color="text.secondary"
                                        sx={{
                                            textTransform: "capitalize",
                                            textAlign: "center",
                                            margin: "-1rem 1rem 0.5rem ",
                                            borderBottom: "1px solid #ddd",
                                        }}>
                                        {post?.title.slice(0, 25)} {" "}<span> ...</span>
                                    </Typography>
                                </TypographyLink>
                            ) : (
                                <Typography variant="h6" color="text.secondary"
                                    sx={{
                                        textTransform: "capitalize",
                                        textAlign: "center",
                                        margin: "-1rem 1rem 0.5rem ",
                                        borderBottom: "1px solid #ddd",
                                    }}>
                                    {post?.title}
                                </Typography>
                            )
                        }
                        {
                            post?.description?.length > 140 ? (
                                <Typography variant="body1" color="text.secondary">
                                    {`${post?.description.slice(0, 110)}`}
                                    <TypographyLink to={`/post/${post?.title?.replaceAll(" ", "-")}`}
                                        sx={{
                                            borderBottom: "1px solid #333",
                                            margin: "1rem",
                                        }}>
                                        See more...
                                    </TypographyLink>
                                </Typography>
                            ) : (
                                <Typography variant="body2" color="text.secondary">
                                    {post?.description}
                                </Typography>
                            )
                        }
                    </CardContent>
                    {/*  */}
                </Card >
            </Paper>
        </>
    );
}

export default Cards
