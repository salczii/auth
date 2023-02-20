import express from 'express';
import fetch from 'node-fetch';
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
})
app.get('/', (req, res) => {
    res.send('Hello World!');
});


const access_token = "dc6d0ac541f3d744c428b51fbcf953ecb88a3d2a";



const fetchDataFromMyStravaAccount = async () => {
    const response = await fetch(
        `https://www.strava.com/api/v3/athletes/104265130/stats`,
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    ); 
    return response.json();
}

fetchDataFromMyStravaAccount().then((data) => {
    console.log(data);
})