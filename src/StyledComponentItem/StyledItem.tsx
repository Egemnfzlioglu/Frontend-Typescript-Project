import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';


export const PageContainer = styled(Container)`
width: 100%;
min-height:60vh;
display: flex;
justify-content:center;
align-items: center;
margin:2rem auto 0 auto ;

`

export const PaperContainer = styled(Paper)`
width: 100%;
border-bottom: 3px solid #ddd;
margin: 7% auto 0 auto ;
display: flex;
flex-direction: column;
padding:0 0 1rem 0;
border-radius:0.75rem;


`

export const PageForm = styled(Box)`
display: flex;
justify-content:center;
flex-direction:column;
width: 100%;

`

export const ProfilePage = styled(Box)`
min-width: 100%;

`

export const FormHeader = styled(Box)`
min-width: 100%;
border-bottom: 3px solid #ddd;
margin:0.5rem auto;

`

export const PageChangeBox = styled(Box)`
width: 65%;
margin:0.5rem auto;

`

export const Typographies = styled(Typography)`
width: 100%;
display: flex;
justify-content:center;
flex-direction:column;
align-items: center;
margin:0.5rem auto 0 auto;

`

export const InputText = styled(TextField)`
width: 65%;
margin:0.5rem auto;


`

export const FormButton = styled(Button)`
width: 65%;
margin:0.5rem auto  1.5rem auto;

`

export const TypographyLink = styled(Link)`
font-size:1rem;
text-decoration: none;
width: 65%;
color: #000;

`

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '30ch',
        },
    },
}));

