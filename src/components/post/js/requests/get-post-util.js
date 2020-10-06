import axios from 'axios'
import { FETCH_POSTS, SET_LOADING_RESPONSE_STATUS } from '../../../actions/types';

const GetPostsUtil = (dispatch, sortParameter, currentPage, pageSize) => {

    // set laoding indicator  
    dispatch({
        type: SET_LOADING_RESPONSE_STATUS,
        loadingPostArrayStatus: true
    });

    // fetch posts from DB
    axios.get(`api/v1.0/post/get/sort/${sortParameter}/?page=${currentPage - 1}&size=${pageSize}`).then(response => {
        console.log(response.data);
        dispatch({
            type: FETCH_POSTS,
            payload: response.data.content,
            loadingPostArrayStatus: false,
            totalPages: response.data.totalPages,
            pageSize: response.data.size
        });
    }).catch((error) => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            if (error.response.status === 500) {
                dispatch({
                    type: FETCH_POSTS,
                    isServerError: true
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

export default GetPostsUtil;