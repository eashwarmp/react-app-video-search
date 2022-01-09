import axios from 'axios';

const KEY = 'AIzaSyCJsQsWizFaHAvzeDv9OXFKEhrxPX2EALM';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        type : 'video',
        key : KEY
    }
});