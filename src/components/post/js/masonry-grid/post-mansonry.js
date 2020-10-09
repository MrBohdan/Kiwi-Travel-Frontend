import React from 'react';
import {
    MasonryPost
} from '../index';

export default function PostMansonry({ postsArray, columns, handleChanges, modalProps }) {
    return (
        <section className="masonry" style={{ gridTemplateColumns: `repeat(${columns}, minmax(275px, 1fr))` }}>
            {postsArray.map((postsArray, index) =>
                <MasonryPost {...{ postsArray, handleChanges, key: index, modalProps }} />)
            }
        </section>
    )

}