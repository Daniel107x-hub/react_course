import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID iLnway9er1kVJ0Wl6uFGSu5C7kxkP0qb5BVLnc7-9BM`,
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
