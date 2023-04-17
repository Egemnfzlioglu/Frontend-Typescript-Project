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
import { createPost, updatePost } from '../features/createThunk/postResponseThunk';
import { useNavigate, redirect, useParams } from 'react-router-dom';
import { CardMedia } from '@mui/material';
import InputButton from './InputButton';

const validationSchema = Yup.object({
    title: Yup.string()
        .trim()
        .min(3, 'Must be 3 characters or less')
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
    description: Yup.string()
        .min(20, 'Must be 20 characters or less')
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
    const navigate = useNavigate()
    const { id } = useParams()
    const { error, userPosts, } = useAppSelector(state => state.post)
    const { user, loginJSON } = useAppSelector(state => state.auth)

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
                        if (!id) {
                            dispatch(createPost({ postData, navigate }))
                        } else {
                            dispatch(updatePost({ id, postData }))
                            navigate("/")
                        }
                    }
                }
            }
            resetForm()
            setChipData([])
            setChip("")
            setImage("")
        },
    });
    const { handleBlur, handleChange, handleSubmit, setValues, resetForm, values, errors, touched } = formik

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
                    if (chip.length <= 40) {
                        setChipData(chip.trim().split(","))
                    } else {
                        return toastError("Max 40 Characters")
                    }
                } else {
                    toastError("max 5 Tags")
                    setChip("")
                }
            }
        }
    }

    const handleDelete = (data: string) => {
        values.tags
            ? setChipData((chips) => chips.filter((chip) => chip !== data))
            : setChipData((chips) => chips.filter((chip) => chip !== data))
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

    useEffect(() => {
        if (id) {
            const singlePost = userPosts.find((post) => post._id === id)
            setValues({ ...singlePost })
        } else {
            resetForm()
            setChipData([])
            setChip("")
            setImage("")
        }
    }, [id, resetForm, setValues, userPosts]);

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
                            <Typographies variant="h4">{id ? "Edit Post" : "Add Post"}</Typographies>
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
                            chipData={values.tags ? chipData || values.tags : chipData}
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
                            helperText={`Use "," to separate tags and min 3 max 40 characters or 5 tags`}
                            onChange={handleTags}
                            value={values.tags ? chip || values.tags : chip}
                            onBlur={handleBlur}
                            onKeyDown={tagInput}
                        />
                        <Image>
                            {!id ?
                                <CardMedia
                                    component="img"
                                    image={image ?
                                        image
                                        : "https://nebosan.com.tr/wp-content/uploads/2018/06/no-image.jpg"}

                                    sx={{
                                        width: "160px",
                                        height: "90px",
                                        objectFit: "contain",
                                    }}
                                    alt={`${imageName || values.imageFile}`}
                                /> : <CardMedia
                                    component="img"
                                    image={values.imageFile
                                        ? image || values.imageFile
                                        : image || "https://nebosan.com.tr/wp-content/uploads/2018/06/no-image.jpg"}

                                    sx={{
                                        width: "160px",
                                        height: "90px",
                                        objectFit: "contain",
                                    }}
                                    alt={`${imageName || values.imageFile}`}
                                />}
                            <ReactImageFileToBase64
                                multiple={false}
                                onCompleted={handleOnCompleted}
                                preferredButtonText="Select file"
                                CustomisedButton={InputButton}
                            />
                            <div style={{ margin: "0 1rem" }}
                            >{imageName ? imageName : "No File Selected"}</div>
                        </Image>
                        <FormButton variant="contained" type="submit" endIcon={<SendIcon />}>
                            {id ? "Update" : " Submit"}
                        </FormButton>
                    </PageForm>
                </PaperContainer>
            </PageContainer>
        </>
    )
}

export default CardAddOrEdit
