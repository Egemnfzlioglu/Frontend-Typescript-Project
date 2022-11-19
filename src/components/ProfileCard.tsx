import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Delete, Edit } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Box, Chip } from '@mui/material';
import moment from 'moment';
import { TypographyLink } from '../StyledComponentItem/StyledItem';


const ProfileCard: React.FC<ProfileCardProps> = ({ userPost, handleDelete }) => {




    return (
        <>
            <Paper
                elevation={12}
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
                    <Box>
                        <CardActions disableSpacing
                            sx={{
                                margin: "-0.5rem auto"
                            }}
                        >
                            <IconButton aria-label="delete"
                                onClick={() => handleDelete(userPost._id)}
                            >
                                <Delete />
                            </IconButton>

                            <Typography variant="overline" color="text.secondary"
                                sx={{
                                    textAlign: "center",
                                    fontSize: "0.8rem",
                                    flexGrow: 1,
                                }}
                            >{`${userPost?.likeCount} person liked`}</Typography>

                            <Link to={`/profile/edit/${userPost._id}`}>

                                <IconButton aria-label="edit">
                                    <Edit />
                                </IconButton>
                            </Link>

                        </CardActions>

                    </Box>
                    {/*  */}
                    <CardMedia
                        component="img"
                        image={`${userPost?.imageFile
                            ? userPost?.imageFile
                            : "https://nebosan.com.tr/wp-content/uploads/2018/06/no-image.jpg"}`}
                        sx={{
                            maxWidth: "100%",
                            height: "240px",
                            margin: "1% auto",
                            objectFit: "contain",
                            borderRadius: "0.75rem",
                        }}
                        alt={`${userPost?.title}`}
                    />
                    {/*  */}
                    <CardActions disableSpacing
                        sx={{
                            margin: "-0.5rem 5% -1rem 5%",
                        }}
                    >
                        <Typography
                            variant="overline"
                            color="text.secondary"
                            sx={{
                                textTransform: "capitalize",
                                fontSize: "1rem",
                                margin: "2% auto",
                                fontweight: "bold",
                            }}>
                            {moment(`${userPost?.createdAt}`).fromNow()}
                        </Typography >

                        {/* <IconButton aria-label="like">
                            <FavoriteIcon />
                        </IconButton> */}

                    </CardActions>

                    {userPost?.tags && userPost?.tags.map((tag, i) => (

                        <Typography key={i} variant="overline" color="text.secondary"
                            sx={{ margin: "auto 0.5%" }}
                        >
                            <Chip label={`#${tag}`} />
                        </Typography>
                    ))}

                    {/*  */}
                    <CardContent
                        sx={{
                            height: "25vh",
                            margin: "1%",
                        }}
                    >
                        {
                            userPost?.title?.length > 30 ? (

                                <Typography variant="h6" color="text.secondary"
                                    sx={{
                                        textTransform: "capitalize",
                                        textAlign: "center",
                                        margin: "-1rem 1rem 0.5rem ",
                                        borderBottom: "1px solid #ddd",
                                    }}>
                                    {userPost?.title.slice(0, 30)} {" "}<span> ...</span>
                                </Typography>
                            ) : (
                                <Typography variant="h6" color="text.secondary"
                                    sx={{
                                        textTransform: "capitalize",
                                        textAlign: "center",
                                        margin: "-1rem 1rem 0.5rem ",
                                        borderBottom: "1px solid #ddd",
                                    }}>
                                    {userPost?.title}
                                </Typography>
                            )
                        }
                        {
                            userPost?.description?.length > 100 ? (
                                <Typography variant="body1" color="text.secondary">
                                    {`${userPost?.description.slice(0, 100)}`}
                                    <TypographyLink to={`/post/${userPost?._id}`}
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
                                    {userPost?.description}
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

export default ProfileCard



/*
<Paper elevation={12}
sx={{
    margin: "1rem",
    borderRadius: ".75rem",
}}>
<Card sx={{
    maxWidth: {
        xs: 345, md: 500
    },
    borderRadius: ".75rem",
}}>
    <Typography variant="subtitle1" color="text.secondary"
        sx={{
            textAlign: "center",
        }}
    >
        September 14, 2016
    </Typography>
    <CardMedia
        component="img"
        height="auto"
        image={`${userPost.imageFile}`}
        sx={{
            padding: "0.5rem",
            width: "100%",
            objectFit: "contain"

        }}
        alt={`${userPost.title}`}
    />
    <CardActions disableSpacing
        sx={{
            margin: "-0.5rem auto"
        }}
    >
        <IconButton aria-label="share"
            onClick={() => window.confirm("Emin Misin?")}
        >
            <Delete />
        </IconButton>

        <Typography variant="overline" color="text.secondary"
            sx={{
                textAlign: "center",
                fontSize: "0.8rem",
                flexGrow: 1,

            }}
        >{`${userPost.likeCount}`}</Typography>

        <Link to={`/profile/edit/${userPost._id}`}>

            <IconButton aria-label="edit">
                <Edit />
            </IconButton>
        </Link>

    </CardActions>
    <CardContent>
        <Typography variant="body2" color="text.secondary">
            {`${userPost.description}`}
        </Typography>
    </CardContent>
</Card >
</Paper> */
