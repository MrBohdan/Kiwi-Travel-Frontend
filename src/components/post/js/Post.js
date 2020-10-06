import React, { useState, useEffect } from 'react';
import '../scss/_home.scss';
import { Button } from '@material-ui/core';
import {
    EditPostModal,
    CreatePostModal,
    DisplayPosts,
    DisplayPostModal,
} from '.';
import { fetchPosts } from '../../actions/postAction';
import { useDispatch, useSelector } from "react-redux";

const Post = () => {

    const sectionPostsName = 'Posts';
    const createRecordButtonName = 'Create record';

    const postsArray = useSelector(state => state.posts.items); // posts array
    const post = useSelector(state => state.posts.item); // post
    const sortParameter = useSelector(state => state.posts.sortParameter); // sorting column
    const pageSize = useSelector(state => state.posts.pageSize); // size of the page

    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1); // current page number
    const [showCreateModal, setCreateModalState] = useState(false); // status of Create-modal
    // const [responseSuccessStatus, setResponceSuccessStatus] = useState(false);

    // handle opening Create-modal
    const handleOpenCreateModal = () => {
        setCreateModalState(true);
        ifModalOpen();
    };

    // handle closing Create-modal
    const handleCloseCreateModal = () => {
        setCreateModalState(false);
        ifModalClose();
    };

    const [showEditModal, setEditModalState] = useState(false); // status of Edit-modal

    // handle opening Edit-modal
    const handleOpenEditModal = () => {
        setEditModalState(true);
        ifModalOpen();
    };

    // handle closing Edit-modal
    const handleCloseEditModal = () => {
        setEditModalState(false);
        handleChanges();
        ifModalClose();
    };

    const [showDisplayModal, setDisplayModalState] = useState(false); // status of Display-modal 

    // handle opening Display-modal
    const handleOpenDisplayModal = () => {
        setDisplayModalState(true);
        ifModalOpen();
    };

    // handle closing Display-modal
    const handleCloseDisplayModal = () => {
        setDisplayModalState(false);
        ifModalClose();
    };

    const modalProps = {
        handleOpenEditModal,
        handleOpenDisplayModal
    };

    const ifModalOpen = () => {
        document.documentElement.style.overflow = 'hidden';
        document.body.scroll = "no";
    };

    const ifModalClose = () => {
        document.documentElement.style.overflow = 'auto';
        document.body.scroll = "yes";
    };

    // //TODO
    // const DisplaySuccessAlert = (status) => {

    // };

    //TODO
    const handleChanges = () => {
        dispatch(fetchPosts(sortParameter, currentPage, pageSize));
    };

    // load posts
    useEffect(() => {
        dispatch(fetchPosts(sortParameter, currentPage, pageSize));
    }, [currentPage]);

    return (
        <main role="main" className="main-block col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h3 className="h3 noselect">{sectionPostsName}</h3>
                <div className="btn-position">
                    <Button variant="contained" color="primary" component="span" onClick={(e) => handleOpenCreateModal()}>
                        <span className="btn-post-font">{createRecordButtonName}</span>
                    </Button>
                </div>
            </div>
            {/* {responseSuccessStatus ? <DisplaySuccessAlert /> :
                <span></span>
            } */}
            <CreatePostModal
                showModal={showCreateModal}
                handleCloseModal={handleCloseCreateModal}
                handleChanges={handleChanges}
            />
            <EditPostModal
                showModal={showEditModal}
                handleCloseModal={handleCloseEditModal}
            />
            <DisplayPostModal
                post={post}
                showModal={showDisplayModal}
                handleCloseModal={handleCloseDisplayModal}
            />
            <DisplayPosts
                postsArray={postsArray}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                modalProps={modalProps}
                handleChanges={handleChanges}
            />
        </main>
    );
};

export default Post;
