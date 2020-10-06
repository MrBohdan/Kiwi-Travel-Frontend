import axios from 'axios';
import {
    FIND_POST,
    EDIT_POSTS,
    SET_LOADING_RESPONSE_STATUS
} from '../../../actions/types';

const GetPostByIdUtil = (dispatch, postID, type) => {
    if (postID !== null) {
        dispatch({
            type: SET_LOADING_RESPONSE_STATUS,
            loadingPostStatus: true
        });
        axios.get(`api/v1.0/post/get/${postID}`).then(response => {

            console.log(response);
            if (type === FIND_POST) {
                dispatch({
                    type: FIND_POST,
                    payload: response.data,
                    loadingPostStatus: false
                });
            }
            if (type === EDIT_POSTS) {
                dispatch({
                    type: EDIT_POSTS,
                    postID: response.data.post_Id,
                    title: response.data.title,
                    description: response.data.description,
                    picture: response.data.image,
                    picturePreview: "data:image/png;base64," + response.data.image,
                    pictureName: "test",
                    isPictureSelected: true,
                    loadingPostStatus: false
                });
            }

        }).catch((error) => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log('Error config', error.config);
        });
    }
};

export default GetPostByIdUtil;