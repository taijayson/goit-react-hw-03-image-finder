import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ imgArr, onClick }) => {
  return (
    <ul className={styles.imageGallery}>
      {imgArr.map((app) => (
        <ImageGalleryItem
          key={app.id}
          id={app.id}
          src={app.webformatURL}
          alt={app.tags}
          largeImageUrl={app.largeImageURL}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  imgArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;
