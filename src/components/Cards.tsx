import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { TypographyLink } from '../StyledComponentItem/StyledItem';
import moment from 'moment';
import { Chip, Paper } from '@mui/material';


const Cards: React.FC<CardPost> = ({ post }) => {
    return (
        <>
            <Paper
                elevation={6}
                sx={{
                    borderRadius: ".75rem",
                    width: "100%"
                }}>
                <Card
                    sx={{
                        maxWidth: {
                            xs: 300, md: 500
                        },
                        borderRadius: ".75rem",
                        margin: "0 auto",

                    }}>
                    <CardHeader
                        avatar={
                            post?.imageFile ?
                                (
                                    <CardMedia
                                        component="img"
                                        image={`${post?.imageFile && post?.imageFile}`}
                                        sx={{
                                            width: "36px",
                                            height: "36px",
                                            margin: "auto",
                                            objectFit: "cover",
                                            borderRadius: "50%",

                                        }}
                                        alt={post?.name}
                                    />
                                ) : (
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        {post?.name.split("")[0].toLocaleUpperCase()}
                                    </Avatar>
                                )
                        }
                        title={post?.name}
                        subheader={moment(`${post?.createdAt}`).fromNow()}
                    />
                    {/*  */}
                    <CardMedia
                        component="img"
                        image={`${post?.imageFile
                            ? post?.imageFile
                            : "https://nebosan.com.tr/wp-content/uploads/2018/06/no-image.jpg"}`}
                        sx={{
                            maxWidth: "100%",
                            height: "240px",
                            margin: "1% auto",
                            objectFit: "contain",
                            borderRadius: "0.75rem",
                        }}
                        alt={post?.name}
                    />
                    {/*  */}
                    <CardActions disableSpacing
                        sx={{
                            margin: "-0.5rem 5% -1rem 5%",
                        }}
                    >

                        <Typography variant="overline" color="text.secondary"
                            sx={{
                                marginLeft: "auto"
                            }}
                        >
                            {`${post?.likeCount} person liked`}
                        </Typography>
                        <IconButton aria-label="like">
                            <FavoriteIcon />
                        </IconButton>
                    </CardActions>
                    {post?.tags.length >= 1 ? post?.tags.map((tag, i) => (

                        <Typography key={i} variant="overline" color="text.secondary"
                            sx={{ margin: "auto 0.75%" }}
                        >
                            <Chip label={`#${tag}`}
                                sx={{ margin: "auto 0.75%" }}
                            />
                        </Typography>
                    )
                    ) : (<Typography variant="overline" color="text.secondary"
                        sx={{ margin: "auto " }}
                    >
                        <Chip label={`#Tag None`} />
                    </Typography>)}


                    <CardContent
                        sx={{
                            height: "25vh",
                        }}
                    >
                        {
                            post?.title?.length > 40 ? (
                                <Typography variant="h6" color="text.secondary"
                                    sx={{
                                        textTransform: "capitalize",
                                        textAlign: "center",
                                        margin: "-1rem 1rem 0.5rem ",
                                        borderBottom: "1px solid #ddd",
                                    }}>
                                    {post?.title.slice(0, 40)} {" "}<span> ...</span>
                                </Typography>
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
                            post?.description?.length > 210 ? (
                                <Typography variant="body1" color="text.secondary">
                                    {`${post?.description.slice(0, 210)}`}
                                    <TypographyLink to={`/post/${post?._id}`}
                                        sx={{
                                            borderBottom: "1px solid #333",
                                            margin: "1rem",
                                        }}>
                                        <br />
                                        Read More...
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
