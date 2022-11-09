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
    name: Yup.string()
        .min(3, 'Must be 3 characters or less')
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Must be 8 characters or less')
        .max(255, 'Must be 255 characters or less')
        .required('Required'),
    confirmPassword: Yup.string()
        .min(8, 'Must be 8 characters or less')
        .max(255, 'Must be 255 characters or less')
        .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
})

// 
// interface ValueProps {
//     name: string;
//     email: string;
//     password: string;
//     confirmPassword: string;
// }

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const Register = () => {

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const { handleBlur, handleChange, handleSubmit, values, errors, touched } = formik

    console.log(formik);

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
                        onSubmit={(e) => handleSubmit()}

                    >
                        <FormHeader>
                            <Typographies variant="h4">REGISTER</Typographies>
                        </FormHeader>
                        <InputText
                            required
                            size="small"
                            label="Name"
                            name="name"
                            id="name"
                            type="name"
                            onChange={handleChange}
                            value={values.name}
                            onBlur={handleBlur}
                            helperText={touched.name && errors.name}
                            // error={true}
                            placeholder="Please Enter Your Name..."
                        />
                        <InputText
                            required
                            size="small"
                            label="Email Address"
                            name="email"
                            type="email"
                            onChange={handleChange}
                            value={values.email}
                            onBlur={handleBlur}
                            helperText={touched.email && errors.email}
                            // error={true}
                            placeholder="Please Enter Your Email Address..."
                        />
                        <InputText
                            required
                            size="small"
                            label="Password"
                            name="password"
                            type="password"
                            onChange={handleChange}
                            value={values.password}
                            onBlur={handleBlur}
                            helperText={touched.password && errors.password}
                            // error={true}
                            placeholder="Please Enter Your Password..."
                        />
                        <InputText
                            required
                            size="small"
                            label="Confirm Password"
                            name="confirmPassword"
                            id="confirmPassword"
                            type="password"
                            onChange={handleChange}
                            value={values.confirmPassword}
                            onBlur={handleBlur}
                            helperText={touched.confirmPassword && errors.confirmPassword}
                            // error
                            placeholder="Please Enter Your Confirm Password..."
                        />
                        <Box component="p"
                            sx={{
                                width: "65%",
                                margin: "1rem auto"
                            }}>
                            <TypographyLink to="/auth/login">
                                Login
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

export default Register
