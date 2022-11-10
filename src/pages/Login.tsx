import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import SendIcon from '@mui/icons-material/Send';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { PaperContainer } from '../StyledComponentItem/StyledItem';
import {
    InputText,
    Typographies,
    FormButton,
    PageContainer,
    TypographyLink,
    PageForm,
    FormHeader,
    PageChangeBox,
} from '../StyledComponentItem/StyledItem';


const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
        .required('Required'),
})

const initialValues = {
    email: "",
    password: "",
}

const Login = () => {

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            console.log(JSON.stringify(values, null, 2));
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
                            helperText={touch.email}
                            // error={true}
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
                            helperText={touch.password}
                            // error={true}
                            placeholder="Please Enter Your Password..."
                        />
                        <PageChangeBox component="p"  >
                            <TypographyLink to="/auth/register">
                                Register
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

export default Login
