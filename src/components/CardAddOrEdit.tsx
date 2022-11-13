import React, { useState } from 'react';
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
    FormFooter,
} from '../StyledComponentItem/StyledItem';
import Tags from './Tags';
import { toastError } from '../toast/toast';
import ReactImageFileToBase64 from "react-file-image-to-base64";

const validationSchema = Yup.object({
    description: Yup.string()
        .trim()
        .min(3, 'Must be 3 characters or less')
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
    title: Yup.string()
        .trim()
        .min(3, 'Must be 3 characters or less')
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
})

const initialValues = {
    description: "",
    title: "",
    file: "",
    tags: [],
}

const CardAddOrEdit = () => {

    const [chip, setChip] = useState("")
    const [chipData, setChipData] = useState<string[]>([]);
    const [image, setImage] = useState<string>("");

    console.log("base64_file", image)

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            const { description, title, } = values
            const lastValues = { description, title, file: image, tags: chipData }

            alert(JSON.stringify(lastValues, null, 2));
            resetForm()
            setChipData([])
            setChip("")
            setImage("")
        },
    });

    const { handleBlur, handleChange, handleSubmit, values, errors, touched } = formik

    const handleOnSubmit = (e: React.FormEvent<HTMLDivElement>) => {
        e.preventDefault();
        handleSubmit();
    }
    //============================================================================

    const handleTags = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setChip(e.target.value)
    }

    const tagInput = (e: React.KeyboardEvent<HTMLDivElement>) => {

        if (e.key === ",") {
            if (chip.trim().length <= 2) {
                setChip("")
                if (chip === "") {
                    toastError("Min 3 Characters")
                }
            } else {
                if (chipData.length < 5) {
                    if (chip.length <= 30) {
                        setChipData(chip.trim().split(","))
                    } else {
                        return toastError("Max 30 Characters")
                    }
                } else {
                    toastError("max 5 Tags")
                    setChip("")
                }
            }
        }
    }

    console.log(chipData)

    const handleDelete = (data: string) => {
        setChipData((chips) => chips.filter((chip) => chip !== data))
    };
    //============================================================================

    const handleOnCompleted = (files: object[] | any[]) => {
        setImage(files[0].base64_file);
    };

    //============================================================================

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
                            helperText={touched.title && errors.title}
                            error={touched.title && errors.title ? true : false}
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
                            helperText={touched.description && errors.description}
                            error={touched.description && errors.description ? true : false}
                            placeholder="Please Enter Description"
                        />
                        <Tags
                            chipData={chipData}
                            handleDelete={handleDelete}
                        />
                        <InputText
                            required
                            size="small"
                            label="Tags"
                            name="tags"
                            id="tags"
                            type="text"
                            placeholder="Please Enter tags"
                            helperText={touched.tags && `use "," to separate tags`}
                            onChange={handleTags}
                            value={chip}
                            onBlur={handleBlur}
                            onKeyDown={tagInput}
                        />

                        {/* <InputText
                            size="medium"
                            name="file"
                            id="file"
                            type="file"
                            onChange={handleChange}
                            value={values.file}
                            onBlur={handleBlur}
                        /> */}

                        <FormFooter>

                            <ReactImageFileToBase64
                                multiple={false}
                                onCompleted={handleOnCompleted}
                                preferredButtonText="Click Me !"
                            />
                        </FormFooter>

                        <FormButton variant="contained" type="submit" endIcon={<SendIcon />}>
                            Send
                        </FormButton>
                    </PageForm>
                </PaperContainer>
            </PageContainer>
        </>
    )
}

export default CardAddOrEdit
