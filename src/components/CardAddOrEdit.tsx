import React, { useState, useEffect } from 'react';
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
    Image,
} from '../StyledComponentItem/StyledItem';
import Tags from './Tags';
import { toastError } from '../toast/toast';
import ReactImageFileToBase64 from "react-file-image-to-base64";
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { createPost } from '../features/createThunk/postResponseThunk';
import { useNavigate, redirect } from 'react-router-dom';


const validationSchema = Yup.object({
    title: Yup.string()
        .trim()
        .min(3, 'Must be 3 characters or less')
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
    description: Yup.string()
        .trim()
        .min(20, 'Must be 3 characters or less')
        .required('Required'),
})

const initialValues: Post = {
    description: "",
    title: "",
    tags: [],
    imageFile: ""
}

const CardAddOrEdit = () => {

    const [chip, setChip] = useState("")
    const [chipData, setChipData] = useState<string[]>([]);
    const [image, setImage] = useState<string>("");
    const [imageName, setImageName] = useState<string>("");

    const dispatch = useAppDispatch()
    const { error } = useAppSelector(state => state.post)
    const { user, loginJSON } = useAppSelector(state => state.auth)
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            const { description, title } = values
            const lastValues = { description, title, tags: chipData, imageFile: image }

            if (!loginJSON) {
                toastError("Please Login...You are redirected to the login page in 5 seconds ")
                setTimeout(() => {
                    window.location.reload()
                    redirect("/login")
                }, 5000);

            } else {
                if (user?.result?._id) {
                    if (lastValues) {
                        const postData = {
                            name: user?.result?.name,
                            creator: user?.result?._id,
                            ...lastValues,
                        }
                        dispatch(createPost({ postData, navigate }))
                    }
                }
            }

            console.log(JSON.stringify(
                {
                    name: user?.result?.name,
                    creator: user?.result?._id,
                    lastValues,
                }, null, 2));

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
        setChip(e.target.value.trim())
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

    const handleDelete = (data: string) => {
        setChipData((chips) => chips.filter((chip) => chip !== data))
    };
    //============================================================================

    const handleOnCompleted = (files: object[] | any[]) => {
        setImage(files[0].base64_file);
        setImageName(files[0].file_name);
    };

    //============================================================================

    useEffect(() => {
        error && toastError(error);
    }, [error]);


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
                            helperText={`Use "," to separate tags and min 3 max 30 characters or 5 tags`}
                            onChange={handleTags}
                            value={chip}
                            onBlur={handleBlur}
                            onKeyDown={tagInput}
                        />

                        <Image>
                            <ReactImageFileToBase64
                                multiple={false}
                                onCompleted={handleOnCompleted}
                                preferredButtonText="Select file"
                            />
                            <div style={{ margin: "0 1rem" }}
                            >{imageName ? imageName : "No File Selected"}</div>
                        </Image>

                        <FormButton variant="contained" type="submit" endIcon={<SendIcon />}>
                            Submit
                        </FormButton>
                    </PageForm>
                </PaperContainer>
            </PageContainer>
        </>
    )
}

export default CardAddOrEdit
