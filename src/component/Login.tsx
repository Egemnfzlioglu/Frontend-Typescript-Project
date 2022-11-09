import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import SendIcon from '@mui/icons-material/Send';
import {
    InputText,
    Typographies,
    FormButton,
    PageContainer,
    TypographyLink,
    PageForm,
    FormHeader,
} from '../StyledComponentItem/StyledItem';
import Paper from '@mui/material/Paper';
import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),

})

const Login = () => {

    const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            console.log(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
            <PageContainer maxWidth="md">
                <CssBaseline />
                <Paper elevation={6}
                    sx={{
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <PageForm
                        component="form"
                        onSubmit={() => handleSubmit()}
                    >
                        <FormHeader >
                            <Typographies variant="h4">LOGIN</Typographies>
                        </FormHeader>

                        <InputText
                            required
                            size="small"
                            label="Email Address"
                            id="email"
                            name="email"
                            type="email"
                            onChange={handleChange}
                            value={values.email}
                            onBlur={handleBlur}
                            helperText={touched.email && errors.email}
                            placeholder="Please Enter Your Email Address..."
                        />
                        <InputText
                            required
                            size="small"
                            label="Password"
                            id="password"
                            name="password"
                            type="password"
                            onChange={handleChange}
                            value={values.password}
                            onBlur={handleBlur}
                            helperText={touched.password && errors.password}
                            // error={true}
                            placeholder="Please Enter Your Password..."
                        />
                        <Box component="p" sx={{
                            width: "65%",
                            margin: "1rem auto"
                        }} >
                            <TypographyLink to="/auth/register">
                                Register
                            </TypographyLink>
                        </Box>
                        <FormButton variant="contained" type="submit" endIcon={<SendIcon />}>
                            Send
                        </FormButton>
                    </PageForm>

                </Paper>
            </PageContainer>
        </>
    )
}

export default Login
