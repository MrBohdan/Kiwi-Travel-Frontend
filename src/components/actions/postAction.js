import {
    GetPostsUtil,
    DeletePostsUtil,
    GetPostByIdUtil,
    PostsPostUtil,
    PutPostUtil
} from '../post/js/index';

export const fetchPosts = (sortParameter, currentPage, pageSize) => {
    return (dispatch) => {
        return GetPostsUtil(dispatch, sortParameter, currentPage, pageSize);
    }
}

export const deletePosts = (postID, handleChanges) => {
    return (dispatch) => {
        return DeletePostsUtil(dispatch, postID, handleChanges);
    }
}

export const getPostsByID = (postID, type) => {
    return (dispatch) => {
        return GetPostByIdUtil(dispatch, postID, type);
    }
}

export const postPosts = (post, handlePostSuccess, handleChanges) => {
    return (dispatch) => {
        return PostsPostUtil(dispatch, post, handlePostSuccess, handleChanges);
    }
}

export const updatePosts = (post, handlePostSuccess) => {
    return (dispatch) => {
        return PutPostUtil(dispatch, post, handlePostSuccess,);
    }
}