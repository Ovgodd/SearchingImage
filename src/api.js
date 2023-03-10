import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID i-LXQv-WWnF6gJiS3c2rpnc17zJGQBKK57AdFKsO1RE",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
