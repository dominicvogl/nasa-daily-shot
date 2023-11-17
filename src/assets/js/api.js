function getCurrentDate(offset = 0) {
    const date = new Date();
    date.setDate(date.getDate() - offset);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are 0-indexed in JavaScript
    const day = ('0' + date.getDate()).slice(-2);

    return `${year}-${month}-${day}`;
}

const apiRequest = () => {

    const start_date = getCurrentDate(8);
    const end_date = getCurrentDate();

    const nasaGovApiKey = import.meta.env.NASA_API_KEY;
    const nasaGovApiPath = 'https://api.nasa.gov/planetary/apod';

    return `${nasaGovApiPath}?api_key=${nasaGovApiKey}&start_date=${start_date}&end_date=${end_date}&thumbs=true`;
}

export default apiRequest;