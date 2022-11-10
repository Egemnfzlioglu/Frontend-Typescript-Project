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
    PageForm,
    FormHeader,
    PaperContainer,
} from '../StyledComponentItem/StyledItem';


const validationSchema = Yup.object({
    description: Yup.string()
        .min(3, 'Must be 3 characters or less')
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
    title: Yup.string()
        .min(3, 'Must be 3 characters or less')
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
    file: Yup.string()
        .max(30, 'Must be 30 characters or less')

})

const initialValues = {
    description: "",
    title: "",
    file: "",
}

const CardsAdd = () => {

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
                            <Typographies variant="h4">Add</Typographies>
                        </FormHeader>
                        <InputText
                            required
                            size="small"
                            label="Title"
                            name="title"
                            id="title"
                            type="text"
                            onChange={handleChange}
                            value={values.title}
                            onBlur={handleBlur}
                            helperText={touch.title}
                            // error={true}
                            placeholder="Please Enter Title..."
                        />
                        <InputText
                            required
                            size="small"
                            label="Description"
                            name="description"
                            id="description"
                            type="text"
                            onChange={handleChange}
                            value={values.description}
                            multiline
                            rows="4"
                            onBlur={handleBlur}
                            helperText={touch.description}
                            // error={true}
                            placeholder="Please Enter Description"
                        />
                        <InputText
                            required
                            size="small"
                            name="file"
                            id="file"
                            type="file"
                            onChange={handleChange}
                            value={values.file}
                            onBlur={handleBlur}
                            helperText={touch.file}
                        // error={true}
                        />
                        <FormButton variant="contained" type="submit" endIcon={<SendIcon />}>
                            Send
                        </FormButton>
                    </PageForm>
                </PaperContainer>
            </PageContainer>
        </>
    )
}

export default CardsAdd
