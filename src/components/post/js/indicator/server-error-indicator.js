import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';

function ServerErrorIndicator() {

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    };

    return (
        <div className="error-indicator">
            <Alert severity="error">Error: 500, 'Internal Server Error'! Please, check your internet/database connection (OR wrong image type)!</Alert>
        </div>
    );
};

export default ServerErrorIndicator;