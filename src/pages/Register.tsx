import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import SendIcon from '@mui/icons-material/Send';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    InputText,
    Typographies,
    FormButton,
    PageContainer,
    TypographyLink,
    PageForm,
    FormHeader,
    PageChangeBox,
    PaperContainer
} from '../StyledComponentItem/StyledItem';


const validationSchema = Yup.object({
    firstName: Yup.string()
        .min(3, 'Must be 3 characters or less')
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
    lastName: Yup.string()
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

const initialValues = {
    firstName: "",
    lastName: "",
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

    const touch = touched && errors

    const handleOnSubmit = (e: React.FormEvent<HTMLDivElement>) => {
        e.preventDefault();
        handleSubmit();
    }

    return (
        <>
            <PageContainer maxWidth="md">
                <CssBaseline />
                <PaperContainer elevation={6}>
                    <PageForm
                        component="form"
                        onSubmit={(e) => handleOnSubmit(e)}
                    >
                        <FormHeader>
                            <Typographies variant="h4">REGISTER</Typographies>
                        </FormHeader>
                        <InputText
                            required
                            size="small"
                            label="First Name"
                            name="firstName"
                            id="firstName"
                            type="text"
                            onChange={handleChange}
                            value={values.firstName}
                            onBlur={handleBlur}
                            helperText={touch.firstName}
                            // error={true}
                            placeholder="Please Enter Your First Name..."
                        />
                        <InputText
                            required
                            size="small"
                            label="Last Name"
                            name="lastName"
                            id="lastName"
                            type="text"
                            onChange={handleChange}
                            value={values.lastName}
                            onBlur={handleBlur}
                            helperText={touch.lastName}
                            // error={true}
                            placeholder="Please Enter Your Last Name..."
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
                            helperText={touch.email}
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
                            helperText={touch.password}
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
                            helperText={touch.confirmPassword}
                            // error
                            placeholder="Please Enter Your Confirm Password..."
                        />
                        <PageChangeBox component="p">
                            <TypographyLink to="/auth/login">
                                Login
                            </TypographyLink>
                        </PageChangeBox>
                        <FormButton variant="contained" type="submit" endIcon={<SendIcon />}>
                            Send
                        </FormButton>
                    </PageForm>
                </PaperContainer>
            </PageContainer>
        </>
    )
}

export default Register
