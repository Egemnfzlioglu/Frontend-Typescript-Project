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


type abc = {
    i: number;
    a: string
}

const ProfileCard: React.FC<abc> = ({ i, a }) => {
    return (
        <>
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
                    {/*  */}
                    <CardMedia
                        component="img"
                        height="auto"
                        image="https://mymodernmet.com/wp/wp-content/uploads/2019/07/will-burrard-lucas-beetlecam-23.jpg"
                        sx={{
                            padding: "0.5rem",
                            width: "100%",
                            objectFit: "contain"

                        }}
                        alt="Paella dish"
                    />
                    {/*  */}
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
                        >23 person liked</Typography>

                        <Link to={`/profile/edit/${i}`}>

                            <IconButton aria-label="edit">
                                <Edit />
                            </IconButton>
                        </Link>

                    </CardActions>
                    {/*  */}
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests...
                        </Typography>
                    </CardContent>
                    {/*  */}
                </Card >
            </Paper>
        </>
    );
}

export default ProfileCard
