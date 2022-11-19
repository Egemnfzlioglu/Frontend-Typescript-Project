import React, { useEffect } from 'react';
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
    PaperContainer,
} from '../StyledComponentItem/StyledItem';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useNavigate } from 'react-router-dom';
import { login } from '../features/createThunk/authResponseThunk';
import { toastError } from '../toast/toast';


const validationSchema = Yup.object({
    email: Yup.string()
        .trim()
        .email('Invalid email address')
        .required('Required'),
    password: Yup.string()
        .trim()
        .required('Required'),
})

const initialValues = {
    email: "",
    password: "",
}


const Login = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { error, status } = useAppSelector((state) => state.auth)

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            if (values.email && values.password) {
                dispatch(login({ values, navigate }))
            }
            resetForm()
            error.message = ""
        },
    });

    const { handleBlur, handleChange, handleSubmit, values, errors, touched } = formik

    const handleOnSubmit = (e: React.FormEvent<HTMLDivElement>) => {
        e.preventDefault();
        handleSubmit();
    }

    useEffect(() => {
        error.message && toastError(`${error.message}`)
    }, [error])

    return (
        <>
            <PageContainer maxWidth="md">
                <CssBaseline />
                <PaperContainer elevation={6}>
                    <PageForm
                        component="form"
                        onSubmit={(e) => handleOnSubmit(e)}
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
                            error={touched.email && errors.email ? true : false}
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
                            error={touched.password && errors.password ? true : false}
                            placeholder="Please Enter Your Password..."
                        />
                        <PageChangeBox component="p">
                            Don't Have an Account ?{" "}
                            <TypographyLink to="/auth/register">
                                Sign Up
                            </TypographyLink>
                        </PageChangeBox>

                        <FormButton variant="contained"
                            disabled={status === "loading"}
                            type="submit" endIcon={<SendIcon />}>
                            Send
                        </FormButton>
                    </PageForm>
                </PaperContainer>
            </PageContainer>
        </>
    )
}

export default Login
