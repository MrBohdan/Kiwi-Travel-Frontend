import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
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
    moment.locale('ru')
    return moment(zonedDateTime).format('ll');
}

// Responses for card structure 
export default function MasonryPost({ postsArray, index }) {
    return (
        <div key={index} className="masonry-post col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="card">
                <CardActionArea component="span" >
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
            </div>
        </div >
    )
}
