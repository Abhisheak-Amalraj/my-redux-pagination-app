import axios from 'axios';

const BASE_URL = 'http://nyx.vima.ekt.gr:3000'; // API endpoint

export const fetchDataFromAPI = async (page, searchQuery) => {
  const params = {
    page: page || 1,
    q: searchQuery || '',
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data from the API.');
  }
};
