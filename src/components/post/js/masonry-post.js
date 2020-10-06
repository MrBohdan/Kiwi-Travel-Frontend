import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import { useDispatch } from "react-redux";
import {
    getPostsByID,
    deletePosts
} from '../../actions/postAction';
import {
    FIND_POST,
    EDIT_POSTS
} from '../../actions/types';
import moment from 'moment';

import 'moment/locale/ru'
import 'moment/locale/uk'
import 'moment/locale/en-gb'

function replaceFigures(content) {
    const replaceRegex = new RegExp(/(<figure.*?figure>)/g)
    return content.replace(replaceRegex, '');
}

function truncateWithEllipses(content, max) {
    return content.substr(0, max - 1) + (content.length > max ? '...' : '');
}

function description(content) {
    return { __html: truncateWithEllipses(replaceFigures(content), 260) };
}

const formatDateTime = (zonedDateTime) => {
    moment.locale('en-gb')
    return moment(zonedDateTime).format('ll');
}

// Responses for card structure 
export default function MasonryPost({ postsArray, handleChanges, index, modalProps }) {

    const dispatch = useDispatch();

    // load post by id 
    const fetchPostByID = (postID, type) => (
        dispatch(getPostsByID(postID, type))
    );

    return (
        <div key={index} className="masonry-post">
            <div className="card">
                <CardActionArea component="span"
                    onClick={(e) => {
                        modalProps.handleOpenDisplayModal();
                        fetchPostByID(postsArray.post_Id, FIND_POST);
                    }} >
                    <div className="card-img-section">
                        <img className="card-img-top" src={`data:image/jpeg;base64,${postsArray.thumbnails}`} alt="" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{postsArray.title}</h5>
                        <div dangerouslySetInnerHTML={description(postsArray.description)} />
                        <p className="card-text"><span className="text-muted">
                            {formatDateTime(postsArray.zonedDateTime)}
                        </span></p>
                    </div>
                </CardActionArea>
                <CardActions>
                    <Tooltip title="Delete" component="span">
                        <IconButton aria-label="delete" size="medium"
                            onClick={(e) =>
                                dispatch(deletePosts(postsArray.post_Id, handleChanges))
                            } >
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit" component="span">
                        <IconButton size="medium" aria-label="edit"
                            onClick={(e) => {
                                modalProps.handleOpenEditModal();
                                fetchPostByID(postsArray.post_Id, EDIT_POSTS);
                            }} >
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </div>
        </div >
    )
}
