import axios from "axios";

// Ensure your environment variables are set up correctly
const API_BASE_URL = process.env.REACT_APP_STRIPE_APP_DEV_URL; // Your new backend URL

// Axios instance for making API requests
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// Function to fetch data from API
export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axiosInstance.get(url);
    // console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
};

// Axios instance for making payment requests (if different)
export const makePaymentRequest = axios.create({
  baseURL: API_BASE_URL,
});
