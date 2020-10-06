import {
    FETCH_POSTS,
    CREATE_POSTS,
    EDIT_POSTS,
    FIND_POST,
    SET_LOADING_RESPONSE_STATUS
} from '../actions/types';

// Evaluate all actions with posts (fetch posts/ create posts)

const initialState = {
    items: [], // posts array
    item: [], // post
    loadingPostArrayStatus: true, // loading status
    loadingPostStatus: true,  // status of loading  post
    responseResponceServerErrorStatus: false,
    responseResponceDataErrorStatus: false,
    isServerError: false,  // error status
    sortParameter: 'zonedDateTime', // sorting column
    totalPages: null, // the total quantity of pages
    defaultPage: 1, // default start page
    pageSize: 9, // size of the page
    columns: 3, // quantity of columns
    postID: '', // post title
    title: '', // post title
    description: '', // post description
    picture: null,
    picturePreview: null,
    pictureName: null,
    isPictureSelected: false,
};

export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS: // fetch all posts
            return {
                ...state,
                items: action.payload,
                loadingPostArrayStatus: action.loadingPostArrayStatus,
                isServerError: action.isServerError,
                totalPages: action.totalPages,
                pageSize: action.pageSize,
            }
        case FIND_POST: // find post by id 
            return {
                ...state,
                item: action.payload,
                loadingPostStatus: action.loadingPostStatus,
            }
        case CREATE_POSTS: // create post 
            return {
                ...state,
                title: action.title,
                description: action.description,
                picture: action.picture,
                picturePreview: action.picturePreview,
                pictureName: action.pictureName,
                isPictureSelected: action.isPictureSelected
            }
        case EDIT_POSTS: // edit post 
            return {
                ...state,
                postID: action.postID,
                title: action.title,
                description: action.description,
                picture: action.picture,
                picturePreview: action.picturePreview,
                pictureName: action.pictureName,
                isPictureSelected: action.isPictureSelected,
                loadingPostStatus: action.loadingPostStatus
            }
        case SET_LOADING_RESPONSE_STATUS: // set response status
            return {
                ...state,
                loadingPostStatus: action.loadingPostStatus,
                loadingPostArrayStatus: action.loadingPostArrayStatus,
                responseResponceServerErrorStatus: action.responseResponceServerErrorStatus,
                responseResponceDataErrorStatus: action.responseResponceDataErrorStatus,
            }
        default:
            return state;
    }

};