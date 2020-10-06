import axios from 'axios';
import ConvertBlob from '../convert/convert-blob-to-file';
import { SET_LOADING_RESPONSE_STATUS } from '../../../actions/types';

const PutPostUtil = (dispatch, post, handlePostSuccess,) => {

    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    var postFormData = new FormData();
    postFormData.append('title', post.title);
    postFormData.append('description', post.description);

    if (post.picture instanceof File) {
        postFormData.append('file', post.picture);
    } else {
        postFormData.append('file', ConvertBlob(post.picture));
    }

    postFormData.append('staffId', localStorage.getItem('StaffId'));
    console.log("StaffId", localStorage.getItem('StaffId'));
    dispatch({
        type: SET_LOADING_RESPONSE_STATUS,
        loadingPostStatus: true
    });
    axios.put(`api/v1.0/post/update/${post.postID}`, postFormData, config).then(response => {
        console.log(response);
        dispatch({
            type: SET_LOADING_RESPONSE_STATUS,
            loadingPostStatus: false
        });
        handlePostSuccess(response);
    }).catch((error) => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);

            if (error.response.status === 400) {
                dispatch({
                    type: SET_LOADING_RESPONSE_STATUS,
                    responseResponceDataErrorStatus: true
                });
            }
            if (error.response.status === 500) {
                dispatch({
                    type: SET_LOADING_RESPONSE_STATUS,
                    responseResponceServerErrorStatus: true
                });
            }
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
};

export default PutPostUtil;