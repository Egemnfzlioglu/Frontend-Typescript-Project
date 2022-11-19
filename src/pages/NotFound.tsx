import { CardMedia } from '@mui/material'
import React from 'react'
import notFound from "../img/notfound.png"

const NotFound = () => {
    return (
        <CardMedia
            component="img"
            image={notFound}
            sx={{
                height: "90vh",
                marginTop: "4%",
                objectFit: "contain",
                borderRadius: "0.75rem",
            }}
            alt={`NotFound`}
        />
    )
}

export default NotFound
