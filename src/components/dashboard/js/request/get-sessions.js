import axios from 'axios';
import moment from 'moment';

const FetchSessions = (metrix, setMetrix) => {
    axios.get(`api/v1.0/analytics/get/Sessions`).then(response => {
        var data = [];
        response.data.reports[0].data.rows.map((rows, index) => {
            // console.log("dimensions : ", rows.dimensions[0]);
            // console.log("metrics : ", rows.metrics[0].values[0]);
            data.push({
                x: moment(rows.dimensions[0]).format('ll'),
                y: parseInt(rows.metrics[0].values[0])
            })
        });

        setMetrix(metrix => ({
            ...metrix,
            sessions: [{
                id: "Sessions",
                data: data,
            }]
        }));
        
    }).catch((error) => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log('Error config', error.config);
    });
};

export default FetchSessions;