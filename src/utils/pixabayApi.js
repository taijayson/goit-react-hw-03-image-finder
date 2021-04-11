import axios from "axios";

const fetchApi = ({ queryImg = "", currentPage = 1, perPage = 12 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=20758880-26a96877c6629f333f17d88c3&q=${queryImg}&page=${currentPage}
      &image_type=photo&orientation=horizontal&per_page=${perPage}`
    )
    .then((res) => res.data.hits);
};

export default { fetchApi };
