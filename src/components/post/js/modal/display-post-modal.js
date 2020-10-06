import React from 'react';
import '../../scss/_scrollbar.scss';

import ReactModal from 'react-modal';
import Button from "@material-ui/core/Button";
import { CircularloadingIndicator } from '../index';
import { useSelector } from "react-redux";

import moment from 'moment';

import 'moment/locale/ru'
import 'moment/locale/uk'
import 'moment/locale/en-gb'

const formatDateTime = (zonedDateTime) => {
    moment.locale('en-gb')
    return moment(zonedDateTime).format('ll');
}


function DisplayPostModal({ post, showModal, handleCloseModal }) {

    const isPostLoading = useSelector(state => state.posts.loadingPostStatus); // loading status

    function description() {
        return { __html: post.description };
    }

    return (
        <ReactModal isOpen={showModal} className="ReactModal__Overlay--after-open">
            {isPostLoading ? <CircularloadingIndicator /> :
                <div className="ReactModal__Content--after-open">
                    <form method="get" encType="multipart/form-data">
                        <img className="card-img-top" src={`data:image/jpeg;base64,${post.image}`} alt="" />
                        <div className="card-body-modal">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text" dangerouslySetInnerHTML={description()} />
                            <p className="card-text"><span className="text-muted">
                                {formatDateTime(post.zonedDateTime)}
                            </span></p>
                            <Button className="close-button" onClick={(e) => {
                                handleCloseModal();
                            }} variant="contained" color="primary" component="span">
                                Close
                 </Button>
                        </div>
                    </form>
                </div>
            }
        </ReactModal>
    )
}

ReactModal.setAppElement('body');

export default DisplayPostModal 