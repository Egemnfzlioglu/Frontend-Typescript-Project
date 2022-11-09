import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';



export const PageContainer = styled(Container)`
width:100%;
height:100vh;
display: flex;
justify-content:center;
align-items: center;

`

export const PageForm = styled(Box)`
display: flex;
justify-content:center;
flex-direction:column;

`

export const FormHeader = styled(Box)`
width: 100%;
margin:1rem auto;

`

export const Typographies = styled(Typography)`
width: 100%;
display: flex;
justify-content:center;
flex-direction:column;
align-items: center;

`

export const InputText = styled(TextField)`
width: 65%;
margin:1rem auto;

`

export const FormButton = styled(Button)`
width: 65%;
margin:1rem auto;

`

export const TypographyLink = styled(Link)`
margin: 0.5rem auto;
font-size:1.1rem;
text-decoration: none;
color: rgba(226, 43, 43, 0.75);
border: 1px solid black;

`



