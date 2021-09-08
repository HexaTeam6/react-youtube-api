import axios from "axios";

export default axios.create({
    baseUrl: 'http://www.googlepapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyAK-R94k759fpLV__WQ1VweeJuCDz8sRiM'
    }
});