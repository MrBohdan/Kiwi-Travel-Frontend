import React from 'react';
import MasonryPost from './masonry-post';

const PostMansonry = ({ postsArray }) => postsArray.map((postsArray, index) => <MasonryPost {...{ postsArray, key: index }} />);

export default PostMansonry;