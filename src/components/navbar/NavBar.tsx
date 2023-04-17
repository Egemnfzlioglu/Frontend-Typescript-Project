import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import Paper from '@mui/material/Paper/Paper';
import LoginIcon from '@mui/icons-material/Login';
import { Add } from '@mui/icons-material';
import { TypographyLink } from '../../StyledComponentItem/StyledItem';
import SearchComponent from './SearchComponent';
import NavLeftBar from './NavLeftBar';
import RightBar from './NavRightBar';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setLogout } from '../../features/auth/authSlice';
import { toastSuccess } from '../../toast/toast';
import { Grid } from '@mui/material';

const NavBar = () => {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector(state => state.auth)

    const handleLogOut = () => {
        toastSuccess("Logout Successfully")
        dispatch(setLogout())
    }

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <TypographyLink to="/profile">
                <MenuItem onClick={handleMenuClose}>
                    Profile
                </MenuItem>
            </TypographyLink>

            <TypographyLink to="/">
                <MenuItem onClick={handleMenuClose}
                >My account
                </MenuItem>
            </TypographyLink>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <TypographyLink to="/profile/add">
                <MenuItem>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <Add />
                    </IconButton>
                    <p>ADD</p>
                </MenuItem>
            </TypographyLink>
            <TypographyLink to="/profile">
                <MenuItem onClick={handleProfileMenuOpen}>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
            </TypographyLink>
            {
                user?.result?._id ? (
                    <TypographyLink to="/auth/login">
                        <MenuItem>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-haspopup="true"
                                color="inherit"
                                onClick={handleLogOut}
                            >
                                <LoginIcon />
                            </IconButton>
                            <p>LOGOUT</p>
                        </MenuItem>
                    </TypographyLink>
                ) : (
                    <TypographyLink to="/auth/login">
                        <MenuItem>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <LoginIcon />
                            </IconButton>
                            <p>LOGIN</p>
                        </MenuItem>
                    </TypographyLink>
                )
            }
        </Menu>
    );
    return (
        <Paper elevation={12}
            sx={{
                marginBottom: "1rem",
            }}>
            <Box sx={{
                flexGrow: 1,
                margin: "2% auto",
            }}>
                <Grid item md={12}>
                    <AppBar>
                        <Toolbar sx={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            position: "sticky",
                        }}>
                            <Grid item
                                md={4}
                                sm={6}
                                xs={12}
                                sx={{
                                    width: "100%",
                                }}
                            >
                                <NavLeftBar />
                            </Grid>
                            <Grid item
                                md={4}
                                sm={6}
                                xs={12}
                                sx={{
                                    width: "100%",
                                }}
                            >
                                <SearchComponent />
                            </Grid>
                            <Grid item
                                md={4}
                                sm={6}
                                xs={12}
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                    margin: " 0 0.5rem"
                                }}
                            >
                                <RightBar />
                            </Grid>
                            <Box
                                sx={{
                                    display: { xs: 'flex', md: 'none' }
                                }}>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <MoreIcon />
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Grid>
                {renderMobileMenu}
                {renderMenu}
            </Box >
        </Paper>
    );
}

export default NavBar