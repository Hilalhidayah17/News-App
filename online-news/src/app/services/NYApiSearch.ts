"use server";

import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_NYT_API_KEY;
const BASE_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=`;

export const fetchNewsQuery = async (query: string) => {
  try {
    const res = await axios.get(`${BASE_URL}${query}&api-key=${API_KEY}`);
    return res.data.response.docs;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
