import axios, { AxiosResponse } from "axios";

const BASE_URL = "https://api.unsplash.com";
const END_POINT = "/search/photos";

interface UnsplashImage {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string;
}

interface UnsplashResponse {
  results: UnsplashImage[];
  total: number;
  total_pages: number;
}

const fetchImagesWithSearch = async (
  searchQuery: string,
  pageNum: number
): Promise<UnsplashResponse> => {
  const { data }: AxiosResponse<UnsplashResponse> = await axios.get(
    `${BASE_URL}${END_POINT}`,
    {
      params: {
        client_id: "jdCTUKqzBz3xQoj8tA5jedQjYaU9QURnh_dnkCa5f5E",
        query: searchQuery,
        orientation: "landscape",
        page: pageNum,
        per_page: 15,
      },
    }
  );


  return data;
};

export default fetchImagesWithSearch;