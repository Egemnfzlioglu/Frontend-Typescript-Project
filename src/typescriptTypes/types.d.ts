interface InitialStateAuth {
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


interface InitialStatePost {
    post: PostSchema;
    posts: CardPostProps[] | any[];
    userPosts: any[];
    error: any;
    status: string;

}

interface Post {
    description: string;
    title: string;
    tags: string[];
    imageFile: string;
}

interface PostSlice {
    postData: Post
    navigate: NavigateFunction,
}


interface PostSchema {
    _id: string,
    title: String,
    description: String,
    name: String,
    creator: String,
    tags: [String],
    imageFile: String,
    createdAt: String,
    likeCount: Number,
}

type UpdatedPost = PayloadAction<any>



interface ProfileCardProps {
    userPost: PostSchema
    handleDelete: (id: string) => void
}

interface CardPost {
    post: CardPostProps
}

interface CardPostProps {
    _id: string,
    createdAt: string,
    creator: string,
    description: string,
    imageFile: string,
    name: string,
    tags: string[],
    title: string,
    likeCount: Number,
}



