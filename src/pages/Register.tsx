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
import { register } from '../features/createThunk/authResponseThunk';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useNavigate } from 'react-router-dom';


const validationSchema = Yup.object({
    firstName: Yup.string()
        .trim()
        .min(3, 'Must be 3 characters or less')
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
    lastName: Yup.string()
        .trim()
        .min(3, 'Must be 3 characters or less')
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
    password: Yup.string()
        .trim()
        .min(8, 'Must be 8 characters or less')
        .max(255, 'Must be 255 characters or less')
        .required('Required'),
    confirmPassword: Yup.string()
        .trim()
        .min(8, 'Must be 8 characters or less')
        .max(255, 'Must be 255 characters or less')
        .required('Required'),
    email: Yup.string()
        .trim()
        .email('Invalid email address')
        .required('Required'),
})

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const Register = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { error } = useAppSelector((state) => state.auth)
    console.log(error)

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            const { firstName, lastName, email, password } = values

            const value = { firstName, lastName, email, password }

            if (firstName && lastName && email && password) {
                dispatch(register({ value, navigate }))
            }
            resetForm()
        },
    });

    const { handleBlur, handleChange, handleSubmit, values, errors, touched } = formik

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
                            helperText={touched.firstName && errors.firstName}
                            error={touched.firstName && errors.firstName ? true : false}
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
                            helperText={touched.lastName && errors.lastName}
                            error={touched.lastName && errors.lastName ? true : false}
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
                            helperText={touched.email && errors.email}
                            error={touched.email && errors.email ? true : false}
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
                            error={
                                touched.password && errors.password
                                    ? values.confirmPassword !== values.password
                                    : false
                            }
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
                            helperText={
                                // eslint-disable-next-line no-mixed-operators
                                touched.confirmPassword && errors.confirmPassword
                                // eslint-disable-next-line no-mixed-operators
                                || touched.confirmPassword && values.confirmPassword !== values.password
                                // eslint-disable-next-line no-mixed-operators
                                && "Password does not match"
                            }
                            error={touched.confirmPassword && errors.confirmPassword
                                ? true
                                : false
                                // eslint-disable-next-line no-mixed-operators
                                || touched.confirmPassword
                                // eslint-disable-next-line no-mixed-operators
                                && values.confirmPassword !== values.password
                            }
                            placeholder="Please Enter Your Confirm Password..."
                        />
                        <PageChangeBox component="p">
                            Already have an account?{" "}
                            <TypographyLink to="/auth/login">
                                Login
                            </TypographyLink>
                        </PageChangeBox>
                        <FormButton
                            disabled={values.confirmPassword !== values.password}
                            variant="contained" type="submit" endIcon={<SendIcon />}>
                            Send
                        </FormButton>
                    </PageForm>
                </PaperContainer>
            </PageContainer>
        </>
    )
}

export default Register
