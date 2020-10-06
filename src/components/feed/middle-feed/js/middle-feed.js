import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-component';
import {
    PostMansonry,
    FetchPosts,
} from '.'
import '../scss/_home.scss';

const masonryOptions = {
    transitionDuration: 25
};


const MiddleFeed = () => {
    const [postsArray, setPostsArray] = useState([]); // posts array

    useEffect(() => {
        FetchPosts(setPostsArray);
    }, []);

    return (
        <div className="container-MiddleFeed">
            <h1>Masonry</h1>
            <section className="container-post">
                <Masonry
                    className={'posts-section'} // default ''
                    elementType={'div'} // default 'div'
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                >
                    <PostMansonry postsArray={postsArray} />
                </Masonry>
            </section>
        </div>
    );
}

export default MiddleFeed;
