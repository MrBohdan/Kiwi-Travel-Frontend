import React from 'react';
import { Pagination } from '@material-ui/lab';
import {
    PostMansonry,
    CircularloadingIndicator,
    ServerErrorIndicator
} from './index';
import { useSelector } from "react-redux";

function DisplayPosts({ postsArray, currentPage, setCurrentPage, modalProps, handleChanges }) {

    const changePage = (event, currentPage) => {
        setCurrentPage(currentPage);
    };

    const isPostArrayloading= useSelector(state => state.posts.loadingPostArrayStatus); // loading status
    const isServerError = useSelector(state => state.posts.isServerError);  // error status
    const totalPages = useSelector(state => state.posts.totalPages); // the total quantity of pages
    const defaultPage = useSelector(state => state.posts.defaultPage); // default start page
    const columns = useSelector(state => state.posts.columns); // quantity of columns

    return (
        <section className="container-post">
            {isServerError ? <ServerErrorIndicator /> :
                <div>
                    {isPostArrayloading ? <CircularloadingIndicator /> :
                        <div className="post-block">
                            <div className="post">
                                <PostMansonry
                                    postsArray={postsArray}
                                    columns={columns}
                                    handleChanges={handleChanges}
                                    modalProps={modalProps}
                                />
                            </div>
                            <div className="paginator noselect">
                                <Pagination
                                    defaultPage={defaultPage}
                                    count={totalPages}
                                    page={currentPage}
                                    onChange={changePage}
                                />
                            </div>
                        </div>
                    }
                </div>
            }
        </section>
    );
}

export default DisplayPosts;