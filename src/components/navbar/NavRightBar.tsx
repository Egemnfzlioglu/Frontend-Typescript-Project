import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import { Add, Home, ExitToApp } from '@mui/icons-material';
import { TypographyLink } from '../../StyledComponentItem/StyledItem';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setLogout } from '../../features/auth/authSlice';
import { toastSuccess } from '../../toast/toast';

const RightBar = () => {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector(state => state.auth)

    const handleLogOut = () => {
        toastSuccess("Logout Successfully")
        dispatch(setLogout())
    }
    return (
        <Box
            sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: "center",
                justifyContent: "center",
            }}>
            <TypographyLink to="/">
                <IconButton size="medium" aria-label="">
                    <p style={{
                        color: "#fff"
                    }}>Home</p>
                    <Home
                        sx={{
                            color: "#fff"
                        }}
                    />
                </IconButton>
            </TypographyLink>
            {
                user?.result?._id
                    ? (
                        <>
                            <TypographyLink to="/profile/add">
                                <IconButton size="medium" aria-label="">
                                    <p style={{
                                        color: "#fff"
                                    }}>Add</p>
                                    <Add
                                        sx={{
                                            color: "#fff"
                                        }}
                                    />
                                </IconButton>
                            </TypographyLink>
                            <TypographyLink to="/profile">
                                <IconButton
                                    size="medium"
                                    edge="end"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <p style={{
                                        color: "#fff"
                                    }}
                                    >Account</p>
                                    <AccountCircle sx={{ color: "#fff" }} />
                                </IconButton>
                            </TypographyLink>
                            <TypographyLink to="/auth/login">
                                <IconButton
                                    size="medium"
                                    edge="end"
                                    aria-haspopup="true"
                                    color="inherit"
                                    onClick={handleLogOut}
                                >
                                    <p style={{
                                        color: "#fff"
                                    }}
                                    >Logout</p>
                                    <ExitToApp sx={{ color: "#fff" }} />
                                </IconButton>
                            </TypographyLink>
                        </>
                    )
                    : (
                        <TypographyLink to="/auth/login">
                            <IconButton
                                size="medium"
                                edge="end"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <p style={{
                                    color: "#fff"
                                }}
                                >Login</p>
                                <LoginIcon sx={{ color: "#fff" }} />
                            </IconButton>
                        </TypographyLink>
                    )
            }
        </Box >
    )
}

export default RightBar
