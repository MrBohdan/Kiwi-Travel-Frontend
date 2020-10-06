import React, { useState } from 'react';
import ReactModal from 'react-modal';
import {
    ThemeProvider,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Alert from '@material-ui/lab/Alert';

import {
    CircularloadingIndicator,
    DisplaySunEditor,
    GetAuthorizedStaffID
} from '../index';

import { updatePosts } from '../../../actions/postAction';
import { useDispatch, useSelector } from "react-redux";
import { EDIT_POSTS } from '../../../actions/types';

const theme = createMuiTheme();

function EditPostModal({ showModal, handleCloseModal }) {

    const dispatch = useDispatch();

    const isPostLoading = useSelector(state => state.posts.loadingPostStatus);
    const postID = useSelector(state => state.posts.postID);

    const title = useSelector(state => state.posts.title);
    const description = useSelector(state => state.posts.description);

    const picture = useSelector(state => state.posts.picture);
    const picturePreview = useSelector(state => state.posts.picturePreview);
    const pictureName = useSelector(state => state.posts.pictureName);
    const isPictureSelected = useSelector(state => state.posts.isPictureSelected);

    const responseResponceServerErrorStatus = useSelector(state => state.posts.responseResponceServerErrorStatus);
    const responseResponceDataErrorStatus = useSelector(state => state.posts.responseResponceDataErrorStatus);

    const [isTitleTextFieldEmpty, setTitleTextFieldEmpty] = useState(false);
    const [isDescriptionTextFieldEmpty, setDescriptionTextFieldEmpty] = useState(false);

    var binaryData = [];

    var post = {
        postID,
        title,
        description,
        picture,
    };

    useState(() => {
        GetAuthorizedStaffID();
    }, []);

    const postConstructor = (title, description, picture, picturePreview, pictureName, isPictureSelected) => {
        dispatch({
            type: EDIT_POSTS,
            postID: postID,
            title: title,
            description: description,
            picture: picture,
            picturePreview: picturePreview,
            pictureName: pictureName,
            isPictureSelected: isPictureSelected
        });
    };

    const handleTitleText = (value) => {
        if (value === '') {
            setTitleTextFieldEmpty(true);
        } else {
            postConstructor(
                value,
                description,
                picture,
                picturePreview,
                pictureName,
                isPictureSelected);
            setTitleTextFieldEmpty(false);
        };
    };

    const handleDescriptionText = (value) => {
        if (value === '') {
            setDescriptionTextFieldEmpty(true);
        } else {
            postConstructor(
                title,
                value,
                picture,
                picturePreview,
                pictureName,
                isPictureSelected);
            setDescriptionTextFieldEmpty(false);
        };
    };

    const handleUploadPicture = (event) => {
        if (event.target.files[0] instanceof File) {
            binaryData.push(event.target.files[0]);
            postConstructor(
                title,
                description,
                event.target.files[0],
                window.URL.createObjectURL(new Blob(binaryData, { type: "application/zip" })),
                event.target.files[0].name,
                true
            );
        }
    };

    const handlePostSuccess = (response) => {
        if (response.status === 200) {
            handleCloseModal();
        }
    };

    const DisplayEmptyFieldPostError = () => {
        return (
            <div className="display-alert-error">
                <Alert variant="outlined" severity="error">
                    <p>Please fill in all fields!</p>
                </Alert>
            </div>
        );
    };

    const DisplayPostError = () => {
        return (
            <div className="display-alert-error">
                <Alert variant="outlined" severity="error">
                    <p>The form cannot be submitted!</p>
                    <p>Error: 500, 'Internal Server Error'! Please, check your internet/database connection!</p>
                </Alert>
            </div>
        );
    };

    const HandleIfPictureIsNotSepected = () => {
        return (
            <div className="inner-preview-section">
                <img className="picture-preview" src={picturePreview} alt="" />
                <p className="picture-name"><span className="picture-name-title">Image Name :</span> {pictureName}</p>
            </div>
        );
    };

    const DisplayTitleTitleEmptyField = () => {
        return (
            <div className="display-error-text-selected">
                <FormHelperText id="component-error-text">Title cannot be empty!</FormHelperText>
            </div>
        );
    };

    const DisplayErrorDescriptionEmptyField = () => {
        return (
            <div className="display-error-text-selected">
                <FormHelperText id="component-error-text">Description cannot be empty!</FormHelperText>
            </div>
        );
    };

    const submitPost = () => {
        if (title !== '' & description !== '') {
            dispatch(updatePosts(post, handlePostSuccess));
        } else {
            handleTitleText(title);
            handleDescriptionText(description);
        }
    };

    const useStyles = makeStyles(theme => ({
        root: {
            "& > *": {
                margin: theme.spacing(1)
            }
        },
        input: {
            display: "none"
        }
    }));
    const classes = useStyles();

    return (
        <ReactModal isOpen={showModal} className="ReactModal__Overlay--after-open">
            {isPostLoading ? <CircularloadingIndicator /> :
                <div className="ReactModal__Content--after-open">
                    <form className="form-edit-post" method="put" encType="multipart/form-data" autoComplete="off">
                        <ThemeProvider theme={theme}>
                            <div className="main-image-section">
                                <div className="preview-section section-position">
                                    {isPictureSelected ? <HandleIfPictureIsNotSepected /> :
                                        <div className="display-file-not-selected">
                                            <Alert variant="outlined" severity="info">
                                                <p>No images currently selected for upload!</p>
                                            </Alert>
                                        </div>
                                    }
                                </div>
                                <div className={classes.root}>
                                    <input
                                        accept=".png, .jpg, .jpeg"
                                        className={classes.input}
                                        id="contained-button-file"
                                        type="file"
                                        onChange={handleUploadPicture}
                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button variant="contained" color="primary" component="span">
                                            Upload Image
                            </Button>
                                    </label>
                                </div>
                            </div>
                            <hr />
                            <div className="title-section section-position">
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Title"
                                    multiline
                                    fullWidth
                                    error={isTitleTextFieldEmpty}
                                    required={true}
                                    variant="outlined"
                                    value={title}
                                    onChange={(event) => handleTitleText(event.target.value)}
                                />
                                {isTitleTextFieldEmpty ? <DisplayTitleTitleEmptyField /> : <span></span>}
                            </div>
                            <div className="description-section section-position">
                                <DisplaySunEditor
                                    handleDescriptionText={handleDescriptionText}
                                    description={description}
                                />
                                {isDescriptionTextFieldEmpty ? <DisplayErrorDescriptionEmptyField /> : <span></span>}
                            </div>
                            <div className="close-submit-form-buttons section-position">
                                <ButtonGroup color="secondary" aria-label="outlined secondary button group">
                                    <Button className="submit-button"
                                        onClick={(e) => {
                                            submitPost();
                                        }}
                                        variant="contained"
                                        color="primary"
                                        component="span">
                                        Submit
                            </Button>
                                    <Button className="close-button"
                                        onClick={(e) => {
                                            handleCloseModal();
                                        }}
                                        variant="contained"
                                        color="primary"
                                        component="span">
                                        Close
                            </Button>
                                </ButtonGroup>
                            </div>
                            <div className="error-section section-position">
                                {responseResponceServerErrorStatus ? <DisplayPostError /> :
                                    <span></span>
                                }
                                {responseResponceDataErrorStatus ? <DisplayEmptyFieldPostError /> :
                                    <span></span>
                                }
                            </div>
                        </ThemeProvider>
                    </form>
                </div>
            }
        </ReactModal>
    )
}

ReactModal.setAppElement('body');

export default EditPostModal;