import { lazy } from 'react';

const UpperFeed = lazy(() => import('./upper-feed/js/upper-feed'));
const MiddleFeed = lazy(() => import('./middle-feed/js/middle-feed'));
const FooterContainer = lazy(() => import('./footer/js/footer-container'));

export {
    UpperFeed,
    MiddleFeed,
    FooterContainer
}