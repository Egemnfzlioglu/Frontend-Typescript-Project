interface initialStateProps {
    user: USER | null
    error: ERROR
    status: 'idle' | 'loading' | 'failed';
    loginJSON: any;
}

interface USER {
    result: {
        _id: string;
        email: string;
        name: string;
        password: string;
    };
    token: string;
}

interface ERROR {
    message: string;
}


interface Login {
    email: string;
    password: string;
    token?: string;
}

interface LoginSlice {
    values: Login,
    navigate: NavigateFunction,
}

interface Register {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

interface RegisterSlice {
    value: Register,
    navigate: NavigateFunction,
}

interface RightBarProps {
    menuId: string
    mobileMenuId: string
    handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void
    handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void
    renderMobileMenu: JSX.Element
}

interface MobileMenuProps {
    mobileMoreAnchorEl: HTMLElement | null
    mobileMenuId: string
    handleMobileMenuClose: () => void
    handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void
    isMobileMenuOpen: boolean
}


interface MenuProps {
    anchorEl: HTMLElement | null
    menuId: string
    isMenuOpen: boolean
    handleMenuClose: () => void
}

