import React from 'react';
import { CircularProgress } from '@material-ui/core';

const LoadingIndicator = () => {
    return (
        <div className="loading-bar">
            <div className="loading-bar-position">
                <CircularProgress size={50} className="loading-circular-progress" />
            </div>
        </div>
    );
};

export default LoadingIndicator;