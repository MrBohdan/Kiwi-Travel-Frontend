import { lazy } from 'react';
// requests
import FetchPosts from './requests/load-posts';
const PostMansonry = lazy(() => import('./masonry/post-mansonry'));

export {
    FetchPosts,
    PostMansonry,
}