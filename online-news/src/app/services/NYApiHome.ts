"use server";

import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_NYT_API_KEY;
const BASE_URL = `https://api.nytimes.com/svc/topstories/v2/`;

export const fetchNews = async (category: string) => {
  const res = await axios.get(
    `${BASE_URL}/${category}.json?api-key=${API_KEY}
`
  );
  return res.data;
};
