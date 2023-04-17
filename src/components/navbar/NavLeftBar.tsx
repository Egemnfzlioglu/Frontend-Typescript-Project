import React from 'react'
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const NavLeftBar = () => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }} >
            <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                >
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: 'block' }}
                    >
                        MUI
                    </Typography>
                </IconButton>
            </Link>
        </Box>
    )
}

export default NavLeftBar
