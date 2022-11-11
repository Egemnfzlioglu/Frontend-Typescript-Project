
interface initialStateProps {
    user: null | { results: any[] };
    error: {
        message: null | string;
    };
    status: 'idle' | 'loading' | 'failed';
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

