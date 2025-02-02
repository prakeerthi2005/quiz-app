import axios from 'axios';

export const fetchQuizData = async () => {
  try {
    const response = await axios.get('https://api.jsonserve.com/Uw5CrX');
    return response.data;
  } catch (error) {
    console.error('Error fetching quiz data:', error);
    throw new Error('Failed to load quiz data.');
  }
};
