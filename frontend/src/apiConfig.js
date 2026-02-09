const API_BASE_URL = process.env.REACT_APP_API_URL ||
    (window.location.hostname === 'localhost' ? 'http://localhost:5000' : 'https://cognixainew.onrender.com');

export default API_BASE_URL;
